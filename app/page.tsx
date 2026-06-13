import Link from "next/link";
import { Typewriter } from "@/components/typewriter";
import {
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Trophy,
  Mountain,
  Cpu,
  Brain,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  FileText
} from "lucide-react";
import { contactLinks, featuredSystems } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { ButtonLink } from "@/components/button-link";

const skills = [
  {
    domain: "AI & Machine Learning",
    icon: Brain,
    items: ["LLMs (Gemini / LLaMA)", "RAG Architectures", "XGBoost", "Scikit-learn", "Agentic Systems"]
  },
  {
    domain: "Computer Vision",
    icon: Cpu,
    items: ["YOLOv8", "OpenCV", "Mediapipe", "Real-time inference", "Fine-tuning"]
  },
  {
    domain: "Backend & Infrastructure",
    icon: Database,
    items: ["Python", "PostgreSQL", "Redis", "Docker", "Socket.io", "FastAPI", "Ubuntu Server"]
  },
  {
    domain: "Frontend & Full-Stack",
    icon: Globe,
    items: ["React", "Next.js", "Tailwind CSS", "Firebase", "TypeScript"]
  }
];

const contactIconMap: Record<string, React.ElementType> = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
};

export default function HomePage() {
  return (
    <div className="bg-cream">

      {/* ── HERO ── */}
      <section className="border-b border-oat bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-terracotta/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-36 relative z-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest uppercase text-teal flex items-center gap-3">
              <span className="w-6 h-px bg-teal" /> Builder & System Thinker
            </p>
            <h1 className="mt-8 font-display text-6xl sm:text-7xl md:text-[6.5rem] font-bold leading-[0.95] tracking-tight text-espresso max-w-4xl h-[120px] sm:h-[140px] md:h-[200px]">
              <Typewriter text="Mulagiri" speed={80} cursor={false} />
              <br />
              <Typewriter text="Charan " speed={80} delay={700} cursor={false} className="text-teal/80" />
              <Typewriter text="Tej" speed={80} delay={1300} cursor={true} />
            </h1>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn delay={0.1} className="lg:col-span-7">
              <p className="text-2xl font-serif italic text-espresso/70 leading-snug mb-8">
                "I build intelligent systems that adapt, scale, and close the gap between raw data and human decisions."
              </p>
              <p className="text-lg text-espresso/80 leading-relaxed">
                Engineer at the intersection of AI infrastructure, computer vision, and full-stack systems. Currently exploring multi-agent orchestration, agentic AI, and retrieval-augmented architectures — while maintaining a GPA that proves the fundamentals aren't optional.
              </p>
              <p className="mt-5 text-lg text-espresso/80 leading-relaxed">
                Off the terminal, you'll find me on high-altitude trails with a budget pack, or dissecting championship cricket chases for their composure under pressure. Both sharpen the same instinct: stay calm, execute clean, don't panic at the last mile.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <ButtonLink href="/systems">Explore the Systems</ButtonLink>
                <ButtonLink href="/resume.pdf" variant="outline">View Resume</ButtonLink>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-px bg-oat border border-oat">
                {[
                  { label: "CGPA", value: "8.98", sub: "out of 10.0" },
                  { label: "Graduation", value: "2028", sub: "B.Tech CSE" },
                  { label: "Institution", value: "GRIET", sub: "Hyderabad" },
                  { label: "Hackathons", value: "2× Won", sub: "National Level" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-sand p-6">
                    <div className="font-display text-4xl font-bold text-espresso">{stat.value}</div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-widest text-terracotta">{stat.label}</div>
                    <div className="mt-1 text-sm text-espresso/50">{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-espresso/50 font-mono">
                <MapPin size={14} className="text-teal" />
                Hyderabad, India
                <span className="mx-2">·</span>
                <GraduationCap size={14} className="text-teal" />
                B.Tech CSE
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SKILLS MATRIX ── */}
      <section className="border-b border-oat bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-3 flex items-center gap-3">
                  <span className="w-4 h-px bg-terracotta" />
                  Technical Arsenal
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso">
                  Skills Matrix
                </h2>
              </div>
              <p className="hidden md:block max-w-sm text-base text-espresso/60 text-right leading-relaxed">
                From ML pipelines to containerized infra — the full stack of tools behind the systems.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-oat">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return (
                <FadeIn key={group.domain} delay={i * 0.08}>
                  <div className="bg-cream p-8 h-full hover:bg-sand/80 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                      <Icon size={20} className="text-teal" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-terracotta mb-5">
                      {group.domain}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-espresso/80">
                          <span className="w-1 h-1 rounded-full bg-teal shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED SYSTEMS ── */}
      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-3 flex items-center gap-3">
                  <span className="w-4 h-px bg-terracotta" />
                  Active Deployments
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso">
                  Top 3 Systems
                </h2>
              </div>
              <ButtonLink href="/systems" variant="outline">View All Systems</ButtonLink>
            </div>
          </FadeIn>
          <div className="grid gap-px bg-oat lg:grid-cols-3">
            {featuredSystems.map((system) => (
              <ProjectCard key={system.slug} system={system} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND THE TERMINAL ── */}
      <section className="border-b border-oat bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-3 flex items-center gap-3">
              <span className="w-4 h-px bg-terracotta" />
              Beyond the Terminal
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso mb-16">
              What Shapes the Engineer
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-oat">
            <FadeIn delay={0.1}>
              <div className="bg-sand p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-8">
                  <Mountain size={24} className="text-teal" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-espresso font-medium mb-4">
                  High-altitude, budget-conscious trekker
                </h3>
                <p className="text-espresso/70 leading-relaxed text-base">
                  Not the resort kind of travel. I carry a pack, pick the hard trail, and prefer altitude over amenity. The mountains teach the same thing good engineering does: plan thoroughly, stay calm when conditions change, and never underestimate the last mile.
                </p>
                <div className="mt-8 pt-8 border-t border-oat">
                  <p className="font-mono text-xs uppercase tracking-widest text-terracotta">Core Trait</p>
                  <p className="mt-2 text-lg text-espresso font-medium">Grit & adaptability under pressure</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-sand p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-8">
                  <Trophy size={24} className="text-terracotta" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-espresso font-medium mb-4">
                  The run-chaser's composure
                </h3>
                <p className="text-espresso/70 leading-relaxed text-base">
                  I grew up watching legendary cricket chases — the kind where impossible becomes inevitable through quiet, methodical execution. That psychology follows me into every deadline: don't panic at 3am, trust the process, execute the next ball cleanly.
                </p>
                <div className="mt-8 pt-8 border-t border-oat">
                  <p className="font-mono text-xs uppercase tracking-widest text-terracotta">Core Trait</p>
                  <p className="mt-2 text-lg text-espresso font-medium">Composure & relentless execution</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-espresso" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <FadeIn>
            <p className="font-mono text-xs tracking-widest uppercase text-teal mb-6 flex items-center gap-3">
              <span className="w-4 h-px bg-teal" />
              Open to Conversations
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-cream leading-none mb-6">
              Let's build<br />
              <span className="text-teal">something</span> that matters.
            </h2>
            <p className="mt-6 text-xl text-cream/60 max-w-xl leading-relaxed">
              Whether it's a collaboration, a technical deep-dive, or just a good problem to think about — reach out.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactLinks.map((link, i) => {
              const Icon = contactIconMap[link.label] ?? ArrowUpRight;
              return (
                <FadeIn key={link.label} delay={i * 0.1}>
                  <a
                    href={link.href}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                    className="group flex items-center justify-between p-6 border border-cream/10 rounded-xl hover:border-teal hover:bg-teal/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cream/5 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                        <Icon size={18} className="text-cream/60 group-hover:text-teal transition-colors" strokeWidth={1.6} />
                      </div>
                      <span className="font-display text-2xl font-bold text-cream group-hover:text-teal transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-cream/30 group-hover:text-teal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      strokeWidth={1.8}
                    />
                  </a>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex justify-start">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-3 bg-cream text-espresso px-8 py-4 rounded-xl font-mono text-sm tracking-widest uppercase font-bold hover:bg-teal hover:text-cream transition-colors shadow-lg"
              >
                <FileText size={18} />
                Download Full Resume
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
