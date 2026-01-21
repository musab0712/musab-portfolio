// app/layout.jsx
import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/Header";
import SeoSchema from "@/components/SeoSchema";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://techmusab.in"),

  title: {
    default: "Musab Hassan | Full Stack MERN Developer",
    template: "%s | Musab Hassan",
  },

  description:
    "Musab Hassan is a Full Stack MERN Developer with 2+ years of experience building scalable web applications, CMS platforms, dashboards and business websites.",

  keywords: [
    "Musab Hassan",
    "MERN Developer",
    "Full Stack Developer India",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "CMS Developer",
    "Web Application Developer",
  ],

  authors: [{ name: "Musab Hassan", url: "https://techmusab.in" }],

  creator: "Musab Hassan",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://techmusab.in",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Musab Hassan | Full Stack MERN Developer",
    description:
      "Professional MERN stack developer specializing in modern CMS platforms, dashboards and high-performance web applications.",
    url: "https://techmusab.in",
    siteName: "Musab Hassan Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Musab Hassan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Musab Hassan | Full Stack MERN Developer",
    description:
      "Full Stack MERN Developer building scalable web applications and business platforms.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-gray-50 text-gray-900">
        <SeoSchema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
