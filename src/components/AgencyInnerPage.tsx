import { ArrowUpRight, Mail, Phone, Globe, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SEOHead from "./SEOHead";
import projectLoopFoundCurrent from "@/assets/project-loopfound-current.png";
import projectHaaniya640 from "@/assets/project-haaniya-640.webp";
import projectHaaniya1280 from "@/assets/project-haaniya-1280.webp";
import projectDhc640 from "@/assets/project-dhc-640.webp";
import projectDhc1280 from "@/assets/project-dhc-1280.webp";
import projectBrittos from "@/assets/project-brittos.jpg";
import { projectPages, servicePages } from "@/data/seoPages";

type PageKind = "about" | "services" | "projects" | "contact" | "referral" | "sitemap";

const projects = [
  { name: "Loop Found", type: "Studio website", image: projectLoopFoundCurrent, imageLarge: projectLoopFoundCurrent, width: 1280, height: 720, path: "/projects/loop-found" },
  { name: "Haaniya Online Education", type: "Education platform", image: projectHaaniya640, imageLarge: projectHaaniya1280, width: 640, height: 368, path: "/projects/haaniya-online-education" },
  { name: "St. Britto's Academy", type: "Institutional website", image: projectBrittos, imageLarge: projectBrittos, width: 1200, height: 650, path: "/projects/st-brittos-academy" },
  { name: "Digital Horizon Conclave", type: "Event platform", image: projectDhc640, imageLarge: projectDhc1280, width: 640, height: 340, path: "/projects/digital-horizon-conclave" },
];

const data: Record<PageKind, { label: string; title: React.ReactNode; lede: string; seo: string; description: string; tone: "light" | "dark" | "yellow" }> = {
  about: { label: "About Loop Found", title: <>MADE TO<br />MAKE MOVES.</>, lede: "We pair clear strategy with expressive design and reliable development to give growing businesses a web presence with purpose.", seo: "About Loop Found | Custom Web Development & Design Studio", description: "Learn about Loop Found — a modern web studio pairing strategic design with clean code to help growing businesses build an impactful web presence.", tone: "light" },
  services: { label: "Capabilities / 01—05", title: <>MAKE THE<br />WEB WORK.</>, lede: "Every engagement connects sharp ideas to practical execution. Nothing decorative without a job to do.", seo: "Web Design & Development Services in Chennai | Loop Found", description: "Explore web design, web development, UI/UX, website redesign and technical SEO services from Loop Found in Chennai, Tamil Nadu.", tone: "yellow" },
  projects: { label: "Selected launches", title: <>WORK THAT<br />MOVES.</>, lede: "A few recent builds for people making education, events, and ambitious businesses easier to find online.", seo: "Web Design & Development Portfolio | Loop Found Projects", description: "View selected client projects, institutional websites, education platforms, and custom digital experiences designed and built by Loop Found.", tone: "dark" },
  contact: { label: "Start a conversation", title: <>LET’S MAKE<br />A MOVE.</>, lede: "Tell us where your business is headed. We will help shape the right next step.", seo: "Contact Loop Found | Get a Free Web Consultation", description: "Get in touch with Loop Found to discuss your web development, custom design, or re-design project. Contact our team for a free consultation today.", tone: "light" },
  referral: { label: "Loop Found network", title: <>REFER<br />& EARN.</>, lede: "Know a business that needs a website with bite? Make an introduction. We reward successful referrals.", seo: "Web Design Referral Program | Refer & Earn with Loop Found", description: "Introduce clients to Loop Found and earn cash rewards upon project launch. Join our client and student web development referral program today.", tone: "yellow" },
  sitemap: { label: "Site directory", title: <>EXPLORE<br />LOOP FOUND.</>, lede: "A complete overview of all pages and resources available across the Loop Found website.", seo: "HTML Sitemap | Loop Found Web Agency Directory", description: "Browse the complete directory of pages, services, portfolio projects, and resources on Loop Found.", tone: "light" },
};

const contactLinks = [
  { icon: Mail, label: "team@loopfound.in", href: "mailto:team@loopfound.in" },
  { icon: Mail, label: "teamloopfound@gmail.com", href: "mailto:teamloopfound@gmail.com" },
  { icon: Phone, label: "+91 6379586015", href: "tel:+916379586015" },
  { icon: Instagram, label: "@teamloopfound", href: "https://instagram.com/teamloopfound" },
  { icon: Globe, label: "loopfound.in", href: "https://loopfound.in" },
];

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
      setSubmissionMessage("Message sent. We will get back to you soon.");
    } catch (error) {
      setSubmission("error");
      setSubmissionMessage(error instanceof Error ? error.message : "We could not send your message.");
    }
  };

  return <div ref={pageRef} className={`agency-page agency-page--${content.tone} min-h-screen bg-[#f7f7f4] text-[#151515]`}>
    <SEOHead title={content.seo} description={content.description} path={`/${page === "about" ? "about" : page}`} />
    <Navbar />
    <main id="main-content">
      <section className="agency-inner-hero">
        <p className="js-inner-label agency-kicker">{content.label}</p>
        <h1 className="js-inner-title adko-display agency-inner-title">{content.title}</h1>
        <p className="js-inner-lede agency-inner-lede">{content.lede}</p>
      </section>

      {page === "about" && <>
        <section className="agency-statement bg-[#151515] text-[#f7f7f4]"><div className="js-inner-reveal"><p className="agency-kicker text-primary">Our point of view</p><h2 className="adko-display">GOOD DESIGN<br />HAS A JOB.</h2><p>We do not use design to decorate a business. We use it to make the right people understand, trust, and choose it.</p></div></section>
        <section className="agency-grid-section"><div className="js-inner-reveal agency-section-head"><p className="agency-kicker">People behind work</p><h2 className="adko-display">SMALL TEAM.<br />BIG INTENT.</h2></div><div className="agency-team-grid">{[["Pranith Vincent", "CEO & Founder", "Leads strategy and the long view behind every build.", "/Pranith"], ["Gopinath", "Co-Founder & CMO", "Shapes how good work meets the people it is made for.", "/Gopinath"], ["Sai Charan", "Backend Developer", "Builds reliable systems and integrations behind the experiences people use.", "/SaiCharan"]].map(([name, role, text, path]) => <Link to={path} key={name} className="js-inner-reveal agency-person group block transition-colors hover:bg-black/[0.02]"><span>{role}</span><h3 className="adko-display group-hover:text-primary transition-colors">{name}</h3><p>{text}</p><div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary"><span>View Profile & Skills</span><ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></div></Link>)}</div></section>
      </>}

      {page === "services" && <section className="agency-grid-section bg-[#f7f7f4]"><div className="agency-section-head js-inner-reveal"><p className="agency-kicker">What we make in Chennai</p><h2 className="adko-display">BUILT FOR<br />MOMENTUM.</h2></div><div className="agency-service-list">{servicePages.map((service, index) => <article key={service.slug} className="js-inner-reveal agency-service-row"><span>{String(index + 1).padStart(2, "0")}</span><h3 className="adko-display">{service.name}</h3><p>{service.intro}</p><Link to={`/services/${service.slug}`} aria-label={`Explore ${service.name}`}><ArrowUpRight /></Link></article>)}</div></section>}

      {page === "projects" && <section className="agency-projects">{projects.map((project, index) => <Link className={`js-inner-reveal agency-project agency-project--${index + 1}`} key={project.name} to={project.path}><div className="agency-project-media"><img className="js-inner-image" src={project.image} srcSet={`${project.image} 640w, ${project.imageLarge} 1280w`} sizes="(max-width: 767px) 100vw, 50vw" width={project.width} height={project.height} alt={`${project.name} website project`} loading="lazy" decoding="async" /></div><div><p>{project.type}</p><h2 className="adko-display">{project.name}</h2></div><ArrowUpRight /></Link>)}</section>}

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
                <li><Link to="/Pranith" className="hover:text-primary transition-colors flex items-center justify-between"><span>Pranith Vincent — CEO & Founder</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/Gopinath" className="hover:text-primary transition-colors flex items-center justify-between"><span>Gopinath — Co-Founder & CMO</span> <ArrowUpRight size={16} /></Link></li>
                <li><Link to="/SaiCharan" className="hover:text-primary transition-colors flex items-center justify-between"><span>Sai Charan — Backend Developer</span> <ArrowUpRight size={16} /></Link></li>
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
