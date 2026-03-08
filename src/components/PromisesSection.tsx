import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";
import { DollarSign, FolderOpen, Diamond, Rocket } from "lucide-react";

const promises = [
  { icon: DollarSign, text: "will work within your budget" },
  { icon: FolderOpen, text: "operate transparently, no secrets" },
  { icon: Diamond, text: "ensure quality implementation" },
  { icon: Rocket, text: "deliver on time, every time" },
];

const PromisesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            You can<br />
            <span className="italic text-gradient">be sure</span><br />
            that we
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {promises.map((item, i) => (
            <motion.div
              key={item.text}
              className="group flex items-center gap-5 rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition-colors duration-300"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <p className="font-display text-lg font-bold">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
