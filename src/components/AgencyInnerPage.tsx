import { ArrowUpRight, Mail, Phone, Globe, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SEOHead from "./SEOHead";
import projectLoopFound from "@/assets/project-loopfound.png";
import projectHaaniya from "@/assets/project-haaniya.png";
import projectDhc from "@/assets/project-dhc.png";

type PageKind = "about" | "services" | "projects" | "contact" | "referral";

const projects = [
  { name: "Loop Found", type: "Studio website", image: projectLoopFound, link: "https://loopfound.in/" },
  { name: "Haaniya Online Education", type: "Education platform", image: projectHaaniya, link: "https://haaniyaonline4u.com/" },
  { name: "Digital Horizon Conclave", type: "Event platform", image: projectDhc, link: "https://digital-horizon-conclave-2026.vercel.app/" },
];

const data: Record<PageKind, { label: string; title: React.ReactNode; lede: string; seo: string; description: string; tone: "light" | "dark" | "yellow" }> = {
  about: { label: "About Loop Found", title: <>MADE TO<br />MAKE MOVES.</>, lede: "We pair clear strategy with expressive design and reliable development to give growing businesses a web presence with purpose.", seo: "About Loop Found — Our Story & Mission", description: "Meet Loop Found, a web studio building clear, memorable websites for growing businesses.", tone: "light" },
  services: { label: "Capabilities / 01—04", title: <>MAKE THE<br />WEB WORK.</>, lede: "Every engagement connects sharp ideas to practical execution. Nothing decorative without a job to do.", seo: "Web Development Services — Loop Found", description: "Web design, development, branding, SEO, and integrations by Loop Found.", tone: "yellow" },
  projects: { label: "Selected launches", title: <>WORK THAT<br />MOVES.</>, lede: "A few recent builds for people making education, events, and ambitious businesses easier to find online.", seo: "Our Projects & Portfolio — Loop Found", description: "Explore recent website launches and digital experiences from Loop Found.", tone: "dark" },
  contact: { label: "Start a conversation", title: <>LET’S MAKE<br />A MOVE.</>, lede: "Tell us where your business is headed. We will help shape the right next step.", seo: "Contact Loop Found — Get a Free Consultation", description: "Contact Loop Found to discuss your next website project.", tone: "light" },
  referral: { label: "Loop Found network", title: <>REFER<br />& EARN.</>, lede: "Know a business that needs a website with bite? Make an introduction. We reward successful referrals.", seo: "Refer & Earn — Loop Found Student Referral", description: "Join Loop Found’s referral program and earn from successful introductions.", tone: "yellow" },
};

const services = [
  ["01", "Website strategy", "Positioning, structure, and content direction before pixels."],
  ["02", "Design & development", "Fast, responsive sites built to tell a clear story and convert."],
  ["03", "Brand systems", "A consistent visual language your business can keep using."],
  ["04", "Growth systems", "SEO, analytics, CRM, and useful integrations after launch."],
];

const contactLinks = [
  { icon: Mail, label: "teamloopfound@gmail.com", href: "mailto:teamloopfound@gmail.com" },
  { icon: Phone, label: "+91 6379586015", href: "tel:+916379586015" },
  { icon: Instagram, label: "@teamloopfound", href: "https://instagram.com/teamloopfound" },
  { icon: Globe, label: "loopfound.in", href: "https://loopfound.in" },
];

const AgencyInnerPage = ({ page }: { page: PageKind }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [submission, setSubmission] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const content = data[page];

  useLayoutEffect(() => {
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
        <section className="agency-grid-section"><div className="js-inner-reveal agency-section-head"><p className="agency-kicker">People behind work</p><h2 className="adko-display">SMALL TEAM.<br />BIG INTENT.</h2></div><div className="agency-team-grid">{[["Pranith Vincent", "CEO & Founder", "Leads strategy and the long view behind every build."], ["Gopinath", "Co-Founder & CMO", "Shapes how good work meets the people it is made for."], ["Sai Charan", "Backend Developer", "Builds reliable systems and integrations behind the experiences people use."]].map(([name, role, text]) => <article key={name} className="js-inner-reveal agency-person"><span>{role}</span><h3 className="adko-display">{name}</h3><p>{text}</p></article>)}</div></section>
      </>}

      {page === "services" && <section className="agency-grid-section bg-[#f7f7f4]"><div className="agency-section-head js-inner-reveal"><p className="agency-kicker">What we make</p><h2 className="adko-display">BUILT FOR<br />MOMENTUM.</h2></div><div className="agency-service-list">{services.map(([number, title, description]) => <article key={number} className="js-inner-reveal agency-service-row"><span>{number}</span><h3 className="adko-display">{title}</h3><p>{description}</p><Link to="/contact" aria-label={`Discuss ${title}`}><ArrowUpRight /></Link></article>)}</div></section>}

      {page === "projects" && <section className="agency-projects">{projects.map((project, index) => <a className={`js-inner-reveal agency-project agency-project--${index + 1}`} key={project.name} href={project.link} target="_blank" rel="noreferrer"><div className="agency-project-media"><img className="js-inner-image" src={project.image} alt={project.name} loading="lazy" decoding="async" /></div><div><p>{project.type}</p><h2 className="adko-display">{project.name}</h2></div><ArrowUpRight /></a>)}</section>}

      {page === "contact" && <section className="agency-contact"><div className="js-inner-reveal agency-contact-links"><p className="agency-kicker">Reach us direct</p>{contactLinks.map(({ icon: Icon, label, href }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon /><span>{label}</span><ArrowUpRight /></a>)}</div><form className="js-inner-reveal agency-contact-form" onSubmit={submit}><p id="contact-form-help" className="text-sm leading-relaxed text-[#f7f7f4]/60">Your message sends securely. Fields marked required must be completed.</p><label className="sr-only" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={event => setForm({ ...form, website: event.target.value })} /></label><label>Your name<input required minLength={2} maxLength={100} autoComplete="name" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} /></label><label>Email<input required type="email" maxLength={254} autoComplete="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} /></label><label>What are we making?<textarea required minLength={10} maxLength={2000} rows={6} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} /></label><button type="submit" disabled={submission === "sending"} aria-describedby="contact-form-help">{submission === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={18} /></button><p role="status" aria-live="polite" className={submission === "error" ? "text-sm text-red-300" : "text-sm text-[#f7f7f4]/70"}>{submissionMessage}</p></form></section>}

      {page === "referral" && <><section className="agency-grid-section"><div className="js-inner-reveal agency-section-head"><p className="agency-kicker">How it works</p><h2 className="adko-display">MAKE<br />INTRO.</h2></div><div className="agency-step-list">{[["01", "Introduce", "Connect us with business needing a sharper website."], ["02", "We talk", "We take care of discovery, strategy, and project scoping."], ["03", "You earn", "Receive a percentage when the project becomes real."]].map(([n, title, text]) => <article key={n} className="js-inner-reveal"><span>{n}</span><h3 className="adko-display">{title}</h3><p>{text}</p></article>)}</div></section><section className="agency-referral-cta"><p>Ready when you are.</p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeyhHoi6yDZjGk-HJHFkh8cvALE9KjDYnEJhG_j2VVWjeFP_Q/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Join waitlist <ArrowUpRight /></a></section></>}
    </main>
    <Footer />
  </div>;
};

export default AgencyInnerPage;
