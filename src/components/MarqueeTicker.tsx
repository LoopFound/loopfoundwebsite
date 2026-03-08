const items = [
  "UI/UX Design",
  "Front-End Dev",
  "Branding",
  "Web Development",
  "Responsive Design",
  "SEO Optimization",
  "Performance",
  "Conversion",
];

const MarqueeTicker = ({ reverse = false }: { reverse?: boolean }) => {
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden py-6 border-y border-border">
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        {repeatedItems.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-8 text-xl md:text-2xl font-display font-bold text-muted-foreground/40 uppercase tracking-wider whitespace-nowrap"
          >
            {item}
            <span className="inline-block mx-6 text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
