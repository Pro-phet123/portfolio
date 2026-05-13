import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main
      style={{
        background: "#050505",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "90px 24px",
        }}
      >

        {/* HERO */}
        <section>
          <p
            style={{
              color: "#4ea1ff",
              letterSpacing: "2px",
              fontSize: "14px",
            }}
          >
            AI SYSTEMS • DATA SCIENCE • TELECOM ENGINEERING
          </p>

          <h1
            style={{
              fontSize: "62px",
              fontWeight: "900",
              lineHeight: "1.05",
              marginTop: "20px",
            }}
          >
            OLALEMI
            <br />
            EMMANUEL
          </h1>

          <p
            style={{
              marginTop: "25px",
              color: "#aaa",
              fontSize: "18px",
              maxWidth: "750px",
              lineHeight: "1.8",
            }}
          >
            I design and build intelligent systems across Machine Learning,
            Generative AI, and Telecom infrastructure — focusing on real-world
            deployment, scalable architecture, and production-grade AI
            applications.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/Pro-phet123"
              style={{
                background: "#fff",
                color: "#000",
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/olaoluwakintan-olalemi-a99182192"
              style={{
                border: "1px solid #333",
                padding: "12px 18px",
                borderRadius: "10px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          style={{ marginTop: "100px" }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "18px",
            }}
          >
            About
          </h2>

          <p
            style={{
              color: "#bbb",
              lineHeight: "1.9",
              maxWidth: "900px",
            }}
          >
            First Class Computer Science graduate with strong expertise in AI
            systems, machine learning, data science pipelines, and
            telecommunications engineering. Currently a RAN Engineer at Huawei,
            managing large-scale mobile network infrastructure (2G–5G),
            ensuring KPI stability, and supporting network optimization at
            enterprise scale while independently building AI-driven systems.
          </p>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          style={{ marginTop: "100px" }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "25px",
            }}
          >
            Selected AI Systems
          </h2>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >

            {/* InkApply */}
            <div style={cardStyle}>
              <h3 style={titleStyle}>
                InkApply — Generative AI Career Intelligence System
              </h3>

              <p style={descStyle}>
                A generative AI system that transforms job descriptions into
                ATS-optimized resumes and cover letters using LLMs and advanced
                prompt engineering. Built with Streamlit and transformer-based
                models for real-time document generation.
              </p>

              <a
                href="https://inkapply-cover-letter.streamlit.app/"
                style={linkStyle}
              >
                Live System →
              </a>
            </div>

            {/* Fraud Detection */}
            <div style={cardStyle}>
              <h3 style={titleStyle}>
                Financial Fraud Detection System (Deep Anomaly Engine)
              </h3>

              <p style={descStyle}>
                A deep learning Autoencoder-based anomaly detection system
                designed to identify fraudulent financial transactions in highly
                imbalanced datasets using feature engineering and reconstruction
                error modeling.
              </p>

              <a
                href="https://pro-phet123-final-year-work-main-6mzu7f.streamlit.app/"
                style={linkStyle}
              >
                Live System →
              </a>
            </div>

            {/* LikeLogic */}
            <div style={cardStyle}>
              <h3 style={titleStyle}>
                Engagement Intelligence System (Predictive Analytics Engine)
              </h3>

              <p style={descStyle}>
                A machine learning regression system that models user engagement
                behavior and predicts content performance based on interaction
                signals such as likes, unlikes, and video replays.
              </p>

              <a
                href="https://likelogic-engine-tgq5c3uiew2ymcj2q9gnwj.streamlit.app/"
                style={linkStyle}
              >
                Live System →
              </a>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          style={{ marginTop: "100px" }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "18px",
            }}
          >
            Core Expertise
          </h2>

          <p
            style={{
              color: "#bbb",
              lineHeight: "2",
            }}
          >
            AI Systems Design • Machine Learning • Deep Learning • LLMs •
            Prompt Engineering • Data Science • Python • SQL • TensorFlow •
            Scikit-learn • Telecom Networks • RAN Optimization • Network
            Performance Engineering
          </p>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          style={{
            marginTop: "100px",
            paddingBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              marginBottom: "18px",
            }}
          >
            Contact
          </h2>

          <p style={{ color: "#bbb" }}>
            Email: olalemiolaoluwakintan@gmail.com
          </p>

          <p style={{ color: "#bbb" }}>
            Phone: +234 8131196618
          </p>
        </section>

      </div>
    </main>
  );
}

/* styles */

const cardStyle = {
  border: "1px solid #1f1f1f",
  background: "linear-gradient(145deg, #0a0a0a, #0f0f0f)",
  padding: "22px",
  borderRadius: "14px",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: 700,
};

const descStyle = {
  color: "#aaa",
  marginTop: "10px",
  lineHeight: "1.7",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "12px",
  color: "#4ea1ff",
  textDecoration: "none",
};
