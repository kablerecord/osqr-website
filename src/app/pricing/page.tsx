import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - OSQR',
  description: 'Choose your OSQR plan. Start free, upgrade when ready.',
}

const tiers = [
  {
    name: 'Lite',
    price: 0,
    description: 'Get started with OSQR basics',
    features: [
      '5 documents in Knowledge Vault',
      '10 panel queries per day',
      '2 AI models (Claude + GPT)',
      'Basic chat memory',
      'Light profile builder',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Full power for serious builders',
    features: [
      '25 documents in Knowledge Vault',
      '100 panel queries per day',
      '4 AI models (full panel)',
      'Full chat memory',
      'Master Summary Checklist',
      'Priority support',
    ],
    cta: 'Get Pro',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Master',
    price: 99,
    description: 'For teams and power users',
    features: [
      '100 documents in Knowledge Vault',
      'Unlimited panel queries',
      'All AI models + early access',
      'Advanced memory & patterns',
      'Weekly automated reviews',
      'API access (coming soon)',
      '1-on-1 onboarding call',
    ],
    cta: 'Go Master',
    highlight: false,
    badge: 'Coming Soon',
  },
]

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-900 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-blue-400 shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 border border-slate-700'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${
                    tier.highlight
                      ? 'bg-white text-blue-600'
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className={`text-xl font-semibold mb-2 ${
                tier.highlight ? 'text-white' : 'text-white'
              }`}>
                {tier.name}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-6 ${
                tier.highlight ? 'text-blue-100' : 'text-slate-400'
              }`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  tier.highlight ? 'text-white' : 'text-white'
                }`}>
                  ${tier.price}
                </span>
                <span className={`text-sm ${
                  tier.highlight ? 'text-blue-100' : 'text-slate-400'
                }`}>
                  /month
                </span>
              </div>

              {/* CTA */}
              <a
                href="/#waitlist"
                className={`block w-full text-center rounded-lg py-3 px-4 font-semibold transition-all ${
                  tier.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-4">
            Have questions about pricing?
          </p>
          <a
            href="mailto:info@fourthgenformula.com"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Contact us →
          </a>
        </div>
      </div>
    </div>
  )
}
