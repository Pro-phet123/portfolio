type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  link,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #1f1f1f",
        background: "linear-gradient(145deg, #0a0a0a, #0f0f0f)",
        padding: "22px",
        borderRadius: "14px",
      }}
    >
      <h3 style={{ fontSize: "20px", fontWeight: 700 }}>
        {title}
      </h3>

      <p
        style={{
          color: "#aaa",
          marginTop: "10px",
          lineHeight: "1.7",
        }}
      >
        {description}
      </p>

      <a
        href={link}
        style={{
          display: "inline-block",
          marginTop: "12px",
          color: "#4ea1ff",
          textDecoration: "none",
        }}
      >
        Live System →
      </a>
    </div>
  );
}
