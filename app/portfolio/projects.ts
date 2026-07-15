export type PortfolioProject = {
  slug: string
  title: string
  category: string
  desc: string
  challenge: string
  outcome: string
  tags: string[]
  color: string
  category_color: string
  image: string
  demoSummary: string
  problem: string
  solution: string[]
  metrics: Array<{ label: string; value: string }>
  timeline: string
  clientType: string
  demoHref: string
  codeHref: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'SaaS Platform',
    desc: 'A real-time analytics platform for e-commerce brands. Features custom reporting, funnel analysis, cohort tracking, and CSV/PDF export. Serves 500+ daily active users.',
    challenge: 'The client needed a self-serve analytics tool that could replace multiple third-party subscriptions, saving $3,000/month.',
    outcome: 'Launched in 10 weeks. Reduced analytics costs by 70% and improved decision speed significantly.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    color: 'from-brand-600 to-brand-800',
    category_color: 'bg-brand-600/20 text-brand-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demoSummary: 'Interactive product analytics workspace with funnel, cohort, retention, and export tooling for growth teams.',
    problem: 'Teams were manually stitching data from multiple tools and spending too much time validating numbers before taking action.',
    solution: [
      'Built a modular dashboard with reusable analytics widgets and role-based reporting views.',
      'Added event ingestion pipelines with near real-time processing and query caching.',
      'Created one-click exports and shareable report links for non-technical stakeholders.',
    ],
    metrics: [
      { label: 'Delivery Window', value: '10 weeks' },
      { label: 'Ops Cost Reduction', value: '70%' },
      { label: 'Daily Active Users', value: '500+' },
    ],
    timeline: '10 weeks',
    clientType: 'E-commerce SaaS',
    demoHref: '/portfolio/demo/saas-analytics-dashboard',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'two-sided-marketplace-mvp',
    title: 'Two-Sided Marketplace MVP',
    category: 'Startup MVP',
    desc: 'A marketplace connecting independent consultants with SMB clients. Includes service listings, booking, escrow payments, and review system.',
    challenge: 'First-time founders needed an MVP to validate their concept and attract seed investment.',
    outcome: 'Launched in 8 weeks. Secured $400k seed round using the live product as a demo.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe', 'Vercel'],
    color: 'from-purple-700 to-brand-700',
    category_color: 'bg-purple-600/20 text-purple-400',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    demoSummary: 'Marketplace demo showcasing consultant onboarding, bookings, escrow checkout, and trust layer workflows.',
    problem: 'Founders needed a polished product experience quickly to test demand and confidently present to investors.',
    solution: [
      'Designed dual-sided onboarding with tailored dashboards for consultants and buyers.',
      'Implemented secure booking and escrow payment releases via Stripe.',
      'Launched social proof loops with verified reviews and repeat booking flows.',
    ],
    metrics: [
      { label: 'Delivery Window', value: '8 weeks' },
      { label: 'Seed Funding', value: '$400k' },
      { label: 'Core Flows', value: '4 shipped' },
    ],
    timeline: '8 weeks',
    clientType: 'Early-stage startup',
    demoHref: '/portfolio/demo/two-sided-marketplace-mvp',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'healthcare-scheduling-system',
    title: 'Healthcare Scheduling System',
    category: 'Web Application',
    desc: 'HIPAA-compliant appointment scheduling for a US medical group with 50+ providers. Includes patient portal, automated reminders, EHR integration, and billing.',
    challenge: 'Legacy scheduling software was causing 200+ missed appointments per month and significant staff overhead.',
    outcome: 'Reduced missed appointments by 60% and cut scheduling admin time in half.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'AWS'],
    color: 'from-emerald-700 to-brand-700',
    category_color: 'bg-emerald-600/20 text-emerald-400',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    demoSummary: 'Healthcare operations demo with provider schedules, patient self-booking, reminders, and intake automation.',
    problem: 'Operations teams were overwhelmed by manual scheduling, no-shows, and fragmented communication between staff and patients.',
    solution: [
      'Delivered a multi-provider scheduling engine with time-zone aware availability.',
      'Integrated automated SMS and email reminders to reduce no-shows.',
      'Connected intake forms and billing checkpoints into one staff-friendly workflow.',
    ],
    metrics: [
      { label: 'Missed Appointment Drop', value: '60%' },
      { label: 'Admin Time Saved', value: '50%' },
      { label: 'Providers Supported', value: '50+' },
    ],
    timeline: '12 weeks',
    clientType: 'Medical group',
    demoHref: '/portfolio/demo/healthcare-scheduling-system',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'headless-ecommerce-platform',
    title: 'Headless E-Commerce Platform',
    category: 'E-Commerce',
    desc: 'Custom headless storefront for a DTC brand doing $2M/year in revenue. Replaced a slow Shopify theme with a blazing-fast Next.js frontend with 98 Lighthouse scores.',
    challenge: 'Poor site performance was hurting SEO rankings and conversion rates, especially on mobile.',
    outcome: 'Page speed improved by 3x. Conversion rate increased 22% within 60 days of launch.',
    tags: ['Next.js', 'Shopify Storefront API', 'Sanity', 'Stripe', 'Vercel'],
    color: 'from-orange-700 to-brand-700',
    category_color: 'bg-orange-600/20 text-orange-400',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    demoSummary: 'Fast storefront demo with collection browsing, product personalization, and checkout handoff.',
    problem: 'Mobile shoppers abandoned sessions because the legacy storefront was slow and difficult to navigate.',
    solution: [
      'Rebuilt the storefront with server-rendered Next.js pages and smart caching.',
      'Created a CMS-powered merchandising workflow for growth teams.',
      'Optimized media delivery and route-level code splitting for mobile performance.',
    ],
    metrics: [
      { label: 'Speed Improvement', value: '3x' },
      { label: 'Conversion Lift', value: '22%' },
      { label: 'Lighthouse Score', value: '98' },
    ],
    timeline: '9 weeks',
    clientType: 'DTC commerce brand',
    demoHref: '/portfolio/demo/headless-ecommerce-platform',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'b2b-proposal-automation-saas',
    title: 'B2B Proposal Automation SaaS',
    category: 'SaaS Platform',
    desc: 'A proposal and contract automation tool for agencies. Drag-and-drop proposal builder, e-signature, payment collection, and CRM integration.',
    challenge: 'Agency owners were spending 5-8 hours per week manually creating proposals in Google Docs.',
    outcome: 'Average proposal creation time reduced from 2 hours to 12 minutes.',
    tags: ['React', 'Laravel', 'MySQL', 'Stripe', 'AWS'],
    color: 'from-sky-700 to-brand-700',
    category_color: 'bg-sky-600/20 text-sky-400',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    demoSummary: 'Agency workflow demo from proposal drafting to signature and first payment collection.',
    problem: 'Sales teams were blocked by repetitive proposal formatting and disconnected contract/payment tools.',
    solution: [
      'Built a block-based proposal editor with reusable templates.',
      'Added e-signature and payment step automation for faster deal closure.',
      'Connected CRM metadata to auto-fill scope and pricing sections.',
    ],
    metrics: [
      { label: 'Proposal Time', value: '2h to 12m' },
      { label: 'Weekly Hours Saved', value: '5-8h' },
      { label: 'Time To Cash', value: '40% faster' },
    ],
    timeline: '11 weeks',
    clientType: 'Digital agency teams',
    demoHref: '/portfolio/demo/b2b-proposal-automation-saas',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
  {
    slug: 'real-time-collaboration-tool',
    title: 'Real-Time Collaboration Tool',
    category: 'Web Application',
    desc: 'A lightweight project management tool with real-time board updates, mentions, file attachments, and Slack/email notifications. Built for remote teams.',
    challenge: 'The client wanted a focused, distraction-free alternative to Jira for their 30-person remote team.',
    outcome: 'Shipped in 12 weeks and adopted company-wide within 2 weeks of launch.',
    tags: ['Next.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'AWS'],
    color: 'from-pink-700 to-brand-700',
    category_color: 'bg-pink-600/20 text-pink-400',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    demoSummary: 'Collaboration demo featuring live board updates, instant mentions, and clean notification routing.',
    problem: 'Teams needed live collaboration and visibility without the complexity of enterprise project tooling.',
    solution: [
      'Implemented low-latency real-time board updates with optimistic UI patterns.',
      'Added comments, mentions, attachments, and digest notifications.',
      'Built simple sprint and backlog workflows to keep execution focused.',
    ],
    metrics: [
      { label: 'Company Adoption', value: '2 weeks' },
      { label: 'Team Size', value: '30 people' },
      { label: 'Build Window', value: '12 weeks' },
    ],
    timeline: '12 weeks',
    clientType: 'Remote product team',
    demoHref: '/portfolio/demo/real-time-collaboration-tool',
    codeHref: 'https://github.com/tonybrain-dotcom',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}