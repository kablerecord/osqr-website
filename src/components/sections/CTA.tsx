'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    window.location.href = `mailto:info@fourthgenformula.com?subject=OSQR Waitlist&body=Please add me to the OSQR waitlist. My email is: ${email}`
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Think Better?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Join the waitlist and be the first to experience OSQR when we launch. Early access members get special pricing and lifetime benefits.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>

            {status === 'success' && (
              <p className="mt-3 text-sm text-white">Thanks! We&apos;ll be in touch soon.</p>
            )}

            <p className="mt-4 text-sm text-blue-200">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
