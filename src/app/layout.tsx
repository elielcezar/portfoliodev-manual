import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import "./style.css";
import "./notas.css";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const text = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eliel Cezar · Desenvolvedor Front End & UI Designer",
  description:
    "Eliel Cezar, desenvolvedor front end e UI designer em Curitiba. Designer gráfico de formação, na web desde 2007, hoje tech lead de um time de 5 desenvolvedores.",
};

export const viewport: Viewport = {
  themeColor: "#1866c1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
