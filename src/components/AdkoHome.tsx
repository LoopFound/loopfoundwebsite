import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "./SEOHead";
import projectLoopFoundCurrent from "@/assets/project-loopfound-current.png";
import projectHaaniya640 from "@/assets/project-haaniya-640.webp";
import projectHaaniya1280 from "@/assets/project-haaniya-1280.webp";
import projectDhc640 from "@/assets/project-dhc-640.webp";
import projectDhc1280 from "@/assets/project-dhc-1280.webp";
import projectBrittos from "@/assets/project-brittos.jpg";

const services = [
  ["WEBSITE DESIGN", "Clear, memorable websites that make the right first impression and give visitors a reason to act."],
  ["WEB DEVELOPMENT", "Responsive, fast, and maintainable digital experiences built to work beautifully on every screen."],
  ["BRAND IDENTITY", "Visual systems that make a growing business recognisable, consistent, and easy to trust."],
  ["INTEGRATIONS", "Analytics, CRM, booking, chat, and marketing tools connected around your actual business goals."],
];

const projects = [
  { name: "Loop Found", type: "Studio website", image: projectLoopFoundCurrent, imageLarge: projectLoopFoundCurrent, width: 1280, height: 720, link: "https://loopfound.in/", caseStudy: "/projects/loop-found" },
  { name: "Haaniya Online Education", type: "Education platform", image: projectHaaniya640, imageLarge: projectHaaniya1280, width: 640, height: 368, link: "https://haaniyaonline4u.com/", caseStudy: "/projects/haaniya-online-education" },
  { name: "St. Britto's Academy", type: "Institutional website", image: projectBrittos, imageLarge: projectBrittos, width: 1200, height: 650, link: "https://st-brittos-academy.netlify.app/", caseStudy: "/projects/st-brittos-academy" },
  { name: "Digital Horizon Conclave", type: "Event platform", image: projectDhc640, imageLarge: projectDhc1280, width: 640, height: 340, link: "https://digital-horizon-conclave-2026.vercel.app/", caseStudy: "/projects/digital-horizon-conclave" },
];

