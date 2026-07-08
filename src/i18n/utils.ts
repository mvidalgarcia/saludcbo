import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';
export const defaultLang: Lang = 'es';
export const supportedLangs: readonly Lang[] = ['es', 'en'] as const;

const translations: Record<Lang, Record<string, unknown>> = { es, en };

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'es';
}

function resolve(obj: unknown, keys: string[]): string | undefined {
  let cur: unknown = obj;
  for (const k of keys) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = (cur as Record<string, unknown>)[k];
  }
  return typeof cur === 'string' ? cur : undefined;
}

export function useTranslations(lang: Lang) {
  return (key: string): string => {
    return (
      resolve(translations[lang], key.split('.')) ??
      resolve(translations[defaultLang], key.split('.')) ??
      key
    );
  };
}

// Maps ES path segments → EN path segments (and reverse)
const esToEnSegments: Record<string, string> = {
  servicios: 'services',
  'empresa-saludable': 'corporate-wellness',
  aviso: 'legal-notice',
  privacidad: 'privacy-policy',
  cookies: 'cookie-policy',
};
const enToEsSegments: Record<string, string> = Object.fromEntries(
  Object.entries(esToEnSegments).map(([k, v]) => [v, k]),
);

// Maps ES service slugs → EN service slugs
const esSlugToEn: Record<string, string> = {
  entrenamiento: 'training',
  'entrenamiento-online': 'online-training',
  nutricion: 'nutrition',
  fisioterapia: 'physiotherapy',
  pilates: 'pilates',
  'empresa-saludable': 'corporate-wellness',
};
const enSlugToEs: Record<string, string> = Object.fromEntries(
  Object.entries(esSlugToEn).map(([k, v]) => [v, k]),
);

function translatePathSegment(segment: string, direction: 'esToEn' | 'enToEs'): string {
  const map = direction === 'esToEn' ? esToEnSegments : enToEsSegments;
  const slugMap = direction === 'esToEn' ? esSlugToEn : enSlugToEs;
  return map[segment] ?? slugMap[segment] ?? segment;
}

export function getAlternatePath(url: URL, targetLang: Lang): string {
  const path = url.pathname;

  if (targetLang === 'en') {
    if (path.startsWith('/en')) return path;
    const translated = path
      .split('/')
      .map((seg) => translatePathSegment(seg, 'esToEn'))
      .join('/');
    return `/en${translated === '/' ? '' : translated}`;
  }

  // targetLang === 'es'
  const enPath = path.startsWith('/en/') ? path.slice(3) : path.replace(/^\/en$/, '/');
  return (
    enPath
      .split('/')
      .map((seg) => translatePathSegment(seg, 'enToEs'))
      .join('/') || '/'
  );
}
