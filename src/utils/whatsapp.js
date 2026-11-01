import { siteConfig } from '../config/siteConfig';

/** True only when whatsappNumber is a real international number (digits only). */
export const isWhatsAppConfigured = () => /^[1-9]\d{9,14}$/.test(siteConfig.whatsappNumber);

/** Build a wa.me link, or null while the number is still a placeholder. */
export function buildWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
  if (!isWhatsAppConfigured()) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${siteConfig.whatsappNumber}${text}`;
}

/** Readable quote-request message. Nothing is truncated. */
export function buildEnquiryMessage({ name, contact, company, service, budget, details }, ref = '') {
  const lines = [
    '*New quote request — Print Master*',
    '',
  ];
  if (ref) lines.push(`Ref: ${ref}`, '');
  lines.push(
    `*Name:* ${name.trim()}`,
    `*Contact:* ${contact.trim()}`,
  );
  if (company.trim()) lines.push(`*Company:* ${company.trim()}`);
  if (service) lines.push(`*Service:* ${service}`);
  if (budget) lines.push(`*Budget:* ${budget}`);
  lines.push(
    '',
    '*Project details:*',
    details.trim(),
    '',
    '────────────',
    'Sent from ' + siteConfig.siteUrl.replace(/^https?:\/\//, ''),
  );
  return lines.join('\n');
}

/**
 * Open WhatsApp synchronously (must be called directly inside a user
 * gesture handler so popup blockers allow it).
 */
export function openWhatsApp(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Props for a WhatsApp anchor; falls back to the contact section. */
export function whatsAppLinkProps(message) {
  const href = buildWhatsAppUrl(message);
  return href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href: '#contact' };
}
