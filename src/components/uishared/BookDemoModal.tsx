import React, { useState, useEffect } from "react";
import { addWaitlist } from "@/components/forms/Waitlist/api/insertWaitlist";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = "https://calendly.com/masotti-leandro/30min"; // Reemplaza con tu link de Calendly

export const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setEmail("");
        setError("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !email.trim()) {
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const result = await addWaitlist({ email: email.trim() });
      if (!result.success) {
        throw new Error(result.message || "Failed to book demo");
      }
      setIsSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-colors duration-300 ${isOpen ? "bg-black/40 backdrop-blur-sm" : "bg-transparent pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`fixed bottom-0 w-full bg-white rounded-t-[2rem] p-6 shadow-2xl flex-1 items-center justify-center transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Book a Demo</h2>
        <p className="text-gray-600 text-center mb-6">Schedule your demo and get started!</p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full text-lg p-4 bg-white/80 border border-gray-300/50 rounded-xl mb-4 focus:ring-2 text-gray-900 focus:ring-blue-500 outline-none transition"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-full text-lg py-4 hover:bg-blue-700 active:bg-blue-500 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Booking...
                </span>
              ) : (
                "Book Demo"
              )}
            </button>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          </form>
        ) : (
          <>
            <div className="text-center py-8">
              <div className="text-green-600 bg-green-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 ring-4 ring-green-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Email received!</h2>
              <p className="text-gray-600">Now select your demo time below:</p>
            </div>
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="600"
              frameBorder="0"
              title="Book a Demo"
              className="w-full rounded-xl border mt-4"
            />
            <button
              className="w-full mt-6 bg-blue-600 text-white font-semibold rounded-full text-lg py-4 hover:bg-blue-700 active:bg-blue-500 transition-colors"
              onClick={() => window.location.href = "/"}
            >
              Go back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookDemoModal;
