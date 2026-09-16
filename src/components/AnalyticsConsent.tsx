import { useEffect, useState } from "react";

type AnalyticsConsentProps = {
  onChange: (granted: boolean) => void;
};

const CONSENT_KEY = "loopfound-analytics-consent";
const GTM_ID = "GTM-PSMDLVBN";

const loadGoogleTagManager = () => {
  if (document.querySelector(`script[data-gtm-id="${GTM_ID}"]`)) return;

  const tagManagerWindow = window as Window & { dataLayer?: unknown[] };
  tagManagerWindow.dataLayer ??= [];
  tagManagerWindow.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtmId = GTM_ID;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
};

const AnalyticsConsent = ({ onChange }: AnalyticsConsentProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!import.meta.env.PROD) return;

    const savedConsent = window.localStorage.getItem(CONSENT_KEY);
    if (savedConsent === "granted") {
      onChange(true);
      loadGoogleTagManager();
      return;
    }

    if (savedConsent === "denied") {
      onChange(false);
      return;
    }

    setVisible(true);
  }, [onChange]);

  const setConsent = (granted: boolean) => {
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    setVisible(false);
    onChange(granted);
    if (granted) loadGoogleTagManager();
  };

  if (!visible) return null;

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-2xl border border-[#f7f7f4]/20 bg-[#151515] p-5 text-[#f7f7f4] shadow-2xl" aria-labelledby="analytics-consent-title">
      <h2 id="analytics-consent-title" className="text-sm font-bold">Analytics preference</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#f7f7f4]/70">Allow anonymous analytics to help Loop Found understand site use. You can continue with only essential functionality.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => setConsent(false)} className="min-h-11 rounded-full border border-[#f7f7f4]/40 px-4 text-xs font-bold uppercase tracking-[.1em]">Essential only</button>
        <button type="button" onClick={() => setConsent(true)} className="min-h-11 rounded-full bg-primary px-4 text-xs font-bold uppercase tracking-[.1em] text-primary-foreground">Accept analytics</button>
      </div>
    </aside>
  );
};

export default AnalyticsConsent;
