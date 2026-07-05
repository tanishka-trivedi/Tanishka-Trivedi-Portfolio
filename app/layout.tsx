import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanishka Trivedi — AI Engineer",
  description:
    "Portfolio of Tanishka Trivedi — AI/ML Engineer, IIT Jodhpur. Projects in Computer Vision, NLP, and Quantitative Strategies.",
  keywords: ["AI", "Machine Learning", "NLP", "Computer Vision", "IIT Jodhpur", "Portfolio"],
  openGraph: {
    title: "Tanishka Trivedi — AI Engineer",
    description: "AI/ML Engineer building intelligent systems at IIT Jodhpur.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cosmos-bg text-cosmos-text antialiased">
        {children}
      </body>
    </html>
  );
}