export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
        background: "rgba(5,5,5,0.8)",
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          OE.
        </h3>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "14px",
          }}
        >
          <a href="#about" style={linkStyle}>
            About
          </a>

          <a href="#projects" style={linkStyle}>
            Projects
          </a>

          <a href="#skills" style={linkStyle}>
            Skills
          </a>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#aaa",
  textDecoration: "none",
};
