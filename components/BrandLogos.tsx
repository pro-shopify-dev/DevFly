import type { ReactNode } from 'react'

export type TechBrand = { name: string; logo: ReactNode }

/**
 * Real, brand-coloured technology/platform logos shown in the "built with" strip.
 * These represent the tools Codvoro builds with — not client endorsements.
 */
export const techBrands: TechBrand[] = [
  {
    name: 'React',
    logo: (
      <svg width="30" height="30" viewBox="-11.5 -10.23 23 20.46" aria-hidden="true">
        <circle r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#000" />
        <path
          d="M9 8v8M9 8l7.5 9M16 8v6.5"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1.5 21.5 7v10L12 22.5 2.5 17V7z" fill="#539E43" />
        <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">
          N
        </text>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 7h11l1 13h-13z" fill="#95BF47" />
        <path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="#5E8E3E" strokeWidth="1.4" />
        <text x="12" y="17.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
          S
        </text>
      </svg>
    ),
  },
  {
    name: 'WordPress',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11.2" fill="none" stroke="#21759B" strokeWidth="1.5" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#21759B" fontFamily="Georgia, serif">
          W
        </text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    logo: (
      <svg width="38" height="28" viewBox="0 0 34 24" aria-hidden="true">
        <text x="17" y="12" textAnchor="middle" fontSize="9" fontWeight="800" fill="#232F3E" fontFamily="Arial, sans-serif">
          aws
        </text>
        <path d="M6 17c7 4 15 4 22 0" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M25.5 16l2.8 1-1.3 2.5" fill="none" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#635BFF" />
        <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
          S
        </text>
      </svg>
    ),
  },
  {
    name: 'Laravel',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5 8.2 8.4v5.8L13.4 17v-5.8L18.6 8.4 13.4 5.5 8.2 8.4" fill="none" stroke="#FF2D20" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M13.4 17 18.6 20 21 18.6v-5.8l-2.4-1.4" fill="none" stroke="#FF2D20" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Python',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.9 2c-2.6 0-4.5.9-4.5 3v2.3h4.6v.8H5.3C3.2 8.1 2 9.5 2 12s1.1 4 3.2 4h1.6v-2.5c0-2.1 1.7-3.7 3.8-3.7h3.7c1.8 0 3.2-1.4 3.2-3.2V5C17.5 3.1 15.4 2 11.9 2Z" fill="#3776AB" />
        <path d="M12.1 22c2.6 0 4.5-.9 4.5-3v-2.3H12v-.8h6.7c2.1 0 3.3-1.4 3.3-3.9s-1.1-4-3.2-4h-1.6v2.5c0 2.1-1.7 3.7-3.8 3.7H9.7c-1.8 0-3.2 1.4-3.2 3.2V19c0 1.9 2.1 3 5.6 3Z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10.5" fill="#336791" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
          P
        </text>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.3 18.3 7.7 3.6c.2-.9 1.4-1 1.8-.2l2.2 4.1 1.5-2.8c.4-.8 1.6-.7 1.8.2l2.7 13.4z" fill="#FFA000" />
        <path d="M4.3 18.3 9.5 3.4l2.2 4.2z" fill="#F57C00" />
        <path d="M4.3 18.3 12 22.3l5.7-4z" fill="#FFCA28" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    logo: (
      <svg width="20" height="28" viewBox="0 0 16 24" aria-hidden="true">
        <path d="M4 0h4v4H4a2 2 0 0 1 0-4Z" fill="#F24E1E" />
        <path d="M8 0h4a2 2 0 0 1 0 4H8Z" fill="#A259FF" />
        <path d="M8 8h4a2 2 0 0 1 0 4H8Z" fill="#1ABCFE" />
        <path d="M4 8h4v4H4a2 2 0 0 1 0-4Z" fill="#0ACF83" />
        <path d="M4 16h4v4a2 2 0 1 1-4 0Z" fill="#FF7262" />
      </svg>
    ),
  },
]

/**
 * Marks for the scrolling partner strip, each in its own brand colours.
 * Sized for a ~26px optical height so the row reads as one even band despite
 * the differing glyph shapes.
 */
