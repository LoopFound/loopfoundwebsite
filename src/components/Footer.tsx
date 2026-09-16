import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => <footer className="overflow-hidden bg-[#151515] px-5 py-16 text-[#f7f7f4] md:px-10 md:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 border-b border-[#f7f7f4]/20 pb-16 md:grid-cols-[1.25fr_.75fr] md:items-end">
      <div><p className="mb-6 text-xs font-bold uppercase tracking-[.22em] text-primary">Have a project in mind?</p><h2 className="adko-display max-w-3xl text-[clamp(5rem,10vw,10rem)] leading-[.76] tracking-[-.05em]">LET’S MAKE<br />IT MOVE.</h2></div>
      <div className="md:justify-self-end md:text-right"><p className="max-w-sm text-base leading-relaxed text-[#f7f7f4]/65">Tell us where you are heading. We will help make your next website pull its weight.</p><Link to="/contact" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-extrabold uppercase tracking-[.13em] text-primary-foreground transition-transform hover:-translate-y-1">Start a project <ArrowUpRight size={17} /></Link></div>
    </div>
    <div className="grid gap-12 border-b border-[#f7f7f4]/20 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
      <div><Link to="/" className="inline-block rounded-xl" aria-label="Loop Found home"><img src="/images/loopfound-logo.jpg" alt="Loop Found" width="132" height="72" className="h-[72px] w-[132px] rounded-xl object-cover" /></Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#f7f7f4]/55">Websites with clarity, personality, and performance.</p></div>
      <nav aria-label="Footer navigation"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#f7f7f4]/45">Explore</p><div className="grid gap-3 text-sm font-bold"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/referral">Referral</Link></div></nav>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#f7f7f4]/45">Contact</p><a className="block text-sm font-bold hover:text-primary" href="mailto:teamloopfound@gmail.com">teamloopfound@gmail.com</a><div className="mt-6 flex gap-4"><a className="rounded-full border border-[#f7f7f4]/20 p-3 transition-colors hover:border-primary hover:text-primary" aria-label="Instagram" href="https://instagram.com/teamloopfound" target="_blank" rel="noreferrer"><Instagram size={17} /></a><a className="rounded-full border border-[#f7f7f4]/20 p-3 transition-colors hover:border-primary hover:text-primary" aria-label="Email Loop Found" href="mailto:teamloopfound@gmail.com"><Mail size={17} /></a></div></div>
    </div>
    <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#f7f7f4]/45 md:flex-row md:items-center"><p>© {new Date().getFullYear()} Loop Found. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/contact">Contact</Link></div></div>
  </div>
</footer>;

export default Footer;
