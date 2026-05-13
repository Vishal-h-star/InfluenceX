import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  metadataBase: new URL("https://influencex.example.com"),
  title: {
    default: "InfluenceX — Influencer Marketing That Converts",
    template: "%s | InfluenceX"
  },
  description:
    "InfluenceX is a full-service influencer marketing agency. We discover creators, run campaigns, deliver analytics, and close brand deals that move the needle.",
  keywords: [
    "influencer marketing",
    "creator economy",
    "brand deals",
    "campaign management",
    "influencer agency",
    "InfluenceX"
  ],
  authors: [{ name: "InfluenceX" }],
  openGraph: {
    title: "InfluenceX — Influencer Marketing That Converts",
    description:
      "Discover creators, run campaigns, and drive measurable growth with InfluenceX.",
    type: "website",
    siteName: "InfluenceX"
  },
  twitter: {
    card: "summary_large_image",
    title: "InfluenceX",
    description: "Influencer marketing that converts."
  },
  robots: { index: true, follow: true }
};

export const viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
