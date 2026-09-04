import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { googleSiteVerification, siteUrl } from '@/lib/site'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Codvoro',
  url: siteUrl,
  logo: `${siteUrl}/codvoro-logo.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-617-615-9749',
    contactType: 'sales',
    areaServed: 'US',
    availableLanguage: 'English',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Codvoro',
  url: siteUrl,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'fo-verify': '1302ac94-5302-4d26-8169-66619a971b86',
  },
  verification: {
    google: googleSiteVerification,
  },
  title: {
    default: 'Codvoro — Modern Software Development for US Startups',
    template: '%s | Codvoro',
  },
  description:
    'Codvoro builds custom web applications, SaaS platforms, and startup MVPs. Freelancer pricing, agency-quality delivery. Based in the US & serving growing businesses worldwide.',
  keywords: [
    'web development',
    'SaaS development',
    'startup MVP',
    'React',
    'Next.js',
    'Node.js',
    'software agency',
  ],
  applicationName: 'Codvoro',
  authors: [{ name: 'Codvoro', url: siteUrl }],
  creator: 'Codvoro',
  publisher: 'Codvoro',
  category: 'technology',
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
    siteName: 'Codvoro',
    url: siteUrl,
    title: 'Codvoro — Modern Software Development for US Startups',
    description:
      'Codvoro builds custom web applications, SaaS platforms, and startup MVPs with freelancer pricing and agency-quality delivery.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Codvoro software development agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codvoro — Modern Software Development for US Startups',
    description:
      'Codvoro builds custom web applications, SaaS platforms, and startup MVPs with freelancer pricing and agency-quality delivery.',
    images: ['/opengraph-image'],
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
        <main className="pt-16 lg:pt-30">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
