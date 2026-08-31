import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail, ArrowUpRight, Download, Menu, X, ExternalLink, Database, BrainCircuit, BarChart3, RadioTower, Code2 } from "lucide-react";
import "./index.css";

const github = "https://github.com/Pro-phet123";
const linkedin = "https://www.linkedin.com/in/olaoluwakintan-olalemi-a99182192";
const email = "mailto:olalemiolaoluwakintan@gmail.com";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    category: "MACHINE LEARNING · ANOMALY DETECTION",
    description: "Deep-learning anomaly detection pipeline for highly imbalanced financial transactions, with preprocessing, representation learning, evaluation and an interactive Streamlit inference layer.",
    metric: "6.36M+ transactions",
    tech: ["Python", "TensorFlow", "Keras", "Pandas", "Streamlit"],
    code: "https://github.com/Pro-phet123/Final-year-work",
    demo: "https://pro-phet123-final-year-work-main-6mzu7f.streamlit.app/"
  },
  {
    title: "Customer Value Prediction & BI Pipeline",
    category: "DATA SCIENCE · BUSINESS INTELLIGENCE",
    description: "End-to-end analytical pipeline using SQL and Python to clean retail transactions, engineer RFM features and predict customers likely to become high-value.",
    metric: "Best F1: 0.601",
    tech: ["SQL", "SQLite", "Pandas", "Scikit-learn", "SMOTE"],
    code: github
  },
  {
    title: "LikeLogic Engine",
    category: "PREDICTIVE ANALYTICS",
    description: "Regression-based analytics application for estimating social engagement from historical interaction data, packaged as an interactive Streamlit application.",
    metric: "34K+ records",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    code: "https://github.com/Pro-phet123/LikeLogic-Engine",
    demo: "https://likelogic-engine-tgq5c3uiew2ymcj2q9gnwj.streamlit.app/"
  },
  {
    title: "Diabetes Risk Prediction",
    category: "APPLIED MACHINE LEARNING",
    description: "Classification workflow using feature preprocessing, SMOTE, hyperparameter tuning and recall-focused evaluation for a health-risk prediction use case.",
    metric: "75.9% recall",
    tech: ["Python", "Scikit-learn", "SMOTE", "GridSearchCV"],
    code: "https://github.com/Pro-phet123/diabetes-risk-prediction"
  },
  {
    title: "InkApply",
    category: "GENERATIVE AI · NLP",
    description: "LLM-assisted application workflow designed to transform a resume and job description into tailored, ATS-oriented application content.",
    metric: "End-to-end LLM workflow",
    tech: ["Llama 3.1", "Hugging Face", "NLP"],
    code: github
  }
];

