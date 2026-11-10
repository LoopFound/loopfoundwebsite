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
      ["Who we are", "Loop Found is a digital studio that designs and builds websites, products, and brand experiences. This notice explains what information this website collects, why, and the choices you have."],
      ["Information you provide", "When you send an enquiry, we process your name, email address, and project message to respond to your request. Contact data is sent through our email delivery provider and is not stored in this website’s browser application."],
      ["How we use it", "We use enquiry details only to reply to you, discuss your project, and keep a record of our conversation. We do not sell your information or use it for unrelated marketing."],
      ["Analytics", "Analytics tools are disabled until you choose Accept analytics. If you consent, Google Tag Manager and Vercel Analytics may collect anonymous usage information, such as pages viewed, device type, and performance metrics, to help us understand and improve the website."],
      ["Local storage", "We store your analytics preference in your browser’s local storage so the consent prompt is not shown on every visit. This value does not identify you."],
      ["Service providers", "We rely on trusted providers to run this website, including Vercel for hosting and performance insights, Google for tag management, and an email delivery service for enquiries. They process data on our behalf under their own security and privacy terms."],
      ["Retention", "Enquiry emails are kept only as long as needed to respond, manage any resulting project, and meet reasonable record-keeping needs. You can ask us to delete them at any time."],
      ["Your choices", "Choose Essential only to reject analytics. You can clear this site’s local storage to show the preference prompt again. To request access, correction, or deletion of an enquiry, contact teamloopfound@gmail.com."],
      ["Third-party links", "Links to client websites, Instagram, and referral forms are governed by the privacy practices of those external services."],
      ["Changes", "We may update this notice when the website or our practices change. The date at the top of this page shows when it was last revised."],
    ],
  },
  terms: {
    title: <>WEBSITE<br />TERMS.</>,
    description: "Terms for use of the Loop Found website.",
    sections: [
      ["Acceptance", "By accessing or using this website you agree to these terms. If you do not agree, please do not use the website."],
      ["Using this website", "Use this website for lawful purposes. Do not attempt to disrupt it, access restricted systems, scrape it at scale, or misuse its content or contact channels."],
      ["Information and enquiries", "Website information is provided for general information. A project enquiry does not create a contract, commitment, or service engagement. Project scope, timing, and fees are confirmed separately in writing."],
      ["Intellectual property", "Loop Found retains rights in its website content, design, and branding unless stated otherwise. Client work shown in our portfolio belongs to the respective clients and is displayed with permission. Do not copy or reuse it without consent."],
      ["Third-party links", "External links are provided for convenience. Loop Found does not control or guarantee third-party websites and is not responsible for their content or practices."],
      ["No warranty", "This website is provided “as is”. We aim to keep it accurate and available, but we do not guarantee that it will always be complete, current, or free from errors or interruptions."],
      ["Limitation of liability", "To the extent permitted by law, Loop Found is not liable for any loss arising from use of, or inability to use, this website or reliance on its content."],
      ["Privacy", "How we handle information collected through this website is described in our Privacy Notice."],
      ["Changes", "We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms."],
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
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#4b4b4b]">{document.description}</p>
      <p className="mt-4 text-sm uppercase tracking-[.2em] text-[#4b4b4b]">Last updated: 10 November 2026</p>
      <div className="mt-20 border-t border-[#151515]/20">{document.sections.map(([heading, body]) => <section key={heading} className="grid gap-5 border-b border-[#151515]/20 py-9 md:grid-cols-[.7fr_1.3fr]"><h2 className="adko-display text-4xl leading-[.9]">{heading}</h2><p className="leading-relaxed text-[#4b4b4b]">{body}</p></section>)}</div>
    </main>
    <Footer />
  </div>;
};

export default Legal;
