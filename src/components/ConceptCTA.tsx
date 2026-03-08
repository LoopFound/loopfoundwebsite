import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ConceptCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Get a website<br />
            <span className="italic text-gradient">concept</span><br />
            in 3 days
          </h2>
          <motion.p
            className="text-muted-foreground text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            You will receive
          </motion.p>
          <ul className="space-y-3 mb-10">
            {[
              "Design references that suit your project",
              "Site structure flowchart",
              "Website development project plan",
            ].map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-foreground/90"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          >
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_hsl(45_100%_55%/0.3)]"
            >
              I want a site concept
            </Link>
            <p className="text-primary text-sm font-bold mt-4">It's free</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptCTA;