const heroWords = [
  "DOMAIN.",
  "HOSTING.",
  "URL.",
  "BROWSER.",
  "HOMEPAGE.",
  "LANDING PAGE.",
  "HTML.",
  "SERVER.",
  "IP ADDRESS.",
  "NAVIGATION.",
];

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const AdkoHome = () => {
  const heroRef = useRef<HTMLElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (prefersReducedMotion || !pageRef.current || !heroRef.current) return;

    const context = gsap.context(() => {
      const hero = heroRef.current;
      const copy = hero?.querySelector(".js-hero-content");
      const rail = hero?.querySelector(".js-project-rail");
      const words = gsap.utils.toArray<HTMLElement>(".js-rotating-word");

      gsap.set(words, { autoAlpha: 0, yPercent: 28, rotationX: 90, transformPerspective: 900, transformOrigin: "50% 100%" });
      gsap.set(words[0], { autoAlpha: 1, yPercent: 0, rotationX: 0 });

      const entrance = gsap.timeline({ defaults: { ease: "power4.out" } })
        .fromTo(words[0], { yPercent: 28, rotationX: 90, autoAlpha: 0 }, { yPercent: 0, rotationX: 0, autoAlpha: 1, duration: 0.85 })
        .from(".js-hero-copy", { y: 30, opacity: 0, duration: 0.6 }, "-=0.55");
      if (!isMobile) entrance.from(".js-card-entrance", { y: 90, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.55");

      const wordTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.15, delay: 2.6 });
      words.forEach((word, index) => {
        const nextWord = words[(index + 1) % words.length];
        wordTimeline
          .to(word, { yPercent: -24, rotationX: -90, autoAlpha: 0, duration: 0.5, ease: "power3.in" }, "+=1.7")
          .fromTo(nextWord, { yPercent: 28, rotationX: 90, autoAlpha: 0 }, { yPercent: 0, rotationX: 0, autoAlpha: 1, duration: 0.7, ease: "power4.out" }, "+=0.1");
      });

      // Animate the scene's plane, the entrance wrappers, and the link hover on
      // separate elements so no animation can overwrite another's transform.
      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        if (!rail) return;
        const heroScroll = gsap.timeline({
          scrollTrigger: {
            trigger: hero, start: "top top", end: "+=70%", scrub: 0.7,
            pin: true, anticipatePin: 1, invalidateOnRefresh: true,
          },
        });
        heroScroll
          .fromTo(rail, { rotationX: 6, rotationY: -5, rotationZ: -8, xPercent: 0, yPercent: 0 }, {
            rotationX: 3, rotationY: 5, rotationZ: -3, xPercent: -3, yPercent: -72,
            duration: 1, ease: "none",
          }, 0);
        if (copy) heroScroll.to(copy, { y: -36, opacity: 0, duration: 0.3, ease: "none" }, 0);
      });
      media.add("(max-width: 767px)", () => {
        if (!rail) return;
        gsap.fromTo(rail, { rotationX: 5, rotationY: -5, rotationZ: -8, xPercent: 0, yPercent: 0 }, {
          xPercent: -7, yPercent: -30, rotationY: 4, rotationZ: -3, ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });

      gsap.from(".js-manifesto-content", {
        scrollTrigger: { trigger: ".js-manifesto", start: "top 68%", toggleActions: "play none none reverse" },
        y: 90,
        scale: 0.84,
        opacity: 0,
        duration: 1.05,
        ease: "power4.out",
      });

      gsap.to(".js-manifesto-content", {
        scrollTrigger: { trigger: ".js-manifesto", start: "top top", end: "bottom top", scrub: 0.7 },
        yPercent: -12,
        ease: "none",
      });

      gsap.from(".js-expertise-heading", {
        scrollTrigger: { trigger: ".js-expertise", start: "top 72%" },
        yPercent: 95,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>(".js-service-row").forEach((row, index) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: "top 84%" },
          xPercent: index % 2 ? 15 : -15,
          opacity: 0,
          duration: 0.85,
          ease: "power4.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".js-work-card").forEach((card, index) => {
        const image = card.querySelector("img");
        gsap.fromTo(card, { y: 100, opacity: 0 }, {
          scrollTrigger: { trigger: card, start: "top 86%" },
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: (index % 2) * 0.12,
          ease: "power4.out",
        });
        if (image) gsap.to(image, {
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
          yPercent: -8,
          ease: "none",
        });
      });

      gsap.from(".js-work-heading", {
        scrollTrigger: { trigger: ".js-work", start: "top 70%" },
        yPercent: 95,
        opacity: 0,
        duration: 0.95,
        ease: "power4.out",
      });

      gsap.from(".js-cta-content", {
        scrollTrigger: { trigger: ".js-cta", start: "top 72%" },
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      });
    }, pageRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="adko-page min-h-screen overflow-hidden bg-[#f7f7f4] text-[#151515]">
      <SEOHead
        title="Web Design & Development Company in Chennai | Loop Found"
        description="Loop Found is a Chennai web design and development company building responsive, conversion-focused websites, UI/UX systems and web applications."
        path="/"
      />
      <Navbar />
      <main id="main-content">
        <section ref={heroRef} className="adko-hero">
          <div className="js-hero-content adko-hero-content">
            <h1 className="js-hero-title adko-display adko-hero-title">
              <span className="sr-only">Domains, hosting, URLs, browsers, and websites by Loop Found.</span>
              <span className="adko-word-slot" aria-hidden="true">
                {heroWords.map((word) => (
                  <span key={word} className={`js-title-line js-rotating-word ${word.length > 9 ? "adko-word--long" : ""}`}>{word}</span>
                ))}
              </span>
            </h1>
            <p className="js-hero-copy adko-hero-copy">
              WEBSITES THAT STAY IN LOOP
            </p>
          </div>

          <div className="adko-project-stage" role="region" aria-label="Featured website projects">
          <div className="js-project-rail adko-project-rail">
            {projects.map((project) => (
              <div className="js-card-entrance adko-card-entrance" key={project.name}>
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="adko-project-card group"
                aria-label={`View ${project.name} website (opens in new tab)`}
              >
                {project.image ? <img src={project.image} srcSet={`${project.image} 640w, ${project.imageLarge} 1280w`} sizes="(max-width: 767px) 58vw, 28vw" width={project.width} height={project.height} loading={project.name === "Haaniya Online Education" ? "eager" : "lazy"} fetchpriority={project.name === "Haaniya Online Education" ? "high" : "auto"} decoding="async" alt={`${project.name} project`} className="adko-card-image" /> : <div className="adko-preview-placeholder"><span>Institutional website</span><strong>St. Britto's<br />Academy</strong><span>Project preview coming soon</span></div>}
                <span className="adko-card-caption">
                  {project.name} <ArrowUpRight size={13} />
                </span>
              </a>
              </div>
            ))}
          </div>
          </div>
        </section>

        <section className="js-manifesto adko-manifesto grid min-h-[90svh] place-items-center bg-primary px-6 py-24 text-primary-foreground md:px-10">
          <div
            className="js-manifesto-content max-w-5xl text-center"
          >
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] opacity-70">What we are here to do</p>
            <h2 className="adko-display text-[clamp(5rem,13vw,12rem)] leading-[0.78] tracking-[-0.05em]">WE MAKE THE<br />WEB WORK.</h2>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed md:text-xl">
              Loop Found brings strategy, design, development, and launch support together so your website can do more than simply exist online.
            </p>
          </div>
        </section>

        <section className="js-expertise bg-[#f7f7f4] px-5 py-24 md:px-10 md:py-36">
          <div
            className="mx-auto max-w-7xl"
          >
            <div className="mb-16 flex flex-col justify-between gap-6 border-y border-[#151515]/20 py-7 md:flex-row md:items-end">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">Capabilities / 01—04</p>
              <p className="max-w-sm text-sm leading-relaxed text-[#4b4b4b]">The right blend of creative thinking and technical execution for a website that earns its place in your business.</p>
            </div>
            <h2 className="js-expertise-heading adko-display mb-16 text-center text-[clamp(4.5rem,9vw,9rem)] leading-[0.8] tracking-[-0.05em]">OUR EXPERTISE</h2>
            <div className="space-y-4">
              {services.map(([title, description], index) => (
                <div
                  key={title}
                  className="js-service-row group grid gap-6 rounded-2xl bg-primary px-6 py-8 text-primary-foreground md:grid-cols-[0.86fr_1.5fr_auto] md:items-center md:px-10 md:py-10"
                >
                  <h3 className="adko-display text-4xl leading-[0.85] md:text-5xl">{title}</h3>
                  <p className="max-w-2xl text-sm leading-relaxed md:text-base">{description}</p>
                  <Link to="/contact" aria-label={`Discuss ${title.toLowerCase()}`} className="hidden h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-primary-foreground hover:text-primary md:flex">
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="js-work bg-[#151515] px-5 py-24 text-[#f7f7f4] md:px-10 md:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="js-work-heading">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-primary">Recent launches</p>
              <h2 className="adko-display max-w-5xl text-[clamp(4.8rem,10vw,10rem)] leading-[0.78] tracking-[-0.05em]">WORK THAT<br />GETS NOTICED.</h2>
            </div>
            <div className="mt-20 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <Link
                  key={project.name}
                  to={project.caseStudy}
                  className={`js-work-card group overflow-hidden rounded-2xl bg-[#252525] ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className={`overflow-hidden ${index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
                    {project.image ? <img src={project.image} srcSet={`${project.image} 640w, ${project.imageLarge} 1280w`} sizes={index === 0 ? "100vw" : "(max-width: 767px) 100vw, 50vw"} width={project.width} height={project.height} alt={project.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" /> : <div className="adko-preview-placeholder"><span>Institutional website</span><strong>St. Britto's Academy</strong><span>Project preview coming soon</span></div>}
                  </div>
                  <div className="flex items-center justify-between p-6 md:p-8">
                    <div>
                      <h3 className="adko-display text-4xl leading-none md:text-5xl">{project.name}</h3>
                      <p className="mt-2 text-sm text-[#f7f7f4]/60">{project.type}</p>
                    </div>
                    <ArrowUpRight className="text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="js-cta bg-[#f7f7f4] px-5 py-24 md:px-10 md:py-36">
          <div className="js-cta-content mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <h2 className="adko-display max-w-4xl text-[clamp(4.8rem,10vw,10rem)] leading-[0.78] tracking-[-0.05em]">READY TO MAKE<br />SOMETHING MOVE?</h2>
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-5 text-sm font-extrabold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-1">
              Start a project <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdkoHome;
