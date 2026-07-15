import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Codvoro. Book a free consultation or submit your project details.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Codvoro',
    description: 'Contact Codvoro to discuss your web app, SaaS, or MVP project.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
