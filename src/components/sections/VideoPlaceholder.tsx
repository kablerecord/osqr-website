export function VideoPlaceholder() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See OSQR in Action
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Watch how OSQR transforms the way you think, decide, and build.
          </p>
        </div>

        {/* Video placeholder */}
        <div className="relative mx-auto max-w-4xl aspect-video rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-colors">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Coming soon text */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="inline-flex items-center rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Demo video coming soon
            </span>
          </div>

          {/* Mock UI preview */}
          <div className="absolute inset-6 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-4 opacity-50">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-3/4 bg-slate-700 rounded" />
              <div className="h-4 w-1/2 bg-slate-700 rounded" />
              <div className="h-20 w-full bg-slate-700/50 rounded mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
