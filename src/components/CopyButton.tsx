import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

/** Copies `value` to the clipboard; the icon swaps to a tick for 2s (Vengeance UI copy-button). */
const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      /* clipboard blocked: leave the icon unchanged */
    }
  };

  return (
    <button type="button" onClick={copy} className="vg-copy" data-copied={copied || undefined} aria-label={copied ? `${label} copied` : `Copy ${label}`}>
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
};

export default CopyButton;
