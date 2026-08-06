// Site-wide contact details and links (single source of truth).
export const SITE = {
  email: 'cbo.salud@gmail.com',
  phoneDisplay: '+34 667 828 851',
  phoneTel: 'tel:+34667828851',
  whatsappNumber: '34667828851',
  whatsappUrl: 'https://wa.me/34667828851',
  instagram: 'https://www.instagram.com/cbosalud/',
  instagramHandle: '@cbosalud',
} as const;

/** Build a WhatsApp deep-link, optionally with a pre-filled message. */
export function waLink(message?: string): string {
  return message ? `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}` : SITE.whatsappUrl;
}
