import { WhatsAppIcon } from '../common/Icons';
import { whatsAppLinkProps, isWhatsAppConfigured } from '../../utils/whatsapp';

/**
 * Desktop floating WhatsApp action (bottom-right). Tucks away while the
 * contact form is on screen so it never covers the form — the form has its
 * own WhatsApp button. Until the number is configured it links to #contact.
 */
export default function WhatsAppFloat({ tucked }) {
  const ready = isWhatsAppConfigured();
  return (
    <a
      className={`wa-float ${tucked ? 'tuck' : ''}`}
      aria-label={ready ? 'Chat with Print Master on WhatsApp (opens in a new tab)' : 'Contact Print Master'}
      tabIndex={tucked ? -1 : undefined}
      {...whatsAppLinkProps()}
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}
