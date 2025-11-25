import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "NOVA INC.",
  description: "Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="scroll-smooth bg-white dark:bg-black transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
