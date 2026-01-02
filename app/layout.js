import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400","500","600","700"],
  display: 'swap',
  variable: '--font-inter'
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["400","500","600","700"],
  display: 'swap',
  variable: '--font-jakarta'
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400","500","600"],
  display: 'swap',
  variable: '--font-jetbrains'
});

export const metadata = {
  title: "Victor Igogo - Financial Market Analyst | Web3 Market Sentiment & Community Growth Strategist",
  description: "I analyze crypto markets, break down token and narrative trends, and design data-driven trading and community growth strategies that help traders perform consistently and Web3 projects scale with authority.",
  keywords: "Financial Market Analyst, Web3, Crypto Trading, Market Sentiment, Community Growth, Token Analysis, Trading Strategies, DeFi Research",
  author: "Victor Igogo",
  openGraph: {
    title: "Victor Igogo - Financial Market Analyst | Web3 Strategist",
    description: "Data-driven trading and community growth strategies for Web2 traders and Web3 projects",
    type: "website",
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300B4D8"><path d="M3 17h2l4-10 4 6 4-8h4v2h-2.5l-2.5 5-4-6-4 8H3z"/></svg>',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} font-inter antialiased leading-relaxed overflow-x-hidden bg-void-blue text-primary-text`}
      >
        {children}
      </body>     
    </html>
  );
}
