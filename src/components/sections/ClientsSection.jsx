import SectionTop from '../common/SectionTop';
import RevealOnScroll from '../common/RevealOnScroll';
import { CLIENT_LOGOS } from '../../data/clients';
import { pad } from '../../utils/scroll';

function ClientLogo({ client, n }) {
  return (
    <div className="logo-cell" data-n={pad(n)}>
      {client.src ? <img loading="lazy" src={client.src} alt={`${client.name} logo`} /> : <span>Client logo</span>}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="clients" id="clients" aria-labelledby="cl-h">
      <div className="wrap">
        <SectionTop
          label="Contact sheet — Clients"
          headingId="cl-h"
          heading={<>Brands we've helped bring <span className="it alt">to life.</span></>}
          text="A selection of organisations whose brands we've designed and produced for."
        />
        {/* CLIENT LOGO REPLACEMENT POINTS: src/data/clients.js */}
        <RevealOnScroll className="logos">
          {CLIENT_LOGOS.map((c, i) => <ClientLogo key={c.id} client={c} n={i + 1} />)}
        </RevealOnScroll>
        <p className="mono mt-[18px] mb-0 text-[.72rem] tracking-[.06em] text-muted normal-case">
          Logos shown from our portfolio for reference.
        </p>
      </div>
    </section>
  );
}
