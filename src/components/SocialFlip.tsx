import type { LucideIcon } from "lucide-react";

export interface SocialFlipItem {
  letter: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Letter tiles that flip to social icons when the row is hovered (Vengeance UI social-flip-button). */
const SocialFlip = ({ items }: { items: SocialFlipItem[] }) => (
  <div className="vg-flip" role="list">
    {items.map(({ letter, label, href, icon: Icon }, index) => (
      <a
        key={label}
        role="listitem"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={label}
        className="vg-flip-tile"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <span className="vg-flip-face" aria-hidden="true">{letter}</span>
        <span className="vg-flip-face vg-flip-back" aria-hidden="true"><Icon size={17} /></span>
        <span className="vg-flip-tip" aria-hidden="true">{label}</span>
      </a>
    ))}
  </div>
);

export default SocialFlip;
