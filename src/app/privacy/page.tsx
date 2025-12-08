import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - OSQR',
  description: 'Privacy policy for OSQR - Your AI Operating System for Capability.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Last updated: December 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300">
                At OSQR, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our AI operating system.
              </p>
            </div>
          </section>

          {/* Data We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">01</span>
              Information We Collect
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Account Information</h3>
                <p className="text-slate-300">
                  When you create an account, we collect your name, email address, and password (encrypted). This allows us to provide you with a personalized experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Your Content</h3>
                <p className="text-slate-300">
                  Documents you upload, questions you ask, and your conversation history are stored to power your Personal Knowledge Vault and provide contextual responses.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                <p className="text-slate-300">
                  We collect information about how you interact with OSQR to improve our service, including feature usage, response times, and error logs.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">02</span>
              How We Use Your Information
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Provide personalized AI responses based on your context and history
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Power your Personal Knowledge Vault with semantic search
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Improve OSQR&apos;s capabilities and user experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Send you important updates about your account and our service
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Ensure the security and integrity of our platform
                </li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">03</span>
              How We Protect Your Data
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-4">
              <p className="text-slate-300">
                Your data security is our priority. We implement industry-standard security measures:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  End-to-end encryption for data in transit (TLS/SSL)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Encrypted database storage for sensitive information
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Regular security audits and vulnerability assessments
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Secure authentication with password hashing
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Limited employee access to user data
                </li>
              </ul>
            </div>
          </section>

          {/* AI & Third Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">04</span>
              AI Models & Third Parties
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-4">
              <p className="text-slate-300">
                OSQR uses multiple AI models to provide you with the best responses:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">OpenAI (GPT-4)</strong> - For creative and analytical responses
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">Anthropic (Claude)</strong> - For nuanced reasoning and analysis
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                When your queries are processed by these AI providers, they are subject to their respective privacy policies. We minimize data shared with third parties to only what&apos;s necessary for generating responses.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">05</span>
              Your Rights
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">You have the right to:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">Access</strong> your personal data we hold
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">Correct</strong> inaccurate information
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">Delete</strong> your account and associated data
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">Export</strong> your data in a portable format
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <strong className="text-white">Opt out</strong> of non-essential communications
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@osqr.app" className="text-blue-400 hover:text-blue-300">
                  privacy@osqr.app
                </a>
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">06</span>
              Data Retention
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300">
                We retain your data for as long as your account is active or as needed to provide you services. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">07</span>
              Contact Us
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>
                  Email:{' '}
                  <a href="mailto:privacy@osqr.app" className="text-blue-400 hover:text-blue-300">
                    privacy@osqr.app
                  </a>
                </li>
                <li>
                  General inquiries:{' '}
                  <a href="mailto:info@osqr.app" className="text-blue-400 hover:text-blue-300">
                    info@osqr.app
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Updates */}
          <section>
            <div className="bg-blue-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Policy Updates</h3>
              <p className="text-slate-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
