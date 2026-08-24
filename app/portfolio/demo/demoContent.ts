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
    intro: 'FlowForge gives operations teams one place to build AI-powered workflows, connect business tools, monitor every run, and keep people in control of important decisions.',
    scenarios: [
      { title: 'Visual AI Workflow Builder', summary: 'Compose triggers, AI classification, data extraction, conditions, approvals, and connected actions on one canvas.', impact: 'Complex automation stays understandable.' },
      { title: 'Run Monitoring', summary: 'Inspect execution status, timings, task progress, and errors down to the individual workflow node.', impact: 'Teams can diagnose failures quickly.' },
      { title: 'Connected Operations', summary: 'Manage CRM, messaging, productivity, email, and custom webhook integrations from a central workspace.', impact: 'Tools work together in one governed flow.' },
    ],
    livePreviewLabel: 'AI workflow automation product preview',
  },
  'saas-analytics-dashboard': {
    intro:
      'NovaBuild presents a complete business website journey—from first impression and service discovery to project proof, expert content, and a qualified inquiry.',
    scenarios: [
      {
        title: 'Credibility First',
        summary: 'Strong architectural imagery, company positioning, values, and project proof establish trust quickly.',
        impact: 'A confident first impression for prospective clients.',
      },
      {
        title: 'Clear Service Discovery',
        summary: 'Commercial, residential, interior, renovation, management, and sustainability services are easy to scan.',
        impact: 'Visitors find the right capability without friction.',
      },
      {
        title: 'Lead Generation',
        summary: 'Calls, quote actions, contact details, service qualification, and inquiry forms create a direct conversion path.',
        impact: 'Every major page supports the next customer action.',
      },
    ],
    livePreviewLabel: 'Business website customer-journey preview',
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
      'Cognify brings conversational AI, document intelligence, image generation, knowledge tools, automation, and analytics into one consistent SaaS workspace.',
    scenarios: [
      {
        title: 'Unified AI Workspace',
        summary: 'Move between chat, documents, image creation, knowledge, automation, and analytics through one clear product shell.',
        impact: 'Multiple AI capabilities feel like one product.',
      },
      {
        title: 'Focused Creation Tools',
        summary: 'Purpose-built interfaces give each AI workflow the controls and context it needs without unnecessary complexity.',
        impact: 'Users can move from intent to output quickly.',
      },
      {
        title: 'Product-Level Analytics',
        summary: 'Track interactions, analyzed documents, generated images, automation activity, and common use cases centrally.',
        impact: 'Usage and product value remain visible.',
      },
    ],
    livePreviewLabel: 'Cognify AI workspace product preview',
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
