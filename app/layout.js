import "./globals.css";

export const metadata = {
  title: "NOVA INC.",
  description: "Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth bg-paper">{children}</body>
    </html>
  );
}
