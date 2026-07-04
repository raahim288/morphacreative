import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PopupForm from "@/components/PopupForm";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Morpha Creative | Website Development, Software Development, Graphic Design & Digital Marketing",
  description:
    "Morpha Creative offers professional website development, responsive web design, Software Development, branding, logo design, social media marketing, graphic design, and digital solutions for businesses worldwide.",
  keywords:
    "Website Development, Web Design, React, Next.js, SEO, Digital Marketing, Social Media Marketing, Graphic Design, Logo Design, Branding, E-commerce Development, Karachi, Pakistan",
  generator: "v0.app",
  openGraph: {
    title: "Morpha Creative - Professional Web Development & Digital Marketing",
    description:
      "Professional website development, Software Development, graphic design, and digital marketing solutions for businesses.",
    type: "website",
    locale: "en_US",
  },
  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
  ],
  apple: "/favicon-180x180.png",
},
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0f172a" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <PopupForm />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
