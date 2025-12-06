'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // For now, just open mailto - will be replaced with proper form later
    window.location.href = `mailto:info@fourthgenformula.com?subject=OSQR Waitlist&body=Please add me to the OSQR waitlist. My email is: ${email}`

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-8">
            <span className="mr-2">🧠</span>
            Now in Development — Join the Waitlist
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Stop Asking AI Questions.
            <br />
            <span className="gradient-text">Start Asking Better Ones.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-400 mb-10">
            OSQR is the AI operating system that helps you <span className="text-white font-medium">think sharper</span>, <span className="text-white font-medium">decide faster</span>, and <span className="text-white font-medium">build capability</span> that compounds. Multiple AI models. One synthesized answer. Your personal knowledge vault.
          </p>

          {/* Waitlist Form */}
          <div id="waitlist" className="mx-auto max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <Button type="submit" size="lg" disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
            {status === 'success' && (
              <p className="mt-3 text-sm text-green-400">Thanks! We&apos;ll be in touch soon.</p>
            )}
            <p className="mt-4 text-xs text-slate-500">
              Join 100+ builders waiting for early access. No spam, ever.
            </p>
          </div>

          {/* Social proof placeholder */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Multi-model AI panel</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Personal knowledge vault</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Refine → Fire system</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
