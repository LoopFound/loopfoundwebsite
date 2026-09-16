import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import projectDhc from "@/assets/project-dhc.png";

const proof = [
  { value: "04", label: "featured launches" },
  { value: "20 days", label: "typical one-page build" },
  { value: "1 month", label: "post-launch support" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-14 pt-32 md:pb-20 md:pt-40">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="reference-hero container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
        <motion.p
          className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-primary md:text-sm"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_hsl(45_100%_55%)]" />
          Independent web development studio
        </motion.p>

        <motion.h1
          className="max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.6rem]"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Websites built to turn attention into <span className="italic text-gradient">business.</span>
        </motion.h1>

        <motion.p
          className="mb-9 mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          We design and develop fast, conversion-focused digital experiences for growing brands, schools, events, and startups.
        </motion.p>

        <motion.div className="flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a project <ArrowUpRight size={17} />
          </Link>
          <Link to="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 py-3 font-bold text-foreground transition-colors hover:border-primary/50 hover:bg-card">
            Explore our work
          </Link>
        </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:mx-0"
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        >
          <div className="agency-orb relative aspect-[1.04/1] overflow-hidden rounded-[2rem] border border-white/10 bg-[#110b08] shadow-2xl shadow-black/40">
            <div className="agency-orb__light agency-orb__light--one" />
            <div className="agency-orb__light agency-orb__light--two" />
            <div className="agency-orb__light agency-orb__light--three" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
              <span>Loop Found</span>
              <span>Creative web studio</span>
            </div>
            <p className="absolute bottom-24 left-7 max-w-[15rem] font-display text-3xl font-bold leading-none tracking-[-0.04em] text-white md:left-9 md:text-4xl">
              Start with a clear <span className="text-primary">idea.</span>
            </p>
          </div>
          <div className="absolute bottom-5 right-5 w-[72%] rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl md:bottom-7 md:right-7 md:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] opacity-70">Ready when you are</p>
            <p className="mt-2 font-display text-xl font-extrabold leading-tight">Tell us what you are building.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold underline decoration-primary-foreground/40 underline-offset-4 hover:decoration-primary-foreground">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden w-52 overflow-hidden rounded-xl border border-white/10 bg-card p-2 shadow-xl md:block">
            <img src={projectDhc} alt="Digital Horizon Conclave website by Loop Found" className="aspect-[16/10] w-full rounded-lg object-cover object-top" />
            <p className="px-1 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-muted-foreground">Latest launch · DHC 2026</p>
          </div>
        </motion.div>
      </div>

      <div className="container relative mt-16 grid grid-cols-1 border-y border-border sm:grid-cols-3">
        {proof.map((item, index) => (
          <div key={item.label} className={`py-5 sm:px-6 ${index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}>
            <p className="font-display text-2xl font-extrabold text-foreground">{item.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="container mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <ArrowDown size={15} className="text-primary" /> Selected work
      </div>
    </section>
  );
};

export default HeroSection;
