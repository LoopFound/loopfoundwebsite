import { ArrowUpRight, Mail, Phone, Globe, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { track } from "@vercel/analytics";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SEOHead from "./SEOHead";
import projectLoopFound640 from "@/assets/project-loopfound-640.webp";
import projectLoopFound1280 from "@/assets/project-loopfound-1280.webp";
import projectHaaniya640 from "@/assets/project-haaniya-640.webp";
import projectHaaniya1280 from "@/assets/project-haaniya-1280.webp";
import projectDhc640 from "@/assets/project-dhc-640.webp";
import projectDhc1280 from "@/assets/project-dhc-1280.webp";
import projectBrittos640 from "@/assets/project-brittos-640.webp";
import projectBrittos1200 from "@/assets/project-brittos-1200.webp";
import { networkSites, projectPages, servicePages } from "@/data/seoPages";
import { teamMembers } from "@/data/team";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/components/SchemaOrg";
import { Helmet } from "react-helmet-async";

type PageKind = "about" | "services" | "projects" | "contact" | "referral" | "sitemap";

const projects = [
  { name: "Loop Found", type: "Studio website", image: projectLoopFound640, imageLarge: projectLoopFound1280, width: 1280, height: 720, path: "/projects/loop-found" },
  { name: "Haaniya Online Education", type: "Education platform", image: projectHaaniya640, imageLarge: projectHaaniya1280, width: 640, height: 368, path: "/projects/haaniya-online-education" },
  { name: "St. Britto's Academy", type: "Institutional website", image: projectBrittos640, imageLarge: projectBrittos1200, width: 1200, height: 650, path: "/projects/st-brittos-academy" },
  { name: "Digital Horizon Conclave", type: "Event platform", image: projectDhc640, imageLarge: projectDhc1280, width: 640, height: 340, path: "/projects/digital-horizon-conclave" },
];

const data: Record<PageKind, { label: string; title: React.ReactNode; h1: string; lede: string; seo: string; description: string; tone: "light" | "dark" | "yellow" }> = {
  about: { label: "About Loop Found", title: <>MADE TO<br />MAKE MOVES.</>, h1: "About Loop Found, web design and development company in Chennai", lede: "We pair clear strategy with expressive design and reliable development to give growing businesses a web presence with purpose.", seo: "About Loop Found | Custom Web Development & Design Studio", description: "Learn about Loop Found — a modern web studio pairing strategic design with clean code to help growing businesses build an impactful web presence.", tone: "light" },
  services: { label: "Capabilities / 01—05", title: <>MAKE THE<br />WEB WORK.</>, h1: "Web design and development services in Chennai", lede: "Every engagement connects sharp ideas to practical execution. Nothing decorative without a job to do.", seo: "Web Design & Development Services in Chennai | Loop Found", description: "Explore web design, web development, UI/UX, website redesign and technical SEO services from Loop Found in Chennai, Tamil Nadu.", tone: "yellow" },
  projects: { label: "Selected launches", title: <>WORK THAT<br />MOVES.</>, h1: "Web design and development projects by Loop Found", lede: "A few recent builds for people making education, events, and ambitious businesses easier to find online.", seo: "Web Design & Development Portfolio | Loop Found Projects", description: "View selected client projects, institutional websites, education platforms, and custom digital experiences designed and built by Loop Found.", tone: "dark" },
  contact: { label: "Start a conversation", title: <>LET’S MAKE<br />A MOVE.</>, h1: "Contact Loop Found, web design company in Chennai", lede: "Tell us where your business is headed. We will help shape the right next step.", seo: "Contact Loop Found | Get a Free Web Consultation", description: "Get in touch with Loop Found to discuss your web development, custom design, or re-design project. Contact our team for a free consultation today.", tone: "light" },
  referral: { label: "Loop Found network", title: <>REFER<br />& EARN.</>, h1: "Loop Found web design referral program", lede: "Know a business that needs a website with bite? Make an introduction. We reward successful referrals.", seo: "Web Design Referral Program | Refer & Earn with Loop Found", description: "Introduce clients to Loop Found and earn cash rewards upon project launch. Join our client and student web development referral program today.", tone: "yellow" },
  sitemap: { label: "Site directory", title: <>EXPLORE<br />LOOP FOUND.</>, h1: "Loop Found site directory", lede: "A complete overview of all pages and resources available across the Loop Found website.", seo: "HTML Sitemap | Loop Found Web Agency Directory", description: "Browse every page on the Loop Found website: web design and development services in Chennai, project case studies, team, contact and legal pages.", tone: "light" },
};

const contactLinks = [
  { icon: Mail, label: "team@loopfound.in", href: "mailto:team@loopfound.in" },
  { icon: Mail, label: "teamloopfound@gmail.com", href: "mailto:teamloopfound@gmail.com" },
  { icon: Phone, label: "+91 6379586015", href: "tel:+916379586015" },
  { icon: Phone, label: "+91 8148448835", href: "tel:+918148448835" },
  { icon: Instagram, label: "@teamloopfound", href: "https://instagram.com/teamloopfound" },
  { icon: Globe, label: "loopfound.in", href: "https://www.loopfound.in/" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://www.loopfound.in/about",
  name: "About Loop Found",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  mentions: teamMembers.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.tagline,
    worksFor: { "@id": ORGANIZATION_ID },
    sameAs: [member.socials.linkedin, member.profileUrl?.endsWith("/about") ? undefined : member.profileUrl].filter(Boolean),
    knowsAbout: member.skillCategories.flatMap((category) => category.skills).slice(0, 12),
  })),
};

