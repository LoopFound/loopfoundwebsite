import { Instagram, Mail, Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif text-lg font-bold text-primary">Loop Found</p>
      <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Loop Found. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="https://instagram.com/teamloopfound" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={18} />
        </a>
        <a href="mailto:teamloopfound@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
        <a href="https://loopfound.netlify.app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Globe size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
