import { useScrollReveal } from "./useScrollReveal";
import { Mail, Phone, Globe, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "teamloopfound@gmail.com", href: "mailto:teamloopfound@gmail.com" },
  { icon: Phone, label: "+91 6379586015", href: "tel:+916379586015" },
  { icon: Phone, label: "+91 8148448835", href: "tel:+918148448835" },
  { icon: Globe, label: "loopfound.in", href: "https://loopfound.in" },
  { icon: Instagram, label: "@teamloopfound", href: "https://instagram.com/teamloopfound" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`);
    window.location.href = `mailto:teamloopfound@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app", description: "Review the prepared message and send it when ready." });
  };

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="container px-4">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Let's Work<br />
            <span className="italic text-gradient">Together</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
            <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
              Ready to build something useful? Tell us about your goals, timeline, and what success looks like for your business.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group py-3 border-b border-border hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium flex-1">{item.label}</span>
                  <ArrowRight size={16} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl bg-card border border-border p-8 md:p-10 space-y-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary/50 border-border rounded-xl h-12"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-secondary/50 border-border rounded-xl h-12"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-secondary/50 border-border rounded-xl"
            />
            <Button type="submit" className="w-full rounded-full font-bold h-12 text-base">
              Prepare Email
            </Button>
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              This opens your email app with the project details filled in. You can review everything before sending.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
