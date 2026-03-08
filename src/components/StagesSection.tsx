import { useScrollReveal } from "./useScrollReveal";
import { motion } from "framer-motion";

const stages = [
  {
    num: "1",
    title: "Strategic Sessions",
    badge: "Free",
    description:
      "We get to know you, discuss your goals, preferences, and ideas. We gather information about your business. Next, we prepare a presentation with the concept of your future website: showcasing references and features that can be implemented on the site. We develop the site structure in the form of a flowchart.",
  },
  {
    num: "2",
    title: "UX/UI and Visual Design",
    description:
      "We work on the conceptual content of future design solutions, considering user interaction logic. We select colors, font pairs, and create graphic elements to enhance the previously established meanings with relevant visuals. We create adaptive design layouts.",
  },
  {
    num: "3",
    title: "Development",
    description:
      "We bring design layouts to life with code, create interactive animations where needed, and adapt the site for different screen types. We make necessary integrations: CRM, analytics, or anything else you need. We ensure everything works like clockwork: adaptation, loading speed. We connect the site to your domain and publish it.",
  },
  {
    num: "4",
    title: "Guarantee Support",
    description:
      "After the release, we provide one month of warranty support to ensure everything runs smoothly. We can also make content updates or additional changes on an hourly basis, such as updating sections, adding new content, or other modifications as needed.",
  },
];

const StagesSection = () => {
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
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">How We Work</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Website creation<br />
            <span className="italic text-gradient">Stages</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              className="group rounded-3xl bg-card border border-border p-8 md:p-10 hover:border-primary/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-display text-primary font-extrabold text-xl">
                  {stage.num}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">{stage.title}</h3>
                {stage.badge && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
                    {stage.badge}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
