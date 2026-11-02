import RevealOnScroll from '../common/RevealOnScroll';
import SectionLabel from '../common/SectionLabel';
import ContactForm from '../contact/ContactForm';
import { siteConfig, siteDomain, telHref, telHref2, mailHref } from '../../config/siteConfig';
import { whatsAppLinkProps, isWhatsAppConfigured } from '../../utils/whatsapp';

function Line({ label, text, ...link }) {
  const Tag = link.href ? 'a' : 'div';
  return (
    <Tag className={link.href ? 'line' : undefined} {...link}>
      <span className="mono text-muted">{label}</span>
      <span>{text}</span>
    </Tag>
  );
}

export default function ContactSection({ presetService, formRef }) {
  // CONTACT REPLACEMENT POINT: src/config/siteConfig.js
  const wa = isWhatsAppConfigured();
  return (
    <section id="contact" aria-labelledby="ct-h">
      <div className="wrap">
        <RevealOnScroll className="ticket grid grid-cols-[.8fr_1.2fr] border-[1.5px] border-ink bg-sheet max-md:grid-cols-1">
          <div className="ticket-side flex flex-col gap-[22px] p-[clamp(26px,4vw,48px)]">
            <SectionLabel className="m-0">Job ticket</SectionLabel>
            <h2 id="ct-h" className="text-[clamp(2.4rem,4.4vw,3.8rem)]">Let's create something worth <span className="it">remembering.</span></h2>
            <p className="m-0 text-ink2">Tell us about your brand, design, or printing requirements, and let's discuss the right solution.</p>
            <div className="lines grid border-t border-rule">
              <Line label="Call" text={siteConfig.phone || 'Phone number — to be added'} href={telHref || '#contact'} />
              {siteConfig.phone2 && <Line label="Call" text={siteConfig.phone2} href={telHref2} />}
              <Line label="WhatsApp" text={wa ? 'Chat with us' : 'WhatsApp — to be added'} {...whatsAppLinkProps()} />
              <Line label="Email" text={siteConfig.email || 'Email address — to be added'} href={mailHref || '#contact'} />
              <Line label="Instagram" text="@printmaster2026" href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" />
              <Line label="Address" text={siteConfig.address} />
              <Line label="Web" text={siteDomain} />
            </div>
          </div>
          <div ref={formRef}>
            <ContactForm presetService={presetService} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
