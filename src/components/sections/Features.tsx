const features = [
  {
    icon: '⚡',
    title: 'Three Thinking Modes',
    description: 'Quick for fast answers. Thoughtful for deeper analysis. Contemplate for complex decisions. Choose how deep you want to go.',
    highlight: 'Quick • Thoughtful • Contemplate',
  },
  {
    icon: '🎯',
    title: 'Refine → Fire',
    description: 'Most people ask vague questions and get vague answers. OSQR helps you sharpen your question first, then fires it to the AI panel.',
    highlight: 'Better questions = Better answers',
  },
  {
    icon: '🧠',
    title: 'Multi-Model Panel',
    description: 'Why settle for one AI when you can have a panel? Claude, GPT-4, and more work together to give you synthesized, balanced insights.',
    highlight: 'Claude + GPT-4 + Synthesis',
  },
  {
    icon: '📚',
    title: 'Personal Knowledge Vault',
    description: 'Upload your docs, notes, and files. OSQR indexes everything and uses it to give you answers grounded in YOUR context.',
    highlight: 'Your knowledge, always accessible',
  },
  {
    icon: '👤',
    title: 'Light Profile Builder',
    description: 'A few quick questions and OSQR knows your goals, constraints, and context. Every response is personalized from Day 1.',
    highlight: 'Personalized from the start',
  },
  {
    icon: '💾',
    title: 'Chat Memory',
    description: 'OSQR remembers your conversations and builds context over time. No more repeating yourself or starting from scratch.',
    highlight: 'Context that compounds',
  },
  {
    icon: '✅',
    title: 'Master Summary Checklist',
    description: 'Your goals, projects, and ideas organized in one place. OSQR keeps track so you can focus on execution.',
    highlight: 'Goals • Projects • Ideas',
  },
  {
    icon: '🚀',
    title: 'Upgrade Tiers',
    description: 'Start free, upgrade when ready. From Lite to Pro to Master — each tier unlocks more capability and deeper intelligence.',
    highlight: 'Lite → Pro → Master',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to Think Better
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            OSQR isn&apos;t just another AI chat. It&apos;s an operating system for capability — designed to make you smarter, faster, and more effective.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-4">
                {feature.description}
              </p>

              {/* Highlight */}
              <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