const skills = [
  { icon: Code2, title: "Programming & Data", items: ["Python", "SQL", "Pandas", "NumPy", "Git/GitHub"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Scikit-learn", "TensorFlow/Keras", "NLP", "Generative AI", "Model Evaluation"] },
  { icon: BarChart3, title: "Analytics & BI", items: ["Power BI", "Excel", "Matplotlib", "Data Cleaning", "Dashboard Design"] },
  { icon: RadioTower, title: "Telecom & RAN", items: ["2G/3G/4G/5G", "RAN Operations", "Huawei U2000/U2020", "OSS/NMS", "Network Analytics"] }
];

function App() {
  const [open, setOpen] = React.useState(false);

  const nav = ["about", "experience", "projects", "skills", "contact"];

  return (
    <div className="min-h-screen bg-[#07090d] text-slate-100 selection:bg-cyan-400/30">
      <div className="grid-bg" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-cyan-400">01</span> / OLALEMI
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item}`} className="nav-link">{item}</a>
            ))}
          </nav>

          <a href={email} className="hidden rounded-full border border-cyan-400/40 px-4 py-2 font-mono text-xs text-cyan-300 transition hover:bg-cyan-400 hover:text-black sm:block">
            LET'S CONNECT
          </a>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#07090d] px-6 py-5 md:hidden">
            {nav.map((item) => (
              <a onClick={() => setOpen(false)} key={item} href={`#${item}`} className="block py-3 font-mono text-sm uppercase text-slate-300">{item}</a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="container hero-section">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-xs text-cyan-300">
              <span className="status-dot" /> OPEN TO DATA / AI OPPORTUNITIES
            </div>

            <p className="mb-5 font-mono text-sm text-cyan-400">olalemi@portfolio:~$ whoami_</p>

            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Olalemi Emmanuel<span className="text-cyan-400">.</span>
            </h1>

            <h2 className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight text-slate-300 sm:text-3xl">
              Data Scientist <span className="text-slate-600">·</span> AI/ML Engineer <span className="text-slate-600">·</span> RAN Engineer
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
              First-Class Computer Science graduate building data products, machine-learning systems and analytical workflows — backed by hands-on experience operating and analyzing live 2G–5G telecommunications networks.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="primary-btn" href="#projects">VIEW SELECTED WORK <ArrowUpRight size={16} /></a>
              <a className="secondary-btn" href={linkedin} target="_blank" rel="noreferrer">LINKEDIN <ExternalLink size={15} /></a>
              <a className="secondary-btn" href={github} target="_blank" rel="noreferrer">GITHUB <Github size={15} /></a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
            {[
              ["4.67/5.00", "First-Class CGPA"],
              ["6.36M+", "Transactions analyzed"],
              ["2G → 5G", "RAN experience"],
              ["5+", "Data / AI projects"]
            ].map(([n, l]) => (
              <div key={l} className="metric-card">
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section container">
          <SectionLabel text="01 / ABOUT" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h2 className="section-heading">I work at the intersection of data, intelligence and infrastructure.</h2>
              <p className="body-copy">
                My background combines Computer Science, applied machine learning, business intelligence and telecommunications engineering. I enjoy turning raw operational or business data into reliable insights, predictive models and usable software.
              </p>
              <p className="body-copy">
                In my current RAN role at Huawei Technologies, I work with live network performance and operational data across Airtel infrastructure. That environment has strengthened my problem-solving, incident analysis, KPI interpretation and ability to work with production systems.
              </p>
              <p className="body-copy">
                My next step is to apply that engineering discipline to data science, machine learning, analytics or AI-focused roles where measurable impact matters.
              </p>
            </div>

            <div className="glass-card">
              <div className="card-kicker">PROFILE</div>
              <div className="profile-row"><span>Education</span><b>B.Sc. Computer Science</b></div>
              <div className="profile-row"><span>Academic standing</span><b>First Class · 4.67 / 5.00</b></div>
              <div className="profile-row"><span>Location</span><b>Lagos, Nigeria</b></div>
              <div className="profile-row"><span>Focus</span><b>Data · ML · AI · BI</b></div>
              <div className="profile-row"><span>Engineering</span><b>RAN · Telecom Analytics</b></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section border-y border-white/10 bg-white/[0.015]">
          <div className="container">
            <SectionLabel text="02 / EXPERIENCE" />
            <h2 className="section-heading max-w-2xl">Production experience, not just coursework.</h2>

            <div className="mt-12 space-y-0">
              <Experience period="Nov 2024 — Present" role="RAN Engineer / Data Analyst" company="Huawei Technologies" bullets={[
                "Monitor and analyze 2G–5G network performance, alarms and service-impacting events across live telecommunications infrastructure.",
                "Support network operations and incident resolution for Airtel-related RAN environments, translating technical KPIs and alarms into actionable troubleshooting steps.",
                "Perform remote health checks, validation and post-commissioning checks on network sites while collaborating across technical teams.",
                "Use operational data and structured analysis to identify anomalies, prioritize issues and support service availability."
              ]} />
              <Experience period="Jul 2022 — Sep 2022" role="IP Engineer Intern" company="ntel" bullets={[
                "Investigated IP and Layer-3 connectivity faults and supported traffic restoration activities.",
                "Applied networking fundamentals to fault isolation, escalation and service recovery."
              ]} />
              <Experience period="Apr 2022 — Jun 2022" role="NOC Engineer Intern" company="ntel" bullets={[
                "Monitored network alarms and operational events using AMOS, Huawei U2000 and PRTG.",
                "Logged incidents and supported network operations workflows in a NOC environment."
              ]} />
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionLabel text="03 / SELECTED PROJECTS" />
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-heading max-w-2xl">Evidence of how I build.</h2>
            <a className="text-link" href={github} target="_blank" rel="noreferrer">FULL GITHUB ARCHIVE <ArrowUpRight size={16} /></a>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {projects.map((project, i) => <Project key={project.title} project={project} featured={i === 0} />)}
          </div>
        </section>

        <section id="skills" className="section border-y border-white/10 bg-white/[0.015]">
          <div className="container">
            <SectionLabel text="04 / TECHNICAL CAPABILITIES" />
            <h2 className="section-heading max-w-2xl">A practical stack for data and engineering work.</h2>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(({icon: Icon, title, items}) => (
                <div key={title} className="bg-[#07090d] p-7">
                  <Icon className="mb-6 text-cyan-400" size={25} />
                  <h3 className="font-display text-base font-semibold">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {items.map(item => <li key={item} className="font-mono text-xs text-slate-400">— {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <SectionLabel text="05 / CONTACT" />
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Let's build something useful.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                I'm interested in opportunities across data science, machine learning, analytics, AI and technically demanding data-driven engineering teams.
              </p>
              <a href={email} className="primary-btn mt-8 inline-flex">START A CONVERSATION <Mail size={16} /></a>
            </div>

            <div className="space-y-3">
              <ContactLink icon={<Mail size={17}/>} label="EMAIL" value="olalemiolaoluwakintan@gmail.com" href={email} />
              <ContactLink icon={<Github size={17}/>} label="GITHUB" value="github.com/Pro-phet123" href={github} />
              <ContactLink icon={<Linkedin size={17}/>} label="LINKEDIN" value="olaoluwakintan-olalemi" href={linkedin} />
              <a href="/Olalemi_Emmanuel_CV.pdf" className="contact-link"><Download size={17}/><span><small>RESUME</small><b>Download CV</b></span><ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col justify-between gap-4 font-mono text-[11px] text-slate-500 sm:flex-row">
          <span>© 2026 Olalemi Olaoluwakintan Emmanuel</span>
          <span>Lagos, Nigeria · Built with React + Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({text}) {
  return <p className="mb-5 font-mono text-xs font-medium tracking-[0.18em] text-cyan-400">{text}</p>;
}

function Experience({period, role, company, bullets}) {
  return (
    <article className="experience-row">
      <div className="font-mono text-xs text-slate-500">{period}</div>
      <div>
        <h3 className="font-display text-xl font-semibold">{role}</h3>
        <p className="mt-1 font-mono text-sm text-cyan-400">{company}</p>
        <ul className="mt-5 space-y-3">
          {bullets.map(b => <li key={b} className="body-copy !mb-0 flex gap-3"><span className="text-cyan-400">›</span>{b}</li>)}
        </ul>
      </div>
    </article>
  );
}

function Project({project, featured}) {
  return (
    <article className={`project-card ${featured ? "md:col-span-2" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="project-tag">{project.category}</span>
        <span className="font-mono text-xs text-slate-600">0{projects.indexOf(project)+1}</span>
      </div>
      <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
        <span className="font-mono text-xs text-cyan-300">{project.metric}</span>
        <div className="flex gap-5 font-mono text-xs">
          <a className="text-slate-400 hover:text-white" href={project.code} target="_blank" rel="noreferrer">CODE ↗</a>
          {project.demo && <a className="text-slate-400 hover:text-white" href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}
        </div>
      </div>
    </article>
  );
}

function ContactLink({icon, label, value, href}) {
  return <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="contact-link">{icon}<span><small>{label}</small><b>{value}</b></span><ArrowUpRight size={16}/></a>;
}

createRoot(document.getElementById("root")).render(<App />);