export const partnerBrands: TechBrand[] = [
  {
    name: 'GitHub',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#181717" aria-hidden="true">
        <path d="M12 1.8a10.2 10.2 0 0 0-3.2 19.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.8Z" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 7.4h11.6l1 13.6H5.2z" fill="#95BF47" />
        <path d="M9.1 8.2V6.4a2.9 2.9 0 0 1 5.8 0v1.8" fill="none" stroke="#5E8E3E" strokeWidth="1.5" />
        <text x="12" y="18" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
          S
        </text>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#635BFF" />
        <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
          S
        </text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    logo: (
      <svg width="36" height="26" viewBox="0 0 34 24" aria-hidden="true">
        <text x="17" y="12" textAnchor="middle" fontSize="10" fontWeight="800" fill="#232F3E" fontFamily="Arial, sans-serif">
          aws
        </text>
        <path d="M6 17c7 4 15 4 22 0" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M25.5 16l2.8 1-1.3 2.5" fill="none" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true">
        <path d="M21.3 12.2c0 5.1-3.5 8.7-8.7 8.7a8.9 8.9 0 1 1 0-17.8c2.4 0 4.4.9 6 2.3l-2.4 2.4a5.1 5.1 0 1 0-3.6 8.8 4.4 4.4 0 0 0 4.6-3.5h-4.6v-3.1h8.6c.1.4.1.8.1 1.2Z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
        <path d="M12 3.2 22.6 21H1.4Z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    logo: (
      <svg width="18" height="26" viewBox="0 0 16 24" aria-hidden="true">
        <path d="M4 0h4v4H4a2 2 0 0 1 0-4Z" fill="#F24E1E" />
        <path d="M8 0h4a2 2 0 0 1 0 4H8Z" fill="#A259FF" />
        <path d="M8 8h4a2 2 0 0 1 0 4H8Z" fill="#1ABCFE" />
        <path d="M4 8h4v4H4a2 2 0 0 1 0-4Z" fill="#0ACF83" />
        <path d="M4 16h4v4a2 2 0 1 1-4 0Z" fill="#FF7262" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="10.2" y="1.6" width="3.6" height="9.2" rx="1.8" fill="#36C5F0" />
        <rect x="13.2" y="10.2" width="9.2" height="3.6" rx="1.8" fill="#2EB67D" />
        <rect x="10.2" y="13.2" width="3.6" height="9.2" rx="1.8" fill="#ECB22E" />
        <rect x="1.6" y="10.2" width="9.2" height="3.6" rx="1.8" fill="#E01E5A" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.4" y="1.4" width="21.2" height="21.2" rx="4" fill="#fff" stroke="#000" strokeWidth="1.8" />
        <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="700" fill="#000" fontFamily="Georgia, serif">
          N
        </text>
      </svg>
    ),
  },
  {
    name: 'WordPress',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10.8" fill="none" stroke="#21759B" strokeWidth="1.6" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#21759B" fontFamily="Georgia, serif">
          W
        </text>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.3 18.3 7.7 3.6c.2-.9 1.4-1 1.8-.2l2.2 4.1 1.5-2.8c.4-.8 1.6-.7 1.8.2l2.7 13.4z" fill="#FFA000" />
        <path d="M4.3 18.3 9.5 3.4l2.2 4.2z" fill="#F57C00" />
        <path d="M4.3 18.3 12 22.3l5.7-4z" fill="#FFCA28" />
      </svg>
    ),
  },
  {
    name: 'Cloudflare',
    logo: (
      <svg width="30" height="26" viewBox="0 0 28 24" aria-hidden="true">
        <path d="M20.4 17.5H5.6a4 4 0 0 1 .7-7.9 5.8 5.8 0 0 1 10.8-1.4 4.3 4.3 0 0 1 3.3 9.3Z" fill="#F38020" />
        <path d="M20.6 9.7a4.3 4.3 0 0 1 1.7 7.8h-2.6a4.3 4.3 0 0 0 .9-7.8Z" fill="#FBAD41" />
      </svg>
    ),
  },
  {
    name: 'Twilio',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#F22F46" aria-hidden="true">
        <circle cx="12" cy="12" r="10.7" fill="none" stroke="#F22F46" strokeWidth="2.2" />
        <circle cx="9.1" cy="9.1" r="2.1" />
        <circle cx="14.9" cy="9.1" r="2.1" />
        <circle cx="9.1" cy="14.9" r="2.1" />
        <circle cx="14.9" cy="14.9" r="2.1" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    logo: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#47A248" aria-hidden="true">
        <path d="M12 1.6s5.2 4.4 5.2 10.2c0 4.4-2.8 7.1-4.4 7.8l-.3 3h-1l-.3-3c-1.6-.7-4.4-3.4-4.4-7.8C6.8 6 12 1.6 12 1.6Z" />
      </svg>
    ),
  },
]
