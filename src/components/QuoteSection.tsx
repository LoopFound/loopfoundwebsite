import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Quote className="text-primary mb-6" size={48} />
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-10">
            Our design solutions are based on a deep understanding of
            <span className="italic text-gradient"> what makes businesses grow online</span>
          </p>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-extrabold text-xl">
              P
            </div>
            <div>
              <p className="font-bold">Pranith Vincent</p>
              <p className="text-muted-foreground text-sm">CEO & Founder at Loop Found</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
