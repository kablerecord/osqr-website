import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - OSQR',
  description: 'Learn about OSQR and the vision behind the AI operating system for capability.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            About OSQR
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Story Behind OSQR
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">01</span>
              The Problem
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                Everyone has access to AI now. ChatGPT, Claude, Gemini — they&apos;re everywhere. But here&apos;s the uncomfortable truth:
              </p>
              <p className="text-white text-xl font-semibold mb-4">
                Most people ask vague questions and get vague answers.
              </p>
              <p className="text-slate-300">
                They use AI as a fancy search engine instead of a thinking partner. They get answers, but they don&apos;t get <em>smarter</em>. The AI doesn&apos;t know them. Doesn&apos;t remember them. Doesn&apos;t challenge them.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">02</span>
              The Vision
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-4">
                OSQR is built on a simple premise:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
                <p className="text-white text-xl font-semibold">
                  &quot;The quality of your questions determines the quality of your life.&quot;
                </p>
              </blockquote>
              <p className="text-slate-300 mb-4">
                We&apos;re not building another chatbot. We&apos;re building an <strong className="text-white">Operating System for Capability</strong> — a system that helps you:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Ask better questions (Refine → Fire)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Get synthesized insights from multiple AI models
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Build a personal knowledge vault that grows with you
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  Develop capability that compounds over time
                </li>
              </ul>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">03</span>
              The Philosophy
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-6">
                OSQR is grounded in a core belief: <strong className="text-white">Identity → Capability → Output → Legacy</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Identity</h4>
                  <p className="text-sm text-slate-400">Who you believe you are</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Capability</h4>
                  <p className="text-sm text-slate-400">What you can consistently do</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Output</h4>
                  <p className="text-sm text-slate-400">The work you produce</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Legacy</h4>
                  <p className="text-sm text-slate-400">What remains after you</p>
                </div>
              </div>
              <p className="text-slate-300 mt-6">
                OSQR&apos;s job is to help you upgrade your identity, translate it into capability, turn capability into output, and build something that lasts.
              </p>
            </div>
          </section>

          {/* Builder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">04</span>
              The Builder
            </h2>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                    KR
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Kable Record</h3>
                  <p className="text-blue-400 text-sm mb-4">Creator of OSQR</p>
                  <p className="text-slate-300 mb-4">
                    I built OSQR because I believe everyone deserves an AI that truly knows them — not just another chatbot that forgets you exist the moment the conversation ends.
                  </p>
                  <p className="text-slate-300">
                    Your ideas, your context, your journey... they matter. OSQR is designed to remember, to grow with you, and to make you more capable every day.
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://kablerecord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      kablerecord.com →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Think Better?
              </h3>
              <p className="text-blue-100 mb-6">
                Join the waitlist and be among the first to experience OSQR.
              </p>
              <a
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
