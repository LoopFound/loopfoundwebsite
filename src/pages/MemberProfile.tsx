import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Quote,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  MapPin,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { getMemberBySlug, teamMembers } from "@/data/team";

const MemberProfile = () => {
  const { memberSlug } = useParams<{ memberSlug: string }>();

  const member = useMemo(() => {
    return memberSlug ? getMemberBySlug(memberSlug) : undefined;
  }, [memberSlug]);

  if (!member) {
    return (
      <div className="min-h-screen bg-[#151515] text-[#f7f7f4] flex flex-col justify-between">
        <SEOHead
          title="Team Member Not Found — Loop Found"
          description="The requested team member profile could not be found."
          path="/about"
          noIndex
        />
        <Navbar />
        <main className="container px-4 py-32 flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-primary text-xs font-mono uppercase tracking-[0.25em] mb-4">
            Loop Found Team
          </p>
          <h1 className="adko-display text-5xl md:text-7xl font-extrabold mb-6">
            MEMBER NOT FOUND
          </h1>
          <p className="text-[#f7f7f4]/70 max-w-md mb-8">
            The profile for "{memberSlug}" does not exist or has moved. Explore our core team on our about page.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ArrowLeft size={16} /> View All Team Members
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Canonical casing redirect: if user types /gopinath, keep URL clean or match
  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "Loop Found",
      url: "https://www.loopfound.in"
    },
    url: `https://www.loopfound.in/${member.slug}`,
    description: member.tagline,
    knowsAbout: member.skillCategories.flatMap((c) => c.skills)
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#151515] selection:bg-primary selection:text-black">
      <SEOHead
        title={`${member.name} — ${member.role} at Loop Found`}
        description={`${member.name} is ${member.role} at Loop Found. ${member.tagline} Explore skills, engineering stack, and key projects.`}
        path={`/${member.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-24 md:pt-32">
        {/* Top Breadcrumb & Kicker */}
        <section className="container px-4 sm:px-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#151515]/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#151515]/60">
              <Link to="/about" className="hover:text-black transition-colors">
                Team
              </Link>
              <span>/</span>
              <span className="text-black font-bold">{member.name}</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#151515]/70">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-primary" /> {member.location}
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#151515]/30" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-primary" /> {member.experienceYears}
              </span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="container px-4 sm:px-6 mb-16 md:mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#151515]/80 mb-6">
              <Sparkles size={12} className="text-primary fill-primary" />
              <span>{member.kicker}</span>
            </div>

            <h1 className="adko-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight uppercase mb-6">
              {member.name}
            </h1>

            <p className="text-primary text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-6">
              {member.role}
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-[#151515]/80 max-w-3xl leading-relaxed font-normal mb-8">
              {member.tagline}
            </p>

            {/* Direct Social & Connect Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#151515] px-7 py-3.5 text-sm font-bold text-[#f7f7f4] hover:bg-black transition-all hover:gap-3"
              >
                <span>Work with {member.name.split(" ")[0]}</span>
                <ArrowUpRight size={18} />
              </Link>

              {member.socials.email && (
                <a
                  href={`mailto:${member.socials.email}?subject=Project%20Inquiry%20via%20Loop%20Found`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3.5 text-sm font-semibold text-[#151515] hover:border-black/40 hover:bg-white transition-all"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              )}

              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3.5 text-sm font-semibold text-[#151515] hover:border-black/40 hover:bg-white transition-all"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              )}

              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3.5 text-sm font-semibold text-[#151515] hover:border-black/40 hover:bg-white transition-all"
                  aria-label={`${member.name} on GitHub`}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}

              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3.5 text-sm font-semibold text-[#151515] hover:border-black/40 hover:bg-white transition-all"
                  aria-label={`${member.name} on Twitter/X`}
                >
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="border-y border-[#151515]/10 bg-white/50 backdrop-blur-sm py-10 mb-16 md:mb-24">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {member.stats.map((st, i) => (
                <div key={i} className="border-l-2 border-primary/40 pl-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#151515]/60 mb-1">
                    {st.label}
                  </p>
                  <p className="adko-display text-2xl sm:text-3xl font-extrabold text-[#151515]">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bio & Quote Section */}
        <section className="container px-4 sm:px-6 mb-20 md:mb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3 font-bold">
                Philosophy
              </p>
              <h2 className="adko-display text-3xl sm:text-4xl font-extrabold leading-tight">
                PERSPECTIVE & VISION.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#151515]/80">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#151515] text-[#f7f7f4] mb-8 shadow-md">
                <Quote className="text-primary mb-4" size={32} />
                <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-white">
                  "{member.quote}"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                    {member.name}
                  </span>
                </div>
              </div>

              {member.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Stack Section */}
        <section className="bg-[#151515] text-[#f7f7f4] py-20 md:py-28 mb-20 md:mb-28">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mb-14">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3 font-bold">
                Capabilities & Stack
              </p>
              <h2 className="adko-display text-4xl sm:text-6xl font-extrabold leading-tight">
                SKILLS & EXPERTISE.
              </h2>
              <p className="text-[#f7f7f4]/70 mt-4 text-base sm:text-lg">
                The tools, strategic methodologies, and technologies {member.name.split(" ")[0]} uses to craft exceptional digital experiences at Loop Found.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {member.skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#1e1e1e] p-7 sm:p-8 hover:border-primary/40 transition-colors"
                >
                  <h3 className="adko-display text-2xl font-bold text-white mb-5 flex items-center justify-between">
                    <span>{category.title}</span>
                    <span className="text-xs font-mono text-primary font-normal">
                      0{idx + 1}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#f7f7f4] hover:border-primary hover:text-primary transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Responsibilities at Loop Found */}
        <section className="container px-4 sm:px-6 mb-20 md:mb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3 font-bold">
                At Loop Found
              </p>
              <h2 className="adko-display text-3xl sm:text-4xl font-extrabold leading-tight">
                CORE IMPACT & ROLE.
              </h2>
              <p className="text-sm text-[#151515]/70 mt-4">
                How {member.name.split(" ")[0]} contributes to the success of every client engagement and studio milestone.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {member.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-[#151515]/10 bg-white hover:border-[#151515]/30 transition-all shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-base text-[#151515]/90 leading-relaxed font-medium">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects / Works */}
        <section className="container px-4 sm:px-6 mb-20 md:mb-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 border-b border-[#151515]/10 pb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3 font-bold">
                Portfolio
              </p>
              <h2 className="adko-display text-4xl sm:text-5xl font-extrabold leading-tight">
                FEATURED WORK.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#151515] hover:text-primary transition-colors"
            >
              <span>View All Agency Projects</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {member.featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-[#151515]/10 bg-white p-7 sm:p-8 hover:border-black transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#151515]/60">
                      {project.type}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-[#151515]/5 flex items-center justify-center text-[#151515] group-hover:bg-primary group-hover:text-black transition-colors"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <h3 className="adko-display text-2xl sm:text-3xl font-bold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                    {project.role}
                  </p>
                  <p className="text-sm sm:text-base text-[#151515]/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <div className="mt-6 pt-4 border-t border-[#151515]/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#151515] group-hover:text-primary transition-colors"
                    >
                      <span>Explore Live Build</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 sm:px-6 mb-20 md:mb-28">
          <div className="rounded-3xl bg-[#151515] text-[#f7f7f4] p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3 font-bold">
                Start a Conversation
              </p>
              <h2 className="adko-display text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="text-[#f7f7f4]/80 text-base sm:text-lg mb-8 leading-relaxed">
                Connect directly with {member.name.split(" ")[0]} and the Loop Found team to discuss how we can build a high-converting, unforgettable digital experience for your brand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <span>About Loop Found</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Team Members Switcher */}
        <section className="border-t border-[#151515]/10 bg-white/40 py-16">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-2 font-bold">
                Loop Found People
              </p>
              <h2 className="adko-display text-3xl sm:text-4xl font-extrabold">
                MEET THE REST OF THE TEAM.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {otherMembers.map((om) => (
                <Link
                  key={om.slug}
                  to={`/${om.slug}`}
                  className="group block rounded-2xl border border-[#151515]/10 bg-white p-6 hover:border-primary transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {om.role}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#151515]/5 flex items-center justify-center text-[#151515] group-hover:bg-primary group-hover:text-black transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <h3 className="adko-display text-2xl font-bold mb-2">
                    {om.name}
                  </h3>
                  <p className="text-xs text-[#151515]/70 line-clamp-2 leading-relaxed">
                    {om.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MemberProfile;
