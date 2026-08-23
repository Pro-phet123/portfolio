export const skillGroups = [
  {
    title: "Data & programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 86 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "Excel & VBA", level: 85 },
      { name: "Java", level: 58 },
    ],
  },
  {
    title: "Machine learning & AI",
    skills: [
      { name: "Scikit-learn", level: 88 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "Feature engineering", level: 85 },
      { name: "Generative AI / LLMs", level: 84 },
      { name: "Prompt engineering", level: 88 },
    ],
  },
  {
    title: "Visualization & delivery",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Streamlit", level: 88 },
      { name: "Matplotlib", level: 80 },
      { name: "Reporting / PPT", level: 85 },
    ],
  },
  {
    title: "RAN & telecom systems",
    skills: [
      { name: "Huawei U2000 / U2020", level: 92 },
      { name: "RAN optimization", level: 90 },
      { name: "OSS / NMS platforms", level: 85 },
      { name: "IP networking & routing", level: 75 },
    ],
  },
];

export const stats = [
  { label: "Sites monitored", value: "500+" },
  { label: "Service availability", value: "99.9%" },
  { label: "Escalations resolved / wk", value: "40+" },
  { label: "Degree class", value: "First" },
];

export const projects = [
  {
    name: "Credit card fraud detection",
    period: "2023",
    tag: "Anomaly detection",
    description:
      "Autoencoder-based deep learning system that flags fraudulent transactions by learning what normal payment behaviour looks like, avoiding the class-imbalance trap of standard classifiers. Processed 6.36M+ transactions with a 0.13% fraud rate.",
    stack: ["TensorFlow", "Keras", "Streamlit", "Python"],
    metric: "92.0% accuracy",
    repo: "https://github.com/Pro-phet123/Final-year-work",
    demo: "https://pro-phet123-final-year-work-main-6mzu7f.streamlit.app/",
  },
  {
    name: "Diabetes risk prediction",
    period: "2024",
    tag: "Health analytics",
    description:
      "End-to-end pipeline predicting diabetes risk from 768 patient records, tuned with SMOTE and GridSearchCV to prioritize recall so fewer at-risk patients slip through screening.",
    stack: ["Scikit-learn", "SMOTE", "GridSearchCV", "Pandas"],
    metric: "75.9% recall",
    repo: "https://github.com/Pro-phet123/diabetes-risk-prediction",
    demo: null,
  },
  {
    name: "LikeLogic Engine",
    period: "2025",
    tag: "Engagement intelligence",
    description:
      "Regression engine that predicts how many likes a Facebook post will earn from engagement signals like unlikes, interactions, and video replays, trained on 34,000+ historical records for data-driven content decisions.",
    stack: ["Linear Regression", "Streamlit", "Joblib"],
    metric: "34k+ records",
    repo: "https://github.com/Pro-phet123/LikeLogic-Engine",
    demo: "https://likelogic-engine-tgq5c3uiew2ymcj2q9gnwj.streamlit.app/",
  },
  {
    name: "InkApply — AI cover letters",
    period: "Jul – Dec 2025",
    tag: "Generative AI",
    description:
      "LLM-powered app that turns a resume and job description into a tailored, ATS-friendly cover letter, with a custom NLP pipeline for contact extraction, prompt construction, and post-generation validation.",
    stack: ["Llama 3.1", "HuggingFace", "Streamlit", "NLP"],
    metric: "End-to-end pipeline",
    repo: "https://github.com/Pro-phet123/InkApply...",
    demo: null,
  },
];

export const experience = [
  {
    role: "RAN Engineer | Data Analyst",
    org: "Huawei Technologies",
    period: "Nov 2024 — Present",
    points: [
      "Monitor 2G–5G performance across 500+ active sites on Huawei, ZTE and Nokia platforms.",
      "Sole technical point of contact for Airtel, resolving 40+ escalations weekly.",
      "Maintain ~99.9% service availability through daily reporting and fault investigation.",
    ],
  },
  {
    role: "IP Engineer Intern",
    org: "NTel",
    period: "Jul 2022 — Sep 2022",
    points: [
      "Handled IP addressing, subnetting and Layer 3 routing configuration.",
      "Investigated routing faults and supported traffic rerouting to restore service.",
    ],
  },
  {
    role: "NOC Engineer Intern",
    org: "NTel",
    period: "Apr 2022 — Jun 2022",
    points: [
      "Monitored alarms via AMOS, Huawei U2000 and PRTG; logged and tracked incidents.",
      "Watched the SAT-3 submarine cable corridor for infrastructure risk via AIS Live.",
    ],
  },
];

export const certifications = [
  { name: "Zion Tech Hub — Data Science & AI Certificate", org: "Zion Tech Hub", date: "2026" },
  { name: "Advanced Data Analytics Professional Certificate", org: "Google", date: "2024" },
  { name: "Azure Data Fundamentals (DP-900)", org: "Microsoft", date: "" },
  { name: "Azure AI Fundamentals (AI-900)", org: "Microsoft", date: "" },
  { name: "Power BI Data Analyst Associate (PL-300)", org: "Microsoft", date: "" },
  { name: "Programming for Everybody (Python)", org: "University of Michigan", date: "2023" },
];
