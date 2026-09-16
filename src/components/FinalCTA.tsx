import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-14"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.25em] opacity-65">Project availability</p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            A focused team for the work that matters.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed opacity-75 md:text-lg">
            We take on a limited number of projects each month, so every launch gets the thinking, care, and support it deserves.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a new project <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
