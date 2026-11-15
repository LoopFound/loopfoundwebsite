import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { servicePages } from "@/data/seoPages";
import AnimatedFooter from "@/components/ui/animated-footer";
import SocialFlip from "./SocialFlip";
import CopyButton from "./CopyButton";

const socials = [
  { letter: "H", label: "Instagram", href: "https://instagram.com/teamloopfound", icon: Instagram },
  { letter: "I", label: "LinkedIn", href: "https://www.linkedin.com/company/teamloopfound/", icon: Linkedin },
  { letter: "!", label: "Email Loop Found", href: "mailto:team@loopfound.in", icon: Mail },
];

const contacts = [
  { href: "mailto:team@loopfound.in", value: "team@loopfound.in", label: "email" },
  { href: "mailto:teamloopfound@gmail.com", value: "teamloopfound@gmail.com", label: "email" },
  { href: "tel:+916379586015", value: "+91 6379586015", label: "phone number" },
  { href: "tel:+918148448835", value: "+91 8148448835", label: "phone number" },
];

const Footer = () => <footer className="overflow-hidden bg-[#151515] px-5 py-14 text-[#f7f7f4] md:px-10 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 border-b border-[#f7f7f4]/20 pb-16 md:grid-cols-[1.25fr_.75fr] md:items-end">
      <div><p className="mb-6 text-xs font-bold uppercase tracking-[.22em] text-primary">Have a project in mind?</p><h2 className="adko-display max-w-3xl text-[clamp(5rem,10vw,10rem)] leading-[.76] tracking-[-.05em]">LET’S MAKE<br />IT MOVE.</h2></div>
      <div className="md:justify-self-end md:text-right"><p className="max-w-sm text-base leading-relaxed text-[#f7f7f4]/65">Tell us where you are heading. We will help make your next website pull its weight.</p><Link to="/contact" className="vg-btn vg-btn--primary mt-7 inline-flex min-h-12 items-center rounded-full bg-primary px-6 py-3 text-xs font-extrabold uppercase tracking-[.13em] text-primary-foreground"><span className="inline-flex items-center gap-3">Start a project <ArrowUpRight size={17} /></span></Link></div>
    </div>
    <div className="grid gap-12 border-b border-[#f7f7f4]/20 py-12 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
      <div><Link to="/" className="inline-block rounded-xl" aria-label="Loop Found home"><img src="/images/loopfound-logo-256.webp" alt="Loop Found" width="132" height="72" loading="lazy" decoding="async" className="h-[72px] w-[132px] rounded-xl object-cover" /></Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#f7f7f4]/70">Websites with clarity, personality, and performance.</p></div>
      <nav aria-label="Footer navigation"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#f7f7f4]/70">Explore</p><div className="grid gap-3 text-sm font-bold"><Link className="vg-link" to="/about">About</Link><Link className="vg-link" to="/services">Services</Link><Link className="vg-link" to="/projects">Projects</Link><Link className="vg-link" to="/referral">Referral</Link></div></nav>
      <nav aria-label="Footer services"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#f7f7f4]/70">Services</p><div className="grid gap-3 text-sm font-bold">{servicePages.map((service) => <Link className="vg-link" key={service.slug} to={`/services/${service.slug}`}>{service.name}</Link>)}</div></nav>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#f7f7f4]/70">Contact</p><ul className="grid gap-2">{contacts.map((c) => <li key={c.value} className="flex items-center gap-2"><a className="vg-link text-sm font-bold hover:text-primary" href={c.href}>{c.value}</a><CopyButton value={c.value} label={c.label} /></li>)}</ul><p className="mt-2 text-sm text-[#f7f7f4]/70">Chennai, Tamil Nadu, India</p><p className="mt-1 text-sm text-[#f7f7f4]/70">Mon–Sat, 9am–7pm IST</p><div className="mt-6"><SocialFlip items={socials} /></div></div>
    </div>
    <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#f7f7f4]/70 md:flex-row md:items-center"><p>© {new Date().getFullYear()} Loop Found. All rights reserved.</p><div className="flex gap-5"><Link className="vg-link" to="/sitemap">Sitemap</Link><Link className="vg-link" to="/privacy">Privacy</Link><Link className="vg-link" to="/terms">Terms</Link><Link className="vg-link" to="/contact">Contact</Link></div></div>
  </div>
  <div className="-mx-5 -mb-14 mt-10 h-[55vh] min-h-[320px] md:-mx-10 md:-mb-20 md:h-[70vh]" aria-hidden="true">
    <AnimatedFooter
      headingLines={["LOOP", "FOUND"]}
      leftImage="/animated-footer/loop-infinity.svg"
      rightImage=""
      single
      background="#151515"
      textColor="#f7f7f4"
      charColor="#5c4700"
      hoverColor="hsl(45 100% 55%)"
      hoverCharColor="#151515"
      className="adko-display"
    />
  </div>
</footer>;

export default Footer;
