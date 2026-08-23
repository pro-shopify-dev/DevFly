import type { PortfolioProject } from '../projects'

type DemoScenario = {
  title: string
  summary: string
  impact: string
}

type DemoContent = {
  intro: string
  scenarios: DemoScenario[]
  livePreviewLabel: string
}

export const demoContentBySlug: Record<PortfolioProject['slug'], DemoContent> = {
  'ai-knowledge-assistant': {
    intro: 'Support teams ask natural-language questions and receive concise answers grounded in approved internal sources.',
    scenarios: [
      { title: 'Cited Knowledge Search', summary: 'Search policies and product documentation with a source attached to every claim.', impact: 'Answers stay fast, consistent, and auditable.' },
      { title: 'Access-Aware Retrieval', summary: 'Results respect team roles and document permissions before content reaches the model.', impact: 'Sensitive knowledge remains protected.' },
      { title: 'Human Review Queue', summary: 'Low-confidence and high-risk questions route to a specialist for approval.', impact: 'Automation accelerates work without removing accountability.' },
    ],
    livePreviewLabel: 'AI Assistant Preview',
  },
  'saas-analytics-dashboard': {
    intro:
      'Product teams can inspect funnel drop-off, retention cohorts, and campaign attribution in one analytics workspace.',
    scenarios: [
      {
        title: 'Funnel Conversion Analyzer',
        summary: 'Compare drop-off by acquisition channel and date range with side-by-side conversion steps.',
        impact: 'Cut weekly reporting review from 3 hours to 40 minutes.',
      },
      {
        title: 'Cohort Retention Explorer',
        summary: 'Track returning users by first purchase month to identify high-LTV segments quickly.',
        impact: 'Improved retention decisions across growth and product teams.',
      },
      {
        title: 'Export And Share',
        summary: 'Generate CSV/PDF board-ready exports and share secure report links with stakeholders.',
        impact: 'Faster executive alignment and fewer ad hoc data requests.',
      },
    ],
    livePreviewLabel: 'Analytics Workspace Preview',
  },
  'two-sided-marketplace-mvp': {
    intro:
      'The demo walks through consultant onboarding, buyer discovery, booking, and escrow release from one flow.',
    scenarios: [
      {
        title: 'Dual Onboarding Paths',
        summary: 'Separate account setup for consultants and SMB buyers with role-aware onboarding steps.',
        impact: 'Higher completion rates in first-session onboarding.',
      },
      {
        title: 'Booking + Escrow Checkout',
        summary: 'Buyers schedule sessions and lock payment into escrow before project kickoff.',
        impact: 'Reduced payment risk for both sides.',
      },
      {
        title: 'Trust Layer',
        summary: 'Verified reviews and completion badges help buyers make faster hiring decisions.',
        impact: 'Stronger conversion from listing view to booking.',
      },
    ],
    livePreviewLabel: 'Marketplace Flow Preview',
  },
  'healthcare-scheduling-system': {
    intro:
      'Clinic staff and patients can coordinate scheduling, reminders, intake, and billing checkpoints in one HIPAA-ready flow.',
    scenarios: [
      {
        title: 'Provider Availability Engine',
        summary: 'Coordinate 50+ provider schedules with location and timezone-aware time slots.',
        impact: 'Lower scheduling conflicts and faster staff operations.',
      },
      {
        title: 'Patient Self-Booking',
        summary: 'Patients book, reschedule, and complete intake forms from a simple portal.',
        impact: 'Reduced front-desk call volume during peak hours.',
      },
      {
        title: 'Reminder Automation',
        summary: 'Automated SMS/email reminders trigger based on appointment type and urgency.',
        impact: 'Significant reduction in avoidable no-shows.',
      },
    ],
    livePreviewLabel: 'Scheduling Ops Preview',
  },
  'headless-ecommerce-platform': {
    intro:
      'Shoppers browse high-performance storefront pages with merchandised collections and a frictionless checkout handoff.',
    scenarios: [
      {
        title: 'Collection Discovery',
        summary: 'Server-rendered collection pages load fast while supporting merchandising rules from CMS.',
        impact: 'Higher mobile engagement and deeper product exploration.',
      },
      {
        title: 'Product Detail Personalization',
        summary: 'Variant-aware product pages adapt content, pricing, and recommendations in real time.',
        impact: 'Improved add-to-cart rate from qualified sessions.',
      },
      {
        title: 'Optimized Checkout Handoff',
        summary: 'Customers move to checkout with preserved cart and campaign context.',
        impact: 'Reduced funnel abandonment at the payment stage.',
      },
    ],
    livePreviewLabel: 'Storefront Experience Preview',
  },
  'b2b-proposal-automation-saas': {
    intro:
      'Sales teams create polished proposals in minutes, collect signatures, and take first payments without tool switching.',
    scenarios: [
      {
        title: 'Block-Based Proposal Builder',
        summary: 'Drag-and-drop pricing, scope, and timeline blocks using reusable agency templates.',
        impact: 'Proposal creation time dropped from hours to minutes.',
      },
      {
        title: 'Signature + Payment Sequence',
        summary: 'Trigger e-signature and deposit collection as one guided buyer action.',
        impact: 'Faster move from signed deal to cash collection.',
      },
      {
        title: 'CRM Autofill',
        summary: 'Auto-populate contact, company, and package metadata from CRM records.',
        impact: 'Fewer manual errors and more consistent proposals.',
      },
    ],
    livePreviewLabel: 'Proposal Lifecycle Preview',
  },
  'real-time-collaboration-tool': {
    intro:
      'Remote teams manage active work with instant board updates, mentions, and lightweight notification controls.',
    scenarios: [
      {
        title: 'Live Board Sync',
        summary: 'Task movement and status updates appear in real time with optimistic interactions.',
        impact: 'Less context switching and stronger execution visibility.',
      },
      {
        title: 'Mentions + Comments',
        summary: 'Team members mention collaborators, attach files, and keep task context centralized.',
        impact: 'Reduced communication gaps across async teams.',
      },
      {
        title: 'Notification Routing',
        summary: 'Receive digests or instant alerts based on team role and project urgency.',
        impact: 'Important updates surfaced without notification fatigue.',
      },
    ],
    livePreviewLabel: 'Collaboration Board Preview',
  },
}
