// app/layout.jsx
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Musab Hassan | Full Stack MERN Developer",
  description:
    "Professional MERN stack developer specializing in web applications, CMS platforms, and business websites that help companies grow online.",
  authors: [{ name: "Musab Hassan" }],
  icon: {
    icon: "/favicon.ico",
  },
  keywords:
    "MERN developer, Next.js, React, Node.js, MongoDB, full stack developer, web development",

  openGraph: {
    title: "Musab Hassan | Full Stack MERN Developer",
    description:
      "Professional MERN stack developer specializing in web applications, CMS platforms, and business websites that help companies grow online.",
    url: "https://techmusab.in",
    siteName: "Musab Hassan Portfolio",
    images: [
      {
        url: "https://techmusab.in/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Musab Hassan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
