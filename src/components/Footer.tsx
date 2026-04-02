import { Instagram, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/images/loopfound-logo.jpg" alt="Loop Found" className="h-10 w-auto rounded" />
          </Link>
          <p className="text-muted-foreground text-sm mt-2">Websites that keep businesses growing.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/teamloopfound"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <Instagram size={16} />
          </a>
          <a
            href="mailto:teamloopfound@gmail.com"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <Mail size={16} />
          </a>
           <a
             href="https://loopfound.in"
             target="_blank"
             rel="noopener noreferrer"
             className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
           >
             <Globe size={16} />
           </a>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Loop Found. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["About", "Services", "Projects", "Contact"].map((label) => (
            <Link
              key={label}
              to={`/${label.toLowerCase()}`}
              className="text-muted-foreground text-xs hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
