import { useScrollReveal } from "./useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are the deadlines for creating a website from scratch?",
    a: "If it's a single-page site, we usually complete it within 20 days. However, deadlines may vary depending on the scope of work and the complexity of the website.",
  },
  {
    q: "Will our team be able to easily update the site down the road?",
    a: "Yes, of course. We build websites so you can easily edit the content without interfering with the code or layout. We'll show you how to manage everything if you need assistance.",
  },
  {
    q: "Can you integrate with our existing systems like CRM and analytics?",
    a: "Yes, no problem. We can integrate the site with the external systems you need: from analytics (Facebook, Google) to CRM systems or any other tools you use.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We provide 1 month of technical warranty support, ensuring the site and integrations function smoothly. Additionally, we can make further changes on an hourly basis.",
  },
  {
    q: "How much does it cost?",
    a: "The price for a turnkey website depends on the scope and complexity. Contact us for a free consultation and we'll provide a detailed quote tailored to your project.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Frequently Asked<br />
            <span className="italic text-gradient">Questions</span>
          </h2>
        </div>

        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl bg-card border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-display font-bold text-left text-base md:text-lg hover:no-underline hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
