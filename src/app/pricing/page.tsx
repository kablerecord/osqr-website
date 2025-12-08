'use client'

import { useState } from 'react'

// For local development, use localhost:3001. In production, use app.osqr.app
const APP_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : 'https://app.osqr.app'

interface Feature {
  text: string
  available: boolean
  isHeader?: boolean
  comingSoon?: boolean
}

interface Tier {
  name: string
  tagline: string
  monthlyPrice: number
  yearlyPrice: number
  yearlySavings: string
  features: Feature[]
  cta: string
  highlight: boolean
  badge?: string
  tier: string
}

const tiers: Tier[] = [
  {
    name: 'Lite',
    tagline: 'A taste of a second brain — without the full power.',
    monthlyPrice: 19,
    yearlyPrice: 168,
    yearlySavings: 'Save $60/yr (2 months free)',
    features: [
      { text: 'Quick Mode only (no panel)', available: true },
      { text: '2 AI models (Llama 3 + GPT-4 mini)', available: true },
      { text: '5 daily panel credits (mini debates)', available: true },
      { text: '10 documents in Knowledge Vault', available: true },
      { text: 'Remembers last 3 interactions', available: true },
      { text: 'Basic preferences', available: true },
      { text: 'Basic MSC view (read-only)', available: true },
    ],
    cta: 'Start 7-Day Free Trial',
    highlight: false,
    tier: 'lite',
  },
  {
    name: 'Pro',
    tagline: 'Your fully indexed second brain.',
    monthlyPrice: 49,
    yearlyPrice: 399,
    yearlySavings: 'Save $189/yr + 90-Day Guarantee',
    features: [
      { text: 'Everything in Lite', available: true, isHeader: true },
      { text: 'All 4 AI modes (Quick, Thoughtful, Contemplate, Refine→Fire)', available: true },
      { text: 'Full multi-model panel (Claude, GPT-4, Gemini, Grok)', available: true },
      { text: 'Unlimited daily panel queries', available: true },
      { text: '100 documents in Knowledge Vault', available: true },
      { text: 'Full chat memory', available: true },
      { text: 'Weekly Automated Review', available: true },
      { text: 'Cross-document intelligence', available: true },
      { text: 'Master Summary Checklist (MSC)', available: true },
      { text: 'Priority support', available: true },
      { text: '"See What Another AI Thinks" (Quick Mode enhancer)', available: true },
    ],
    cta: 'Get Started',
    highlight: true,
    badge: 'Most Popular',
    tier: 'pro',
  },
  {
    name: 'Master',
    tagline: 'Your personal team of AI agents.',
    monthlyPrice: 149,
    yearlyPrice: 1299,
    yearlySavings: 'Save $489/yr',
    features: [
      { text: 'Everything in Pro', available: true, isHeader: true },
      { text: 'Unlimited Knowledge Vault', available: true },
      { text: 'Custom AI agent builder', available: true, comingSoon: true },
      { text: 'Team seats (up to 3 included)', available: true },
      { text: 'High-priority processing', available: true },
      { text: 'Early access to new models', available: true },
      { text: 'Advanced memory & pattern recognition', available: true },
      { text: 'Monthly Capability Ladder Level-Up Report', available: true },
      { text: 'API access', available: true, comingSoon: true },
      { text: '1-on-1 onboarding call', available: true },
      { text: 'Background automations', available: true, comingSoon: true },
      { text: 'Project Autopilot', available: true, comingSoon: true },
    ],
    cta: 'Get Started',
    highlight: false,
    tier: 'master',
  },
]

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
      <div className="relative w-full max-w-md rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
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
            <p className="text-slate-400 mb-6">
              Thanks for your interest in OSQR Inner Circle. We&apos;ll reach out soon to discuss how we can help you get unfair advantage.
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-600 transition-all"
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
              <p className="text-sm text-slate-400">
                Enter your details and we&apos;ll reach out to discuss how Inner Circle can give you unfair advantage.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="pt-32 pb-20 bg-slate-900 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Try Lite free for 7 days. Cancel anytime.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative mx-4 h-7 w-14 rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-blue-500 transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
              Save up to 27%
            </span>
          )}
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-blue-400 shadow-lg shadow-blue-500/25 lg:scale-105 lg:-my-4'
                  : 'bg-slate-800/50 border border-slate-700'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-white text-blue-600">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-2xl font-bold text-white mb-1">
                OSQR {tier.name}
              </h3>

              {/* Tagline */}
              <p className={`text-sm mb-6 ${
                tier.highlight ? 'text-blue-100' : 'text-slate-400'
              }`}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">
                  ${isYearly ? Math.round(tier.yearlyPrice / 12) : tier.monthlyPrice}
                </span>
                <span className={`text-sm ${
                  tier.highlight ? 'text-blue-100' : 'text-slate-400'
                }`}>
                  /month
                </span>
              </div>

              {/* Yearly savings */}
              {isYearly && (
                <p className={`text-xs mb-4 ${
                  tier.highlight ? 'text-blue-200' : 'text-green-400'
                }`}>
                  ${tier.yearlyPrice}/yr • {tier.yearlySavings}
                </p>
              )}
              {!isYearly && <div className="h-5 mb-4" />}

              {/* CTA */}
              <a
                href={`${APP_URL}/signup?plan=${tier.tier}${isYearly ? '&billing=yearly' : ''}`}
                className={`block w-full text-center rounded-lg py-3 px-4 font-semibold transition-all ${
                  tier.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <ul className="mt-8 space-y-3 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.isHeader ? (
                      <span className={`text-sm font-semibold ${
                        tier.highlight ? 'text-white' : 'text-blue-400'
                      }`}>
                        {feature.text}
                      </span>
                    ) : (
                      <>
                        <svg
                          className={`h-5 w-5 mr-3 flex-shrink-0 ${
                            tier.highlight ? 'text-blue-200' : 'text-blue-400'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={`text-sm ${
                          tier.highlight ? 'text-blue-100' : 'text-slate-300'
                        }`}>
                          {feature.text}
                          {feature.comingSoon && (
                            <span className="ml-1.5 text-xs text-amber-400">(coming soon)</span>
                          )}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inner Circle teaser */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 p-8 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-purple-500/20 border border-purple-500/30 px-4 py-1 text-xs font-semibold text-purple-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                Exclusive
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 mt-2">
              OSQR Inner Circle
            </h3>
            <p className="text-slate-300 mb-1">
              The elite tier for people who want unfair advantage.
            </p>
            <p className="text-sm text-slate-400 mb-6">
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

        {/* 90-Day Guarantee */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">90-Day Transformation Guarantee</h3>
          <p className="text-slate-400">
            If you don&apos;t feel measurably sharper after 90 days of using OSQR Pro or Master,
            we&apos;ll refund your subscription. No questions asked.
          </p>
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Have questions about pricing or features?
          </p>
          <a
            href="mailto:info@osqr.app"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Contact us →
          </a>
        </div>
      </div>

      {/* Inner Circle Modal */}
      <InnerCircleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
