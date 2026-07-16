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
]
