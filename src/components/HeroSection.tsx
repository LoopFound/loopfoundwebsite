import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative text-center max-w-5xl mx-auto">
        <motion.p
          className="text-primary text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-8"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Web Development Agency
        </motion.p>

        {["WE CREATE", "WEBSITES"].map((text, i) => (
          <motion.span
            key={text}
            className="block font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.9] text-foreground"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: "easeOut" }}
          >
            {text}
          </motion.span>
        ))}

        <motion.span
          className="block font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.9] italic text-gradient"
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        >
          that grow
        </motion.span>

        <motion.span
          className="block font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.9] text-foreground mb-8"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          businesses
        </motion.span>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          We design websites that sell, convert, and last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_hsl(45_100%_55%/0.3)]"
          >
            Work With Us
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs tracking-widest uppercase mb-2">scroll to see more</p>
        <ArrowDown size={20} className="mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