const collectionSchema = (path: string, name: string, items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `https://www.loopfound.in${path}`,
  name,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: `https://www.loopfound.in${item.path}` })),
  },
});

const pageSchemas: Partial<Record<PageKind, object>> = {
  about: aboutSchema,
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://www.loopfound.in/contact",
    name: "Contact Loop Found",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  },
  projects: collectionSchema("/projects", "Loop Found web design and development projects", projectPages.map((project) => ({ name: project.name, path: `/projects/${project.slug}` }))),
  services: collectionSchema("/services", "Loop Found web design and development services", servicePages.map((service) => ({ name: service.name, path: `/services/${service.slug}` }))),
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const AgencyInnerPage = ({ page }: { page: PageKind }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [submission, setSubmission] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const content = data[page];

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from(".js-inner-label", { opacity: 0, y: 20, duration: 0.45 })
        .from(".js-inner-title", { opacity: 0, yPercent: 38, duration: 0.85 }, "-=0.18")
        .from(".js-inner-lede", { opacity: 0, y: 24, duration: 0.58 }, "-=0.48");
      gsap.utils.toArray<HTMLElement>(".js-inner-reveal").forEach((element, index) => {
        gsap.from(element, { scrollTrigger: { trigger: element, start: "top 82%" }, opacity: 0, y: 58, duration: 0.8, delay: index % 2 ? 0.08 : 0, ease: "power4.out" });
      });
      gsap.utils.toArray<HTMLElement>(".js-inner-image").forEach((image) => {
        gsap.to(image, { scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: 0.8 }, yPercent: -8, ease: "none" });
      });
    }, pageRef);
    return () => context.revert();
  }, [page]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmission("sending");
    setSubmissionMessage("");
    try {
      const result = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const payload = result.headers.get("content-type")?.includes("application/json") ? await result.json() as { error?: string } : {};
      if (!result.ok) throw new Error(payload.error ?? "Contact is temporarily unavailable. Please email teamloopfound@gmail.com.");
      setForm({ name: "", email: "", message: "", website: "" });
      setSubmission("success");
      track("contact_form_submit");
      (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({ event: "contact_form_submit" });
      setSubmissionMessage("Message sent. We will get back to you soon.");
    } catch (error) {
      setSubmission("error");
      setSubmissionMessage(error instanceof Error ? error.message : "We could not send your message.");
    }
  };

  return <div ref={pageRef} className={`agency-page agency-page--${content.tone} min-h-screen bg-[#f7f7f4] text-[#151515]`}>
    <SEOHead title={content.seo} description={content.description} path={`/${page === "about" ? "about" : page}`} />
    {pageSchemas[page] && <Helmet><script type="application/ld+json">{JSON.stringify(pageSchemas[page])}</script></Helmet>}
    <Navbar />
    <main id="main-content">
      <section className="agency-inner-hero">
        <p className="js-inner-label agency-kicker">{content.label}</p>
        <h1 className="js-inner-title adko-display agency-inner-title"><span className="sr-only">{content.h1}</span><span aria-hidden="true">{content.title}</span></h1>
        <p className="js-inner-lede agency-inner-lede">{content.lede}</p>
      </section>

      {page === "about" && <>
        <section className="agency-statement bg-[#151515] text-[#f7f7f4]"><div className="js-inner-reveal"><p className="agency-kicker text-primary">Our point of view</p><h2 className="adko-display">GOOD DESIGN<br />HAS A JOB.</h2><p>We do not use design to decorate a business. We use it to make the right people understand, trust, and choose it.</p></div></section>
        <section className="px-4 py-20 sm:px-6 md:py-28"><div className="container js-inner-reveal grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="agency-kicker">Who we are</p><h2 className="adko-display mt-4 text-5xl leading-[.88]">WHAT IS LOOP FOUND?</h2></div><div className="space-y-5 text-lg leading-relaxed text-[#4b4b4b]"><p>Loop Found is a web design and development company based in Chennai, Tamil Nadu, founded in 2025. A small founder-led team of three plans, designs, builds and launches business websites, web applications and landing pages for clients across India.</p><p>Our services cover web design, web development, UI/UX design, website redesign and technical SEO. Recent work includes an education platform (Haaniya Online Education), an institutional website (St. Britto&apos;s Academy) and an event platform (Digital Horizon Conclave).</p><p>Every project is handled directly by the people below, from the first call to launch and after.</p></div></div></section>
        <section className="agency-grid-section"><div className="js-inner-reveal agency-section-head"><p className="agency-kicker">People behind work</p><h2 className="adko-display">SMALL TEAM.<br />BIG INTENT.</h2></div><div className="border-t border-black/20">{[...teamMembers].sort((a, b) => Number(b.role.startsWith("CEO")) - Number(a.role.startsWith("CEO"))).map((member) => { const external = member.profileUrl && !member.profileUrl.endsWith("/about"); return <article key={member.slug} className="js-inner-reveal grid gap-8 border-b border-black/20 py-12 md:grid-cols-[.8fr_1.2fr] md:py-16"><div><span className="text-[11px] font-extrabold uppercase tracking-[.14em]">{member.role}</span><h3 className="adko-display mt-4 text-[clamp(45px,5vw,76px)] leading-[.85]">{member.name}</h3><p className="mt-4 max-w-sm text-[#555]">{member.tagline}</p><div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-primary">{member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">LinkedIn <ArrowUpRight size={14} /></a>}{external && <a href={member.profileUrl} className="inline-flex items-center gap-1.5">Full portfolio <ArrowUpRight size={14} /></a>}</div></div><div className="space-y-4 leading-relaxed text-[#4b4b4b]">{member.bio.map((line) => <p key={line}>{line}</p>)}<p className="pt-2 text-xs font-bold uppercase tracking-[.14em] text-[#151515]">Skills</p><ul className="flex flex-wrap gap-2">{member.skillCategories.flatMap((category) => category.skills).slice(0, 12).map((skill) => <li key={skill} className="rounded-full border border-black/15 px-3 py-1 text-sm">{skill}</li>)}</ul></div></article>; })}</div></section>
      </>}

      {page === "services" && <section className="agency-grid-section bg-[#f7f7f4]"><div className="agency-section-head js-inner-reveal"><p className="agency-kicker">What we make in Chennai</p><h2 className="adko-display">BUILT FOR<br />MOMENTUM.</h2></div><div className="agency-service-list">{servicePages.map((service, index) => <article key={service.slug} className="js-inner-reveal agency-service-row"><span>{String(index + 1).padStart(2, "0")}</span><h3 className="adko-display">{service.name}</h3><p>{service.intro}</p><Link to={`/services/${service.slug}`} aria-label={`Explore ${service.name}`}><ArrowUpRight /></Link></article>)}</div></section>}

      {page === "projects" && <section className="px-4 py-16 sm:px-6 md:py-20"><div className="container js-inner-reveal grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="agency-kicker">About this work</p><h2 className="adko-display mt-4 text-5xl leading-[.88]">WHAT HAVE WE BUILT?</h2></div><div className="space-y-5 text-lg leading-relaxed text-[#f7f7f4]/75"><p>Loop Found designs and develops websites for education providers, institutions, events and growing businesses. Each project below covers strategy, UI/UX design, responsive development and launch, built by our team in Chennai.</p><p>Open a project to see what we worked on and visit the live website.</p></div></div></section>}
      {page === "projects" && <section className="agency-projects">{projects.map((project, index) => <Link className={`js-inner-reveal agency-project agency-project--${index + 1}`} key={project.name} to={project.path}><div className="agency-project-media"><img className="js-inner-image" src={project.image} srcSet={`${project.image} 640w, ${project.imageLarge} 1280w`} sizes="(max-width: 767px) 100vw, 50vw" width={project.width} height={project.height} alt={`${project.name} website project`} loading="lazy" decoding="async" /></div><div><p>{project.type}</p><h2 className="adko-display">{project.name}</h2></div><ArrowUpRight /></Link>)}</section>}

      {page === "contact" && <section className="px-4 py-16 sm:px-6 md:py-20"><div className="container js-inner-reveal grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="agency-kicker">Before you write</p><h2 className="adko-display mt-4 text-5xl leading-[.88]">HOW DO WE START?</h2></div><div className="space-y-5 text-lg leading-relaxed text-[#4b4b4b]"><p>Send a short note about your business, what the website needs to do, and any deadline. We reply by email, usually with a few questions, then set up a short call to understand the project.</p><p>After the call we share the scope, deliverables and a quote before any design or development starts. Loop Found is based in Chennai, Tamil Nadu and works with clients across India. We are available Monday to Saturday, 9am to 7pm IST.</p></div></div></section>}
      {page === "contact" && <section className="agency-contact"><div className="js-inner-reveal agency-contact-links"><p className="agency-kicker">Reach us direct</p>{contactLinks.map(({ icon: Icon, label, href }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon /><span>{label}</span><ArrowUpRight /></a>)}</div><form className="js-inner-reveal agency-contact-form" onSubmit={submit}><p id="contact-form-help" className="text-sm leading-relaxed text-[#f7f7f4]/60">Your message sends securely. Fields marked required must be completed.</p><label className="sr-only" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={event => setForm({ ...form, website: event.target.value })} /></label><label>Your name<input required minLength={2} maxLength={100} autoComplete="name" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} /></label><label>Email<input required type="email" maxLength={254} autoComplete="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} /></label><label>What are we making?<textarea required minLength={10} maxLength={2000} rows={6} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} /></label><button type="submit" disabled={submission === "sending"} aria-describedby="contact-form-help">{submission === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={18} /></button><p role="status" aria-live="polite" className={submission === "error" ? "text-sm text-red-300" : "text-sm text-[#f7f7f4]/70"}>{submissionMessage}</p></form></section>}

      {page === "referral" && <><section className="agency-grid-section"><div className="js-inner-reveal agency-section-head"><p className="agency-kicker">How it works</p><h2 className="adko-display">MAKE<br />INTRO.</h2></div><div className="agency-step-list">{[["01", "Introduce", "Connect us with business needing a sharper website."], ["02", "We talk", "We take care of discovery, strategy, and project scoping."], ["03", "You earn", "Receive a percentage when the project becomes real."]].map(([n, title, text]) => <article key={n} className="js-inner-reveal"><span>{n}</span><h3 className="adko-display">{title}</h3><p>{text}</p></article>)}</div></section><section className="agency-referral-cta"><p>Ready when you are.</p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeyhHoi6yDZjGk-HJHFkh8cvALE9KjDYnEJhG_j2VVWjeFP_Q/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Join waitlist <ArrowUpRight /></a></section></>}

      {page === "sitemap" && (
        <section className="agency-grid-section bg-[#f7f7f4] max-w-7xl mx-auto px-5 md:px-10 py-16">
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
            <div className="js-inner-reveal">
              <h2 className="adko-display text-2xl font-bold mb-6 text-[#151515]">MAIN PAGES</h2>
              <ul className="space-y-4 text-base font-semibold text-[#151515]/80">
                <li><Link to="/" className="hover:text-primary transition-colors flex items-center justify-between"><span>Home</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors flex items-center justify-between"><span>About Us</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors flex items-center justify-between"><span>Our Services</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors flex items-center justify-between"><span>Our Projects</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center justify-between"><span>Contact Us</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/referral" className="hover:text-primary transition-colors flex items-center justify-between"><span>Referral Program</span> <ArrowUpRight size={16} /></Link></li>
                {servicePages.map((service) => <li key={service.slug}><Link to={`/services/${service.slug}`} className="hover:text-primary transition-colors flex items-center justify-between"><span>{service.name}</span> <ArrowUpRight size={16} /></Link></li>)}
              </ul>
            </div>

            <div className="js-inner-reveal">
              <h2 className="adko-display text-2xl font-bold mb-6 text-[#151515]">TEAM PROFILES</h2>
              <ul className="space-y-4 text-base font-semibold text-[#151515]/80">
                <li><Link to="/about" className="hover:text-primary transition-colors flex items-center justify-between"><span>Pranith Vincent — CEO & Founder</span> <ArrowUpRight size={16} /></Link></li>
                <li><a href="https://gopinath.loopfound.in/" className="hover:text-primary transition-colors flex items-center justify-between"><span>Gopinath R — Co-Founder & CMO</span> <ArrowUpRight size={16} /></a></li>
                <li><a href="https://charan.loopfound.in/" className="hover:text-primary transition-colors flex items-center justify-between"><span>Sai Charan Meda — Backend Developer</span> <ArrowUpRight size={16} /></a></li>
              </ul>
            </div>

            <div className="js-inner-reveal">
              <h2 className="adko-display text-2xl font-bold mb-6 text-[#151515]">LOOP FOUND NETWORK</h2>
              <ul className="space-y-4 text-base font-semibold text-[#151515]/80">
                {networkSites.map((site) => <li key={site.url}><a href={site.url} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center justify-between gap-4"><span>{site.name}<small className="block mt-1 font-normal text-[#151515]/60">{site.description}</small></span><ArrowUpRight size={16} className="shrink-0" /></a></li>)}
              </ul>
            </div>

            <div className="js-inner-reveal">
              <h2 className="adko-display text-2xl font-bold mb-6 text-[#151515]">PROJECT CASE STUDIES</h2>
              <ul className="space-y-4 text-base font-semibold text-[#151515]/80">
                {projectPages.map((project) => <li key={project.slug}><Link to={`/projects/${project.slug}`} className="hover:text-primary transition-colors flex items-center justify-between"><span>{project.name}</span> <ArrowUpRight size={16} /></Link></li>)}
              </ul>
            </div>

            <div className="js-inner-reveal">
              <h2 className="adko-display text-2xl font-bold mb-6 text-[#151515]">RESOURCES & LEGAL</h2>
              <ul className="space-y-4 text-base font-semibold text-[#151515]/80">
                <li><a href="/sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center justify-between"><span>XML Sitemap (for search engines)</span> <ArrowUpRight size={16} /></a></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors flex items-center justify-between"><span>Privacy Policy</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors flex items-center justify-between"><span>Terms of Service</span> <ArrowUpRight size={16} /></Link></li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
    <Footer />
  </div>;
};

export default AgencyInnerPage;
