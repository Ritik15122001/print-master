/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — real contact details (verified Nov 2026)
 * ─────────────────────────────────────────────────────────────
 *  Validators below (isPhoneConfigured / isEmailConfigured) and
 *  isWhatsAppConfigured() in src/utils/whatsapp.js auto-disable the
 *  tel: / mailto: / wa.me links if these become empty or invalid.
 *
 *  whatsappNumber: digits only, with country code, no "+", spaces
 *  or hyphens. Example format: 919876543210
 *  919999724935 confirmed as the WhatsApp Business account
 *  ("Print Master.com" profile); 85277 87449 is phone-only.
 */
export const siteConfig = {
  siteName: 'Print Master',
  siteUrl: 'https://printmasterdelhi.com', // domain per logo — verify DNS/ownership before launch
  address: '123 Aggarwal Tower, I.P. Extension, New Delhi - 110092',
  phone: '+91 99997 24935',
  phone2: '+91 85277 87449',
  email: 'printmaster.com@gmail.com',
  whatsappNumber: '919999724935',
  defaultWhatsAppMessage: 'Hello Print Master, I would like to know more about your services.',
};

export const siteDomain = siteConfig.siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
export const isPhoneConfigured = /\d{8,}/.test(siteConfig.phone.replace(/\D/g, ''));
export const isEmailConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(siteConfig.email);
export const telHref = isPhoneConfigured ? `tel:${siteConfig.phone.replace(/[^\d+]/g, '')}` : null;
export const telHref2 = siteConfig.phone2 ? `tel:${siteConfig.phone2.replace(/[^\d+]/g, '')}` : null;
export const mailHref = isEmailConfigured ? `mailto:${siteConfig.email}` : null;
