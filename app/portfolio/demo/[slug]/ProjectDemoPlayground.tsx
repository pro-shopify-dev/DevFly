'use client'

import { useState } from 'react'
import type { PortfolioProject } from '../../projects'

type ProjectSlug = PortfolioProject['slug']

type ProjectDemoPlaygroundProps = {
  slug: ProjectSlug
}

export default function ProjectDemoPlayground({ slug }: ProjectDemoPlaygroundProps) {
  const demos: Record<ProjectSlug, JSX.Element> = {
    'ai-knowledge-assistant': <AIKnowledgeDemo />,
    'saas-analytics-dashboard': <AnalyticsDashboardDemo />,
    'two-sided-marketplace-mvp': <MarketplaceDemo />,
    'healthcare-scheduling-system': <HealthcareSchedulingDemo />,
    'headless-ecommerce-platform': <EcommerceDemo />,
    'b2b-proposal-automation-saas': <ProposalAutomationDemo />,
    'real-time-collaboration-tool': <CollaborationDemo />,
  }

  return demos[slug]
}

function AIKnowledgeDemo() {
  return (
    <div className="card p-6 space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-900">Knowledge Assistant</h3>
        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">3 sources verified</span>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        What is our escalation process for priority support requests?
      </div>
      <div className="rounded-lg border border-brand-200 bg-brand-50 p-5">
        <p className="text-sm leading-relaxed text-slate-800">Priority requests are acknowledged within 30 minutes, assigned to the on-call specialist, and escalated to the service lead if unresolved after two hours.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Support policy §4.2', 'On-call handbook', 'SLA guide'].map((source) => (
            <span key={source} className="text-xs font-semibold text-brand-700 bg-white border border-brand-200 px-2.5 py-1 rounded">{source}</span>
          ))}
        </div>
      </div>
      <p className="text-xs text-slate-500">Demo content only. Production answers are permission-aware and routed for review when confidence is low.</p>
    </div>
  )
}

