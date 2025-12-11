'use client'

import { useState } from 'react'
import Link from 'next/link'

// For local development, use localhost:3001. In production, use app.osqr.app
const APP_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : 'https://app.osqr.app'

interface Feature {
  text: string
  available: boolean
  isHeader?: boolean
  comingSoon?: boolean
  tooltip?: string
}

interface Tier {
  name: string
  tagline: string
  monthlyPrice: number
  yearlyPrice: number
  futurePrice: number
  features: Feature[]
  cta: string
  isPro: boolean
  badge: string
  tier: string
  limits: {
    docs: number
    queries: number
    maxFile: number
    models: string
  }
}

const tiers: Tier[] = [
  {
    name: 'Pro',
    tagline: 'For high-performers who want elite clarity and multi-model thinking',
    monthlyPrice: 49,
    yearlyPrice: 488,
    futurePrice: 79,
    features: [
      { text: 'Multi-model panel (Claude + GPT-4o)', available: true, tooltip: 'Get perspectives from multiple AI models simultaneously. Each model brings unique strengths to your questions.' },
      { text: 'Quick, Thoughtful & Contemplate modes', available: true, tooltip: 'Quick for fast answers, Thoughtful for deeper analysis, Contemplate for complex strategic thinking with extended reasoning.' },
      { text: 'Full Personal Knowledge Vault', available: true, tooltip: 'Upload your documents, notes, and context. OSQR references your knowledge to give personalized, relevant answers.' },
      { text: 'Unlimited Refine → Fire', available: true, tooltip: 'Iterate on any response until it\'s perfect. Refine your question, get a better answer, then Fire when ready.' },
      { text: '25 documents in vault', available: true, tooltip: 'Store up to 25 documents (PDFs, notes, research) that OSQR can reference when answering your questions.' },
      { text: '100 panel queries/day', available: true, tooltip: 'Ask up to 100 questions per day to the multi-model panel. More than enough for power users.' },
      { text: 'Advanced memory', available: true, tooltip: 'OSQR remembers your preferences, communication style, and past conversations to give increasingly personalized responses.' },
      { text: '90-day transformation guarantee', available: true, tooltip: 'If you don\'t think faster and decide clearer after 90 days, get a full refund. Zero risk.' },
    ],
    cta: 'Get Pro',
    isPro: true,
    badge: 'FOUNDER PRICING',
    tier: 'pro',
    limits: {
      docs: 25,
      queries: 100,
      maxFile: 25,
      models: '2',
    },
  },
  {
    name: 'Master',
    tagline: 'For founders, operators, and elite thinkers who want OS-level intelligence',
    monthlyPrice: 149,
    yearlyPrice: 1484,
    futurePrice: 249,
    features: [
      { text: 'Everything in Pro', available: true, isHeader: true, tooltip: 'All Pro features included, plus the advanced capabilities below.' },
      { text: 'Advanced memory & personalized intelligence', available: true, tooltip: 'Deeper learning about your goals, projects, and thinking patterns. OSQR becomes your personalized thinking partner.' },
      { text: 'Priority fast-lane processing', available: true, tooltip: 'Skip the queue. Your queries get processed first with dedicated resources for faster responses.' },
      { text: '100 documents in vault', available: true, tooltip: '4x the storage. Upload your entire knowledge base—books, research, company docs, personal notes.' },
      { text: 'Weekly automated reviews', available: true, tooltip: 'Get weekly summaries of your thinking patterns, progress on goals, and insights from your conversations.' },
      { text: 'Custom Agent Builder', available: true, comingSoon: true, tooltip: 'Create specialized AI agents tailored to your specific workflows and domains.' },
      { text: 'Council Mode', available: true, comingSoon: true, tooltip: 'Convene a panel of AI experts with different perspectives to debate and advise on complex decisions.' },
      { text: 'VS Code Extension', available: true, comingSoon: true, tooltip: 'Access OSQR directly in your code editor for seamless development assistance.' },
      { text: 'Early access to new models & features', available: true, tooltip: 'Be first to try new AI models and features before they\'re released to everyone else.' },
    ],
    cta: 'Get Master',
    isPro: false,
    badge: 'FOUNDER PRICING',
    tier: 'master',
    limits: {
      docs: 100,
      queries: 1000,
      maxFile: 50,
      models: '4+',
    },
  },
]

// Tooltip component
function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  return (
    <div className="group relative inline-flex items-start w-full">
      {children}
      <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block z-50 w-64 pointer-events-none">
        <div className="bg-neutral-900 border border-neutral-600 text-neutral-200 text-xs rounded-lg px-3 py-2 shadow-xl">
          {text}
          <div className="absolute left-4 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-neutral-600"></div>
        </div>
      </div>
    </div>
  )
}

// Inner Circle Modal Component
function InnerCircleModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/inner-circle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setName('')
    setEmail('')
    setIsSubmitted(false)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-neutral-800 border border-neutral-700 p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          // Success state
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">We&apos;ll be in touch!</h3>
            <p className="text-neutral-400 mb-6">
              Thanks for your interest in OSQR Inner Circle. We&apos;ll reach out soon to discuss how we can help you get unfair advantage.
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-lg bg-neutral-700 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-600 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          // Form state
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center rounded-full bg-purple-500/20 border border-purple-500/30 px-3 py-1 text-xs font-semibold text-purple-300 mb-3">
                <span className="mr-2 h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                Exclusive
              </div>
              <h3 className="text-xl font-bold text-white mb-1">OSQR Inner Circle</h3>
              <p className="text-sm text-neutral-400">
                Enter your details and we&apos;ll reach out to discuss how Inner Circle can give you unfair advantage.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-purple-500 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Information'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// Contact Modal Component
function ContactModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitted(false)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-neutral-800 border border-neutral-700 p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          // Success state
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-neutral-400 mb-6">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-lg bg-neutral-700 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-600 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          // Form state
          <>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-1">Contact Us</h3>
              <p className="text-sm text-neutral-400">
                Have questions about OSQR? We&apos;d love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Your question or message..."
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Don&apos;t Just Ask AI. Start Thinking With One.
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-2">
            One Question. Many Minds. One Clear Answer.
          </p>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
            Built for founders, operators, and high-performers who want elite decision-making and world-class clarity.
          </p>
        </div>

        {/* Founder Edition Banner */}
        <div className="text-center mb-8">
          <div className="inline-block bg-neutral-800/50 border border-neutral-600 rounded-lg px-6 py-3">
            <p className="text-sm font-medium text-white">
              Founder Edition Pricing — Available for the first 1,000 users
            </p>
            <p className="text-xs text-green-400 mt-1">
              Lock in lifetime pricing before rates increase
            </p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-neutral-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-green-500' : 'bg-neutral-600'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-neutral-500'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              2 months free
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 ${
                tier.isPro
                  ? 'bg-gradient-to-b from-cyan-950/40 to-blue-950/40 border-2 border-cyan-500 shadow-lg shadow-cyan-500/20'
                  : 'bg-gradient-to-b from-purple-950/40 to-pink-950/40 border-2 border-purple-500 shadow-lg shadow-purple-500/20'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                  tier.isPro
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {!tier.isPro && (
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                    </svg>
                  )}
                  {tier.badge}
                </span>
              </div>

              <div className="mb-6 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  {tier.isPro && (
                    <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {!tier.isPro && (
                    <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                    </svg>
                  )}
                  <h3 className="text-xl font-bold text-white">
                    OSQR {tier.name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400">
                  {tier.tagline}
                </p>
              </div>

              {/* Pricing with future price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-neutral-400">/{isYearly ? 'year' : 'month'}</span>
                </div>
                {isYearly ? (
                  <>
                    <p className="text-xs text-neutral-500 mt-1">
                      ${Math.round(tier.yearlyPrice / 12)}/mo effective — Save ${tier.monthlyPrice * 12 - tier.yearlyPrice}/year
                    </p>
                    <p className="text-xs font-medium text-green-400 mt-1">
                      2 months free + all future upgrades included
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-neutral-500 mt-1">
                      Early Launch Price — Future price ${tier.futurePrice}/mo
                    </p>
                    <p className="text-xs font-medium text-green-400 mt-1">
                      Founder rate locked in for life
                    </p>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {feature.isHeader ? (
                      feature.tooltip ? (
                        <Tooltip text={feature.tooltip}>
                          <span className={`text-sm font-semibold cursor-help ${
                            tier.isPro ? 'text-cyan-400' : 'text-purple-400'
                          }`}>
                            {feature.text}
                          </span>
                        </Tooltip>
                      ) : (
                        <span className={`text-sm font-semibold ${
                          tier.isPro ? 'text-cyan-400' : 'text-purple-400'
                        }`}>
                          {feature.text}
                        </span>
                      )
                    ) : feature.tooltip ? (
                      <Tooltip text={feature.tooltip}>
                        <div className="flex items-start gap-2 cursor-help">
                          <svg className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            tier.isPro ? 'text-cyan-400' : 'text-purple-400'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-neutral-300">
                            {feature.text}
                            {feature.comingSoon && (
                              <span className="ml-1.5 text-xs text-amber-400">(coming)</span>
                            )}
                          </span>
                        </div>
                      </Tooltip>
                    ) : (
                      <>
                        <svg className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          tier.isPro ? 'text-cyan-400' : 'text-purple-400'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-neutral-300">
                          {feature.text}
                          {feature.comingSoon && (
                            <span className="ml-1.5 text-xs text-amber-400">(coming)</span>
                          )}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/signup?plan=${tier.tier}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-all ${
                  tier.isPro
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-md hover:shadow-lg'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg'
                }`}
              >
                {tier.cta}{isYearly ? ' (Yearly)' : ''}
              </a>

              {/* Usage limits preview */}
              <div className="mt-4 pt-4 border-t border-neutral-700">
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                  <div>
                    <span className="font-medium text-neutral-300">{tier.limits.docs}</span> docs
                  </div>
                  <div>
                    <span className="font-medium text-neutral-300">{tier.limits.queries}</span> queries/day
                  </div>
                  <div>
                    <span className="font-medium text-neutral-300">{tier.limits.maxFile}MB</span> max file
                  </div>
                  <div>
                    <span className="font-medium text-neutral-300">{tier.limits.models}</span> AI models
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inner Circle teaser */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 p-8 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-purple-500/20 border border-purple-500/30 px-4 py-1 text-xs font-semibold text-purple-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                Exclusive
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 mt-2">
              OSQR Inner Circle
            </h3>
            <p className="text-neutral-300 mb-1">
              The elite tier for people who want unfair advantage.
            </p>
            <p className="text-sm text-neutral-400 mb-6">
              Dedicated AI agent tuning • Personal architecture sessions • Exclusive quarterly calls • Model-level customization • Private beta access
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-purple-500 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-600 transition-all"
            >
              Contact Us to Learn More
            </button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 max-w-xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">
              90-Day Capability Transformation Guarantee
            </h3>
            <p className="text-sm text-neutral-400">
              Use OSQR for 90 days. If you don&apos;t think faster, decide clearer, and execute better —
              get all your money back. Zero risk. All leverage.
            </p>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 mb-4">
            Have questions about pricing or features?
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Contact us →
          </button>
        </div>

      </div>

      {/* Inner Circle Modal */}
      <InnerCircleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
