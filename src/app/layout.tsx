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
  metadataBase: new URL('https://eliel.dev'),
  title: {
    default: 'Eliel Cezar — Desenvolvedor Front End & UI Designer',
    template: '%s | Eliel Cezar',
  },
  description: 'Especialista em desenvolvimento de sites, apps e ecommerce. Melhore o desempenho e design de seu site com um profissional com mais de 15 anos de mercado.',
  keywords: ['Desenvolvedor Web', 'Front End', 'UI Designer', 'Next.js', 'React', 'Freelancer', 'Curitiba', 'Criação de Sites', 'Programador'],
  authors: [{ name: 'Eliel Cezar', url: 'https://eliel.dev' }],
  creator: 'Eliel Cezar',
  publisher: 'Eliel Cezar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Eliel Cezar - Desenvolvedor Web & UI Designer',
    description: 'Especialista em desenvolvimento de sites, apps e ecommerce.',
    url: 'https://eliel.dev',
    siteName: 'Eliel Cezar',
    images: [
      {
        // 800×420: mesma proporção (~1.91:1) da recomendada 1200×630 do OG.
        url: '/images/capa-OG.png',
        width: 800,
        height: 420,
        alt: 'Eliel Cezar - Desenvolvedor Web',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eliel Cezar',
    description: 'Especialista em desenvolvimento de sites, apps e ecommerce.',
    images: ['/images/capa-OG.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}


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