function AnalyticsDashboardDemo() {
  const ranges = ['7d', '30d', '90d'] as const
  const [range, setRange] = useState<(typeof ranges)[number]>('30d')

  const metrics = {
    '7d': [
      { label: 'Revenue', value: '$84.2k' },
      { label: 'Conv. Rate', value: '3.8%' },
      { label: 'New Users', value: '1,320' },
      { label: 'Retention D30', value: '41%' },
    ],
    '30d': [
      { label: 'Revenue', value: '$302.5k' },
      { label: 'Conv. Rate', value: '4.2%' },
      { label: 'New Users', value: '5,842' },
      { label: 'Retention D30', value: '47%' },
    ],
    '90d': [
      { label: 'Revenue', value: '$894.1k' },
      { label: 'Conv. Rate', value: '4.0%' },
      { label: 'New Users', value: '16,402' },
      { label: 'Retention D30', value: '45%' },
    ],
  }

  return (
    <div className="card p-6 space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-900">Analytics Workspace</h3>
        <div className="flex gap-2">
          {ranges.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRange(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                range === item
                  ? 'bg-brand-600 border-brand-500 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics[range].map((metric) => (
          <div key={metric.label} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
            <p className="text-xs text-slate-600">{metric.label}</p>
            <p className="text-lg font-bold text-slate-900 mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <FunnelCard
          steps={[
            { step: 'Landing View', value: 100 },
            { step: 'Product View', value: 74 },
            { step: 'Checkout Start', value: 41 },
            { step: 'Purchase', value: 26 },
          ]}
        />
        <RetentionCard values={[52, 48, 47, 45, 44, 42, 41]} />
      </div>
    </div>
  )
}

function FunnelCard({ steps }: { steps: Array<{ step: string; value: number }> }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
      <p className="text-sm font-semibold text-slate-900 mb-3">Funnel Breakdown</p>
      <div className="space-y-2">
        {steps.map((item) => (
          <div key={item.step}>
            <div className="flex items-center justify-between text-xs text-slate-700 mb-1">
              <span>{item.step}</span>
              <span>{item.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-white overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand-500 to-accent-500" style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RetentionCard({ values }: { values: number[] }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
      <p className="text-sm font-semibold text-slate-900 mb-3">7-Week Cohort Retention</p>
      <div className="grid grid-cols-7 gap-2 items-end h-36">
        {values.map((value, idx) => (
          <div key={`${value}-${idx}`} className="flex flex-col items-center gap-2">
            <div className="w-full rounded-md bg-brand-600/70" style={{ height: `${value}%` }} />
            <span className="text-[10px] text-slate-600">W{idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketplaceDemo() {
  const categories = ['All', 'Product Design', 'Growth', 'Engineering'] as const
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<string | null>(null)

  const consultants = [
    { name: 'Maya K', category: 'Product Design', rate: '$120/h', score: '4.9' },
    { name: 'Arjun P', category: 'Growth', rate: '$110/h', score: '4.8' },
    { name: 'Nina S', category: 'Engineering', rate: '$140/h', score: '5.0' },
    { name: 'David L', category: 'Product Design', rate: '$95/h', score: '4.7' },
  ]

  const visible = consultants.filter((item) => category === 'All' || item.category === category)

  return (
    <div className="card p-6 space-y-5">
      <h3 className="text-xl font-bold text-slate-900">Marketplace Booking Flow</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
              category === item
                ? 'bg-brand-600 border-brand-500 text-white'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
        <div className="space-y-3">
          {visible.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelected(item.name)}
              className={`w-full text-left rounded-xl border p-4 transition-colors ${
                selected === item.name ? 'border-brand-500 bg-brand-600/10' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-600 mt-1">{item.category}</p>
              <div className="text-xs text-slate-700 mt-2 flex gap-4">
                <span>{item.rate}</span>
                <span>{item.score} rating</span>
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-900">Escrow Checkout</p>
          <Field label="Consultant" value={selected ?? 'Select consultant'} />
          <Field label="Session Package" value="Strategy Sprint - 3 sessions" />
          <Field label="Total" value="$1,050" />
          <button type="button" className="btn-primary text-sm w-full justify-center" disabled={!selected}>
            Reserve And Fund Escrow
          </button>
        </div>
      </div>
    </div>
  )
}

function HealthcareSchedulingDemo() {
  const slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30']
  const [selectedSlot, setSelectedSlot] = useState('10:00')
  const [reminder, setReminder] = useState(true)

  return (
    <div className="card p-6 space-y-5">
      <h3 className="text-xl font-bold text-slate-900">Clinic Scheduling Center</h3>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900 mb-3">Dr. Patel - Cardiology</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                className={`text-xs rounded-md py-2 border ${
                  selectedSlot === slot
                    ? 'bg-brand-600 border-brand-500 text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-900">Patient Intake</p>
          <Field label="Patient" value="Jordan Smith" />
          <Field label="Appointment" value={`Apr 08, ${selectedSlot}`} />
          <label className="flex items-center gap-2 text-xs text-slate-700">
            <input
              type="checkbox"
              checked={reminder}
              onChange={(e) => setReminder(e.target.checked)}
              className="accent-brand-500"
            />
            Send SMS reminder 24h before appointment
          </label>
          <button type="button" className="btn-primary text-sm w-full justify-center">
            Confirm Visit
          </button>
        </div>
      </div>
    </div>
  )
}

function EcommerceDemo() {
  const products = [
    { id: 'p1', name: 'Performance Hoodie', price: 64 },
    { id: 'p2', name: 'Trail Sneakers', price: 110 },
    { id: 'p3', name: 'Everyday Tech Tee', price: 38 },
    { id: 'p4', name: 'Ultralight Cap', price: 26 },
  ]
  const [cart, setCart] = useState<Record<string, number>>({})

  const total = products.reduce((sum, product) => {
    const qty = cart[product.id] ?? 0
    return sum + qty * product.price
  }, 0)

  return (
    <div className="card p-6 space-y-5">
      <h3 className="text-xl font-bold text-slate-900">Headless Storefront Demo</h3>
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4">
        <div className="grid sm:grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{product.name}</p>
              <p className="text-xs text-slate-600 mt-1">Fast-loading PDP variant</p>
              <p className="text-sm text-accent-600 mt-3">${product.price}</p>
              <button
                type="button"
                onClick={() => setCart((prev) => ({ ...prev, [product.id]: (prev[product.id] ?? 0) + 1 }))}
                className="btn-secondary text-xs mt-3 px-3 py-2"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-900">Cart Snapshot</p>
          {products.map((product) => {
            const qty = cart[product.id] ?? 0
            if (!qty) {
              return null
            }

            return (
              <div key={product.id} className="flex items-center justify-between text-xs text-slate-700">
                <span>{product.name} x{qty}</span>
                <span>${qty * product.price}</span>
              </div>
            )
          })}
          <div className="h-px bg-slate-200" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700">Estimated Total</span>
            <span className="text-slate-900 font-semibold">${total}</span>
          </div>
          <button type="button" className="btn-primary text-sm w-full justify-center" disabled={total === 0}>
            Continue To Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

function ProposalAutomationDemo() {
  const blocks = ['Executive Summary', 'Scope', 'Timeline', 'Pricing']
  const [included, setIncluded] = useState<Record<string, boolean>>({
    'Executive Summary': true,
    Scope: true,
    Timeline: true,
    Pricing: true,
  })

  const pricing = [
    { tier: 'Starter', amount: 4500 },
    { tier: 'Growth', amount: 7900 },
    { tier: 'Scale', amount: 12000 },
  ]
  const [selectedTier, setSelectedTier] = useState('Growth')

  return (
    <div className="card p-6 space-y-5">
      <h3 className="text-xl font-bold text-slate-900">Proposal Automation Workspace</h3>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-900">Document Blocks</p>
          {blocks.map((block) => (
            <label key={block} className="flex items-center justify-between text-sm text-slate-700 rounded-lg border border-slate-200 px-3 py-2">
              <span>{block}</span>
              <input
                type="checkbox"
                checked={included[block]}
                onChange={(e) => setIncluded((prev) => ({ ...prev, [block]: e.target.checked }))}
                className="accent-brand-500"
              />
            </label>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <p className="text-sm font-semibold text-slate-900">Plan Selector</p>
          {pricing.map((plan) => (
            <button
              key={plan.tier}
              type="button"
              onClick={() => setSelectedTier(plan.tier)}
              className={`w-full text-left rounded-lg border px-3 py-2 text-sm ${
                selectedTier === plan.tier
                  ? 'border-brand-500 bg-brand-600/10 text-slate-900'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              {plan.tier} - ${plan.amount}
            </button>
          ))}
          <button type="button" className="btn-primary text-sm w-full justify-center">
            Send For E-Sign + Deposit
          </button>
        </div>
      </div>
    </div>
  )
}

function CollaborationDemo() {
  const [todo, setTodo] = useState(['Draft launch plan', 'Review QA notes'])
  const [doing, setDoing] = useState(['Build live mention panel'])
  const [done, setDone] = useState(['Ship onboarding checklist'])

  const moveFirst = (from: 'todo' | 'doing', to: 'doing' | 'done') => {
    if (from === 'todo') {
      if (!todo.length) return
      const item = todo[0]
      setTodo((prev) => prev.slice(1))
      if (to === 'doing') setDoing((prev) => [...prev, item])
      if (to === 'done') setDone((prev) => [...prev, item])
      return
    }

    if (!doing.length) return
    const item = doing[0]
    setDoing((prev) => prev.slice(1))
    if (to === 'done') setDone((prev) => [...prev, item])
  }

  return (
    <div className="card p-6 space-y-5">
      <h3 className="text-xl font-bold text-slate-900">Real-Time Team Board</h3>
      <div className="grid md:grid-cols-3 gap-3">
        <KanbanColumn title="Todo" items={todo} />
        <KanbanColumn title="In Progress" items={doing} />
        <KanbanColumn title="Done" items={done} />
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-secondary text-xs px-3 py-2" onClick={() => moveFirst('todo', 'doing')}>
          Move First Todo To In Progress
        </button>
        <button type="button" className="btn-primary text-xs px-3 py-2" onClick={() => moveFirst('doing', 'done')}>
          Complete First In Progress Task
        </button>
      </div>
    </div>
  )
}

function KanbanColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 min-h-36">
      <p className="text-xs uppercase tracking-wide text-slate-600 mb-2">{title}</p>
      <div className="space-y-2">
        {items.length ? (
          items.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-800">
              {item}
            </div>
          ))
        ) : (
          <p className="text-xs text-slate-500">No tasks in this column.</p>
        )}
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2">
      <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-xs text-slate-800 mt-1">{value}</p>
    </div>
  )
}
