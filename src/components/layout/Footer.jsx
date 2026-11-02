import ColorBar from '../common/ColorBar';
import { NAV_LINKS, FOOTER_SERVICES } from '../../data/navigation';
import { siteConfig, siteDomain, telHref, telHref2, mailHref } from '../../config/siteConfig';

const EXPLORE = NAV_LINKS.filter((l) => l.id !== 'home');

export default function Footer({ onQuote }) {
  const year = new Date().getFullYear();
  const h4 = 'mono mb-3.5 mt-0 inline-block border-b-2 border-magenta pb-1.5 text-[.68rem] font-medium tracking-[.12em] text-muted';
  return (
    <footer className="border-t-[1.5px] border-ink pt-20 pb-[calc(28px+env(safe-area-inset-bottom))]">
      <div className="wrap">
        <div className="ft grid grid-cols-[1.8fr_1fr_1fr_1.3fr] gap-10 max-md:grid-cols-2">
          <div className="max-md:col-span-full">
            <p className="m-0 max-w-[18ch] border-b-[1.5px] border-cyan pb-6 font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] italic leading-[1.1] text-cyan">
              We turn ideas into things people remember.
            </p>
          </div>
          <div>
            <h4 className={h4}>Explore</h4>
            <ul className="grid gap-1.5">
              {EXPLORE.map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className={h4}>Services</h4>
            <ul className="grid gap-1.5">
              {FOOTER_SERVICES.map((s) => <li key={s}><a href="#contact" onClick={() => onQuote?.(s)}>{s}</a></li>)}
            </ul>
          </div>
          <div className="max-md:col-span-2">
            <h4 className={h4}>Contact</h4>
            <ul className="grid gap-1.5">
              <li><a href={telHref || undefined}>{siteConfig.phone}</a></li>
              <li><a href={telHref2 || undefined}>{siteConfig.phone2}</a></li>
              <li><a href={mailHref || undefined}>{siteConfig.email}</a></li>
              <li><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="max-w-[24ch]">{siteConfig.address}</li>
              <li className="mono text-[.7rem] tracking-[.12em]">{siteDomain}</li>
            </ul>
          </div>
        </div>
        <div className="mega" aria-hidden="true">Print <span>Master</span></div>
        <div className="mono flex flex-wrap justify-between gap-3 border-t border-rule pt-[18px] text-muted">
          <span>© {year} {siteConfig.siteName}.com</span>
          <ColorBar style={{ width: 120, height: 10 }} />
          <span>Ideas made tangible</span>
        </div>
        <div className="mono mt-3 text-center text-[.7rem] tracking-[.08em] text-muted">
          Made with <span aria-hidden="true">❤️</span> by{' '}
          <a href="https://www.truorbit.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink2">TruOrbit</a>
        </div>
      </div>
    </footer>
  );
}
