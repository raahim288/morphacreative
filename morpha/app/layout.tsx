import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import PopupForm from '@/components/PopupForm'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nexa Digital Studio | Website Development, SEO, Graphic Design & Digital Marketing',
  description: 'Nexa Digital Studio offers professional website development, responsive web design, SEO, branding, logo design, social media marketing, graphic design, and digital solutions for businesses worldwide.',
  keywords: 'Website Development, Web Design, React, Next.js, SEO, Digital Marketing, Social Media Marketing, Graphic Design, Logo Design, Branding, E-commerce Development, Karachi, Pakistan',
  generator: 'v0.app',
  openGraph: {
    title: 'Nexa Digital Studio - Professional Web Development & Digital Marketing',
    description: 'Professional website development, SEO optimization, graphic design, and digital marketing solutions for businesses.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <PopupForm />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}