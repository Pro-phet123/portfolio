export const metadata = {
  title: "Olalemi Emmanuel | AI Systems Engineer",
  description:
    "AI Systems Engineer, Data Scientist, and Telecom Network Engineer Portfolio",
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
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          background: "#050505",
        }}
      >
        {children}
      </body>
    </html>
  );
}
