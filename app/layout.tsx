export const metadata = {
  title: "Olalemi Emmanuel | AI Engineer",
  description:
    "AI Systems Engineer | Data Scientist | Telecom Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#050505",
          color: "#fff",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
