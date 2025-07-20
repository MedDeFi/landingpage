"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { addWaitlist } from "@/components/forms/Waitlist/api/insertWaitlist"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState("")

  // Handle modal visibility and cleanup
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      // Reset state after animation completes
      const timer = setTimeout(() => {
        setIsSubmitted(false)
        setIsSubmitting(false)
        setEmail("")
        setError("")
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Simplified form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Prevent double submission and validate email
    if (isSubmitting || !email.trim()) {
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      const result = await addWaitlist({ email: email.trim() })

      if (!result.success) {
        throw new Error(result.message || "Failed to join waitlist")
      }

      setIsSubmitted(true)

      // Auto-close modal after success
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen && !isVisible) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-colors duration-300 ${
        isOpen ? "bg-black/40 backdrop-blur-sm" : "bg-transparent pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-0 w-full bg-gray-100 backdrop-blur-2xl rounded-t-[2rem] p-6 shadow-2xl transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag indicator */}
        <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

        {/* Logo */}
        <div className="w-full flex justify-center items-center mb-4">
          <Image
            src="/MedDeFiLogotype.svg"
            alt="MedDeFi Logotype"
            className="w-32 h-auto"
            width={128}
            height={40}
            priority
          />
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 bg-green-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 ring-4 ring-green-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h2>
            <p className="text-gray-600">We&apos;ll let you know when we launch. Thanks for being an early believer.</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h2>
            <p className="text-gray-600 mb-6">Join the waitlist to be first in line for the future of healthcare.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">{error}</div>
              )}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
                className="w-full text-lg p-4 bg-white/80 border border-gray-300/50 rounded-xl focus:ring-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                required
                disabled={isSubmitting}
              />

              <button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="w-full bg-blue-600 text-white font-semibold rounded-full text-lg py-4 hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default WaitlistModal
