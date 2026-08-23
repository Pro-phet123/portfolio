import React, { useState, useEffect } from "react";
import {
  Radio,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Menu,
  X,
  Cpu,
  BarChart3,
  Layers,
  Antenna,
  GraduationCap,
  Award,
} from "lucide-react";
import { skillGroups, stats, projects, experience, certifications } from "./data.js";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function SignalArray() {
  const nodes = [
    { x: 40, y: 60, delay: "0s" },
    { x: 300, y: 40, delay: "0.4s" },
    { x: 330, y: 220, delay: "0.9s" },
    { x: 70, y: 260, delay: "1.3s" },
    { x: 200, y: 15, delay: "0.6s" },
    { x: 20, y: 160, delay: "1.7s" },
  ];
  return (
    <svg viewBox="0 0 360 300" className="w-full h-full" aria-hidden="true">
      <circle cx="185" cy="150" r="130" fill="none" stroke="#1E2A3D" strokeWidth="1" />
      <circle cx="185" cy="150" r="90" fill="none" stroke="#1E2A3D" strokeWidth="1" />
      <circle cx="185" cy="150" r="50" fill="none" stroke="#1E2A3D" strokeWidth="1" />
      <g style={{ transformOrigin: "185px 150px" }} className="animate-sweep">
        <line x1="185" y1="150" x2="185" y2="20" stroke="#2DD4BF" strokeWidth="1.5" opacity="0.9" />
        <path d="M185 150 L185 20 A130 130 0 0 1 250 45 Z" fill="#2DD4BF" opacity="0.08" />
      </g>
      <circle cx="185" cy="150" r="5" fill="#2DD4BF" />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="4"
            fill="#5EEAD4"
            className="animate-blink"
            style={{ animationDelay: n.delay }}
          />
          <line
            x1="185"
            y1="150"
            x2={n.x}
            y2={n.y}
            stroke="#2DD4BF"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </g>
      ))}
    </svg>
  );
}

