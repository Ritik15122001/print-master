import { PhoneIcon, WhatsAppIcon } from '../common/Icons';
import { telHref } from '../../config/siteConfig';
import { whatsAppLinkProps } from '../../utils/whatsapp';

/** Fixed bottom bar (≤860px): Call · WhatsApp · Get a Quote. */
export default function MobileActionBar() {
  return (
    <nav className="mbar" aria-label="Quick actions">
      <a href={telHref || '#contact'}><PhoneIcon />Call</a>
      <a className="wap" {...whatsAppLinkProps()}><WhatsAppIcon />WhatsApp</a>
      <a href="#contact">Get a Quote</a>
    </nav>
  );
}
