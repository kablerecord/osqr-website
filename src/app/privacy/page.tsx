import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - OSQR',
  description: 'Privacy policy for OSQR - Your AI Operating System for Capability. Your data belongs to you.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Privacy Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Data Belongs to You
          </h1>
          <p className="text-slate-400">
            Last updated: December 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Philosophy - NEW SECTION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">00</span>
              Our Privacy Philosophy
            </h2>
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/50 rounded-2xl p-8 border border-blue-700/50 space-y-4">
              <p className="text-xl text-white font-semibold">
                Privacy is capability.
              </p>
              <p className="text-slate-300">
                If you don&apos;t trust your AI, you can&apos;t use it fully. You&apos;ll hold back your real questions, your sensitive documents, your actual challenges. And an AI that only sees half the picture can only give you half the value.
              </p>
              <p className="text-slate-300">
                OSQR is built on a radical premise: <strong className="text-white">everything you upload, write, think, or store belongs solely to you.</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <p className="text-white font-semibold text-sm">Never Sold</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🚫</div>
                  <p className="text-white font-semibold text-sm">Never Shared</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <p className="text-white font-semibold text-sm">Never Used for Training</p>
                </div>
              </div>
            </div>
          </section>

          {/* No Model Training - NEW SECTION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">01</span>
              We Never Train Models on Your Data
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                Your conversations, documents, and insights are yours alone. We make an explicit commitment:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Your data is <strong className="text-white">never used to train AI models</strong> — not ours, not anyone&apos;s</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Your documents are <strong className="text-white">never fed into machine learning pipelines</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Your conversations are <strong className="text-white">never analyzed for product improvement</strong> without explicit consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>We use API providers (OpenAI, Anthropic) with <strong className="text-white">data processing agreements that prohibit training</strong></span>
                </li>
              </ul>
            </div>
          </section>

          {/* No Human Access - NEW SECTION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">02</span>
              No Human Access — Ever
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                No OSQR employee, contractor, or support agent can view your:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✕</span>
                  <span>Documents in your Knowledge Vault</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✕</span>
                  <span>Conversations and chat history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✕</span>
                  <span>Embeddings or vector data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✕</span>
                  <span>Memory or profile information</span>
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                Our systems are designed so that human access to user content is architecturally impossible, not just policy-restricted.
              </p>
            </div>
          </section>

          {/* What We Actually Collect - UPDATED */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">03</span>
              Minimal Data Collection
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-6">
              <p className="text-slate-300">
                We practice extreme data minimization. Here&apos;s exactly what we collect:
              </p>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Account Basics</h3>
                <p className="text-slate-300">
                  Email address, encrypted password, and subscription plan. That&apos;s it. No phone number, no address, no social profiles, no &quot;shadow data.&quot;
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Your Content (Stored for You)</h3>
                <p className="text-slate-300">
                  Documents you upload and conversations you have are stored solely to power YOUR experience. They exist to serve you, not us.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Limited Usage Metrics</h3>
                <p className="text-slate-300">
                  We track aggregate usage (queries per day, feature usage) to ensure service quality. We do NOT track what you ask, what you upload, or what you think.
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 mt-4">
                <p className="text-slate-400 text-sm">
                  <strong className="text-white">No tracking pixels.</strong> No advertising IDs. No cross-site tracking. No selling to data brokers. No &quot;partners&quot; who get access to your information.
                </p>
              </div>
            </div>
          </section>

          {/* AI Request Transparency - NEW SECTION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">04</span>
              AI Request Transparency
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-4">
              <p className="text-slate-300">
                When OSQR sends your question to AI providers (OpenAI, Anthropic), here&apos;s exactly what happens:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Minimum necessary text</strong> — Only the exact text required to answer your question is sent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Documents stay local</strong> — Your vault documents are never sent to the model unless you explicitly ask a question about them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">No background transmission</strong> — We don&apos;t send data to AI providers for analysis, training, or any purpose other than answering your specific query</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">API-only access</strong> — We use business API tiers that contractually prohibit data retention and training</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Embeddings - NEW SECTION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">05</span>
              Embeddings Are Irreversible
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                When you upload documents, we create &quot;embeddings&quot; — mathematical representations that let us search your content semantically. Here&apos;s what you should know:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Embeddings are <strong className="text-white">one-way transformations</strong> — they cannot be reverse-engineered back into your original text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Even OSQR staff cannot reconstruct your documents from embeddings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Embeddings are stored separately from your original files</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>When you delete a document, both the file AND its embeddings are removed</span>
                </li>
              </ul>
            </div>
          </section>

          {/* The Burn It Button - NEW SECTION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">06</span>
              The Burn It Button (Instant Data Deletion)
            </h2>
            <div className="bg-gradient-to-br from-red-900/30 to-slate-800/50 rounded-2xl p-8 border border-red-700/30 space-y-4">
              <p className="text-slate-300">
                OSQR gives you a nuclear option. The <strong className="text-white">&quot;Burn It&quot;</strong> button provides immediate, irreversible deletion of all your data.
              </p>
              <p className="text-lg text-white font-semibold">
                When you press it, we permanently delete:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">🔥</span>
                  <span>All documents in your Knowledge Vault</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">🔥</span>
                  <span>All vector embeddings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">🔥</span>
                  <span>All chat history and conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">🔥</span>
                  <span>All memory and profile data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">🔥</span>
                  <span>Your account and all associated information</span>
                </li>
              </ul>
              <div className="bg-slate-900/50 rounded-lg p-4 mt-4">
                <p className="text-white font-semibold mb-2">This deletion is:</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• <strong className="text-white">Immediate</strong> — Happens within seconds</li>
                  <li>• <strong className="text-white">Irreversible</strong> — Cannot be undone by you OR by OSQR</li>
                  <li>• <strong className="text-white">Complete</strong> — No shadow copies, no logs, no &quot;soft deletes&quot;</li>
                  <li>• <strong className="text-white">Verified</strong> — Data is erased from primary storage AND vector indexes</li>
                </ul>
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Backups containing your data are wiped on the next rotation cycle (within 7 days). We retain nothing.
              </p>
            </div>
          </section>

          {/* Data Protection - UPDATED */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">07</span>
              Security Measures
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 space-y-4">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>End-to-end encryption for all data in transit (TLS 1.3)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Secure password hashing (bcrypt)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Isolated database instances per user tier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                  <span>SOC 2 Type II compliance (in progress)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights - UPDATED */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">08</span>
              Your Rights
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">You have complete control over your data:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Access</strong> — Download everything we have about you at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Correct</strong> — Update or fix any information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Delete</strong> — Remove individual items or use Burn It for everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Export</strong> — Get your data in portable formats (JSON, PDF)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 flex-shrink-0">→</span>
                  <span><strong className="text-white">Restrict</strong> — Limit how your data is processed</span>
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                Exercise any right directly in-app or contact{' '}
                <a href="mailto:privacy@osqr.app" className="text-blue-400 hover:text-blue-300">
                  privacy@osqr.app
                </a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">09</span>
              Contact Us
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                Questions about privacy? We&apos;re here to help:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>
                  Privacy inquiries:{' '}
                  <a href="mailto:privacy@osqr.app" className="text-blue-400 hover:text-blue-300">
                    privacy@osqr.app
                  </a>
                </li>
                <li>
                  General questions:{' '}
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
                We may update this Privacy Policy as OSQR evolves. Any changes will be posted here with an updated date. Material changes will be communicated via email.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
