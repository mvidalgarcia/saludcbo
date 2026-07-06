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

export function getAlternatePath(url: URL, targetLang: Lang): string {
  const path = url.pathname;
  if (targetLang === 'en') {
    return path.startsWith('/en') ? path : `/en${path === '/' ? '' : path}`;
  }
  return path.startsWith('/en/') ? path.slice(3) : path.replace(/^\/en$/, '/');
}
