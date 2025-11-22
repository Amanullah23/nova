import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "NOVA INC.",
  description: "Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
