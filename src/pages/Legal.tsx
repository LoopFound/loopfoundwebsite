import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import type { ReactNode } from "react";

type LegalKind = "privacy" | "terms";

const content = {
  privacy: {
    title: <>PRIVACY<br />NOTICE.</>,
    description: "How Loop Found handles website analytics and enquiry information.",
    sections: [
      ["Information you provide", "When you send an enquiry, we process your name, email address, and project message to respond to your request. Contact data is sent through our email delivery provider and is not stored in this website’s browser application."],
      ["Analytics", "Analytics tools are disabled until you choose Accept analytics. If you consent, Google Tag Manager and Vercel Analytics may collect anonymous usage information to help us understand website performance."],
      ["Your choices", "Choose Essential only to reject analytics. You can clear this site’s local storage to show the preference prompt again. To request access, correction, or deletion of an enquiry, contact teamloopfound@gmail.com."],
      ["Third-party links", "Links to client websites, Instagram, and referral forms are governed by the privacy practices of those external services."],
    ],
  },
  terms: {
    title: <>WEBSITE<br />TERMS.</>,
    description: "Terms for use of the Loop Found website.",
    sections: [
      ["Using this website", "Use this website for lawful purposes. Do not attempt to disrupt it, access restricted systems, or misuse its content or contact channels."],
      ["Information and enquiries", "Website information is provided for general information. A project enquiry does not create a contract, commitment, or service engagement. Project scope, timing, and fees are confirmed separately in writing."],
      ["Content and links", "Loop Found retains rights in its website content unless stated otherwise. External links are provided for convenience; Loop Found does not control or guarantee third-party websites."],
      ["Contact", "Questions about these website terms can be sent to teamloopfound@gmail.com."],
    ],
  },
} satisfies Record<LegalKind, { title: ReactNode; description: string; sections: string[][] }>;

const Legal = ({ page }: { page: LegalKind }) => {
  const document = content[page];
  const label = page === "privacy" ? "Privacy Notice" : "Website Terms";
  return <div className="min-h-screen bg-[#f7f7f4] text-[#151515]">
    <SEOHead title={`${label} — Loop Found`} description={document.description} path={`/${page}`} />
    <Navbar />
    <main id="main-content" className="mx-auto max-w-5xl px-5 pb-28 pt-40 md:px-10">
      <p className="agency-kicker">Loop Found / {label}</p>
      <h1 className="adko-display text-[clamp(5rem,13vw,12rem)] leading-[.76] tracking-[-.05em]">{document.title}</h1>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#4b4b4b]">This notice describes current website behavior. Review with qualified legal counsel before production use.</p>
      <div className="mt-20 border-t border-[#151515]/20">{document.sections.map(([heading, body]) => <section key={heading} className="grid gap-5 border-b border-[#151515]/20 py-9 md:grid-cols-[.7fr_1.3fr]"><h2 className="adko-display text-4xl leading-[.9]">{heading}</h2><p className="leading-relaxed text-[#4b4b4b]">{body}</p></section>)}</div>
    </main>
    <Footer />
  </div>;
};

export default Legal;
