'use client'

import { useState } from 'react'
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would integrate with your backend or email service
    console.log('Waitlist submission:', { email, company, role })
    
    setSubmitted(true)
    setLoading(false)
    
    // Reset form after 5 seconds to show success state longer
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setCompany('')
      setRole('')
    }, 5000)
  }

  if (submitted) {
    return (
      <div className="py-24 sm:py-32 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircleIcon className="mx-auto h-16 w-16 text-green-400 mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Thank You!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              You've been added to our waitlist. We'll notify you as soon as Agent Nayam is ready for early access.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <EnvelopeIcon className="mx-auto h-12 w-12 text-purple-400 mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the Waitlist
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Be among the first to experience the future of contract review. Get early access to Agent Nayam 
            and transform your legal workflow.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email address *
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  placeholder="your.email@company.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  placeholder="Your Company Name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-semibold leading-6 text-white">
                Role
              </label>
              <div className="mt-2.5">
                <select
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                >
                  <option value="" className="text-gray-900">Select your role</option>
                  <option value="legal-counsel" className="text-gray-900">Legal Counsel</option>
                  <option value="contract-manager" className="text-gray-900">Contract Manager</option>
                  <option value="compliance-officer" className="text-gray-900">Compliance Officer</option>
                  <option value="general-counsel" className="text-gray-900">General Counsel</option>
                  <option value="paralegal" className="text-gray-900">Paralegal</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className="block w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-purple-500 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          
          <p className="mt-4 text-sm text-gray-400 text-center">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  )
}
