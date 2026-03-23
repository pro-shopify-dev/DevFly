import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { googleSiteVerification, siteUrl } from '@/lib/site'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DevFly',
  url: siteUrl,
  email: 'tony.brain@kandykoi.com',
  logo: `${siteUrl}/devfly-logo.svg`,
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DevFly',
  url: siteUrl,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: googleSiteVerification,
  },
  title: {
    default: 'DevFly — Modern Software Development for US Startups',
    template: '%s | DevFly',
  },
  description:
    'DevFly builds custom web applications, SaaS platforms, and startup MVPs. Freelancer pricing, agency-quality delivery. Based in the US & serving growing businesses worldwide.',
  keywords: [
    'web development',
    'SaaS development',
    'startup MVP',
    'React',
    'Next.js',
    'Node.js',
    'software agency',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DevFly',
    url: siteUrl,
    title: 'DevFly — Modern Software Development for US Startups',
    description:
      'DevFly builds custom web applications, SaaS platforms, and startup MVPs with freelancer pricing and agency-quality delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevFly — Modern Software Development for US Startups',
    description:
      'DevFly builds custom web applications, SaaS platforms, and startup MVPs with freelancer pricing and agency-quality delivery.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