function SkillBar({ name, level }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[13px] text-ink-primary/90">{name}</span>
        <span className="font-mono text-[11px] text-signal tabular-nums">{level}%</span>
      </div>
      <div className="h-[3px] w-full bg-base-line rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-signal-dim to-signal rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  return (
    <div className="min-h-screen bg-base text-ink-primary font-body selection:bg-signal selection:text-base">
      {/* background grid texture */}
      <div className="fixed inset-0 bg-grid bg-grid pointer-events-none opacity-60" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-base" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-base-line/80 bg-base/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <Radio size={18} className="text-signal" strokeWidth={2} />
            <span>OLALEMI</span>
            <span className="text-signal">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`text-[13px] font-mono uppercase tracking-wider transition-colors ${
                  active === n.id ? "text-signal" : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:olalemiolaoluwakintan@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-mono border border-base-line px-3.5 py-2 rounded-sm hover:border-signal hover:text-signal transition-colors"
          >
            Get in touch
          </a>
          <button className="md:hidden text-ink-primary" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-base-line bg-base px-6 py-4 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)} className="text-sm font-mono uppercase text-ink-secondary">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="relative">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-36 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-signal border border-signal/30 bg-signal/5 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-blink" />
              Live across 500+ sites · Lagos, NG
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight mb-5">
              Olalemi Olaoluwakintan
              <span className="block text-ink-secondary">Emmanuel</span>
            </h1>
            <p className="text-ink-secondary text-[15px] leading-relaxed max-w-md mb-8">
              Data Scientist and AI Engineer who reads signal the way most people read text — trained
              monitoring live telecom networks, now building machine learning systems that turn messy
              data into decisions worth trusting.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-signal text-base font-semibold text-[13px] px-5 py-3 rounded-sm hover:bg-signal-bright transition-colors"
              >
                View projects <ArrowUpRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-base-line text-[13px] px-5 py-3 rounded-sm hover:border-signal hover:text-signal transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="relative h-72 md:h-96 flex items-center justify-center">
            <SignalArray />
          </div>
        </section>

        {/* STAT TICKER */}
        <section className="border-y border-base-line bg-base-panel/50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-base-line">
            {stats.map((s) => (
              <div key={s.label} className="py-6 px-4 text-center md:text-left first:pl-0">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-signal tabular-nums">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-ink-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[1.4fr,1fr] gap-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">01 · About</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">
              Two disciplines, one instinct: find the signal in the noise.
            </h2>
            <div className="space-y-4 text-ink-secondary text-[15px] leading-relaxed">
              <p>
                I'm a First Class Computer Science graduate currently working as a RAN Engineer at
                Huawei Technologies, where I monitor 2G–5G performance across more than 500 live sites
                and keep service availability near 99.9%. That job trained me to spot anomalies fast
                and communicate them clearly under pressure — skills that carried straight into data
                science.
              </p>
              <p>
                Outside the network operations centre, I build machine learning and generative AI
                systems: fraud detectors, risk-prediction pipelines, and LLM-powered tools, each
                deployed and demoed, not left in a notebook. I hold Microsoft certifications in Azure
                Data, Azure AI, and Power BI, and I'm currently building out a freelance data science
                and AI practice.
              </p>
            </div>
          </div>
          <div className="bg-base-panel border border-base-line rounded-md p-6 space-y-5 h-fit">
            <div className="flex items-center gap-3">
              <GraduationCap size={18} className="text-signal shrink-0" />
              <div>
                <div className="text-[13px] text-ink-primary">BSc Computer Science</div>
                <div className="text-[12px] text-ink-muted">Trinity University, Lagos · First Class, 4.67 CGPA</div>
              </div>
            </div>
            <div className="h-px bg-base-line" />
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-signal shrink-0" />
              <div>
                <div className="text-[13px] text-ink-primary">Based in Lagos, Nigeria</div>
                <div className="text-[12px] text-ink-muted">Open to remote data science & AI work</div>
              </div>
            </div>
            <div className="h-px bg-base-line" />
            <div className="flex items-center gap-3">
              <Award size={18} className="text-signal shrink-0" />
              <div>
                <div className="text-[13px] text-ink-primary">6 certifications</div>
                <div className="text-[12px] text-ink-muted">Microsoft, Google, University of Michigan</div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-t border-base-line bg-base-panel/40">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">02 · Skills</p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">Signal readout</h2>
              </div>
              <p className="text-ink-muted text-[13px] max-w-xs">
                Proficiency levels, self-assessed against real project and operational usage.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skillGroups.map((group) => (
                <div key={group.title} className="bg-base border border-base-line rounded-md p-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-5">
                    {group.title}
                  </h3>
                  <div className="space-y-4">
                    {group.skills.map((s) => (
                      <SkillBar key={s.name} {...s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-24">
          <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">03 · Experience</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-12">Field record</h2>
          <div className="space-y-0">
            {experience.map((e, i) => (
              <div key={e.role} className="grid md:grid-cols-[160px,1fr] gap-4 md:gap-10 py-8 border-t border-base-line first:border-t-0 md:first:border-t md:first:pt-0">
                <div className="font-mono text-[12px] text-ink-muted pt-1">{e.period}</div>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink-primary">{e.role}</h3>
                  <p className="text-signal text-[13px] font-mono mb-3">{e.org}</p>
                  <ul className="space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="text-ink-secondary text-[14px] leading-relaxed flex gap-2.5">
                        <span className="text-signal mt-2 w-1 h-1 rounded-full bg-signal shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-base-line bg-base-panel/40">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">04 · Projects</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-12">Deployed, not just prototyped</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="group bg-base border border-base-line rounded-md p-6 flex flex-col hover:border-signal/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-signal bg-signal/10 border border-signal/20 px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted">{p.period}</span>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2.5">{p.name}</h3>
                  <p className="text-ink-secondary text-[13.5px] leading-relaxed mb-5 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-ink-muted border border-base-line px-2 py-0.5 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-base-line">
                    <span className="font-mono text-[12px] text-signal">{p.metric}</span>
                    <div className="flex items-center gap-4">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[12px] text-ink-secondary hover:text-signal transition-colors"
                      >
                        <Github size={14} /> Code
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[12px] text-ink-secondary hover:text-signal transition-colors"
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="https://github.com/Pro-phet123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[13px] font-mono text-ink-secondary hover:text-signal transition-colors"
            >
              See the full repository archive <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">05 · Certifications</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-10">Credentials on file</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="flex items-start gap-3 bg-base-panel border border-base-line rounded-md p-4">
                <Award size={16} className="text-signal mt-0.5 shrink-0" />
                <div>
                  <div className="text-[13px] text-ink-primary leading-snug">{c.name}</div>
                  <div className="text-[11px] font-mono text-ink-muted mt-1">
                    {c.org}
                    {c.date && ` · ${c.date}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-base-line bg-base-panel/40">
          <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[1.2fr,1fr] gap-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">06 · Contact</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 leading-tight">
                Open to data science, AI engineering, and analytics roles.
              </h2>
              <p className="text-ink-secondary text-[15px] leading-relaxed max-w-md">
                Whether it's a full-time role, a freelance build, or just a question about a project
                above — my inbox is monitored about as closely as my sites.
              </p>
            </div>
            <div className="space-y-3">
              <a href="mailto:olalemiolaoluwakintan@gmail.com" className="flex items-center justify-between border border-base-line rounded-md px-5 py-4 hover:border-signal transition-colors group">
                <span className="flex items-center gap-3 text-[13.5px]"><Mail size={17} className="text-signal" /> olalemiolaoluwakintan@gmail.com</span>
                <ArrowUpRight size={15} className="text-ink-muted group-hover:text-signal transition-colors" />
              </a>
              <a href="tel:+2348131196618" className="flex items-center justify-between border border-base-line rounded-md px-5 py-4 hover:border-signal transition-colors group">
                <span className="flex items-center gap-3 text-[13.5px]"><Phone size={17} className="text-signal" /> +234 813 119 6618</span>
                <ArrowUpRight size={15} className="text-ink-muted group-hover:text-signal transition-colors" />
              </a>
              <a href="https://github.com/Pro-phet123" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-base-line rounded-md px-5 py-4 hover:border-signal transition-colors group">
                <span className="flex items-center gap-3 text-[13.5px]"><Github size={17} className="text-signal" /> github.com/Pro-phet123</span>
                <ArrowUpRight size={15} className="text-ink-muted group-hover:text-signal transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/olaoluwakintan-olalemi-a99182192" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-base-line rounded-md px-5 py-4 hover:border-signal transition-colors group">
                <span className="flex items-center gap-3 text-[13.5px]"><Linkedin size={17} className="text-signal" /> LinkedIn profile</span>
                <ArrowUpRight size={15} className="text-ink-muted group-hover:text-signal transition-colors" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-base-line">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] text-ink-muted">© {new Date().getFullYear()} Olalemi Olaoluwakintan Emmanuel</span>
          <span className="font-mono text-[11px] text-ink-muted flex items-center gap-2">
            <Antenna size={13} className="text-signal" /> Built with React & Tailwind
          </span>
        </div>
      </footer>
    </div>
  );
}
