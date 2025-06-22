import React, { useState, useEffect } from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(isOpen);
        if (!isOpen) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
            console.log("Waitlist submission:", email);
            setIsSubmitted(true);
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 transition-colors duration-300 flex items-center justify-center p-4 ${isOpen ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-gray-100 backdrop-blur-2xl shadow-2xl transition-all duration-300 ease-out w-full max-w-sm sm:max-w-md
                    ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-full scale-95'}
                    rounded-2xl
                    p-4 sm:p-6
                `}
            >
                <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden"></div>
                <div className="w-full flex justify-center items-center mb-4">
                    <img src="/MedDeFiLogotype.svg" alt="Logotype" className="w-24 sm:w-32 h-auto" />
                </div>
                {isSubmitted ? (
                    <div className="text-center py-6 sm:py-8">
                        <div className="text-green-600 bg-green-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center mb-4 ring-4 ring-green-100">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">You're on the list!</h2>
                        <p className="text-gray-600 text-sm sm:text-base">We'll let you know when we launch. Thanks for being an early believer.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">Get Early Access</h2>
                        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">Join the waitlist to be first in line for the future of healthcare.</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full text-base sm:text-lg p-3 sm:p-4 bg-white/80 border border-gray-300/50 rounded-xl mb-4 focus:ring-2 text-gray-900 focus:ring-blue-500 outline-none transition"
                                required
                            />
                            <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded-full text-base sm:text-lg py-3 sm:py-4 hover:bg-blue-700 active:bg-blue-500 transition-colors">
                                Join Waitlist
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}; 