'use client'

import { useState } from 'react'
import { ChevronRightIcon, DocumentCheckIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [email, setEmail] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Handle email submission
    console.log('Email submitted:', email)
    // You can integrate with your backend or email service here
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        {/* Badge */}
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 mb-8">
            <ShieldCheckIcon className="h-4 w-4 mr-2" />
            AI-Powered Contract Intelligence
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Revolutionize
            <span className="gradient-text block">Contract Review</span>
            with AI
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            Built an AI agent to streamline contract review & compliance, auto-flagging deviations 
            from playbooks and regulations. Cut review cycles by <span className="text-green-400 font-semibold">50%</span> and 
            external counsel spend by <span className="text-green-400 font-semibold">~30%</span>.
          </p>
          
          {/* Key benefits */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-green-400" />
              50% Faster Reviews
            </div>
            <div className="flex items-center">
              <DocumentCheckIcon className="h-5 w-5 mr-2 text-blue-400" />
              Automated Compliance
            </div>
            <div className="flex items-center">
              <ShieldCheckIcon className="h-5 w-5 mr-2 text-purple-400" />
              Human-in-the-Loop
            </div>
          </div>
          
          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="mt-12 max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isSubmitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircleIcon className="mr-2 h-4 w-4" />
                    Joined!
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <p className="mt-4 text-sm text-gray-400">
            Be the first to experience the future of contract intelligence
          </p>
        </div>
      </div>
    </div>
  )
}
