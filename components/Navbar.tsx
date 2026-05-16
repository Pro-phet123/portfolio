export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
        background: "rgba(5,5,5,0.7)",
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>OE.</strong>

        <div style={{ display: "flex", gap: "18px", fontSize: "14px" }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#aaa",
  textDecoration: "none",
};
