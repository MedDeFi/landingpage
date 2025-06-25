"use client";

import React, { useState, useEffect, useRef, MouseEvent as ReactMouseEvent } from 'react';
import Navbar from '@/components/layout/NavBar';    
import { FiMenu, FiPhone, FiUser } from 'react-icons/fi';

// --- Main App Component ---
export default function Landing4() {

  // --- Helper Hooks & Components (Apple UI Style) ---

  const useCountUp = (end: number, duration: number = 2000) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    React.useEffect(() => {
      const element = ref.current;
      if (!element) return;
      let start = 0;
      const startTime = performance.now();
      const endTime = startTime + duration;
      const updateNumber = (currentTime: number) => {
        if (!element) return;
        if (currentTime >= endTime) {
          element.textContent = end.toLocaleString() + (element.dataset.suffix || '');
          return;
        }
        const progress = (currentTime - startTime) / duration;
        const current = Math.floor(progress * end);
        if (current !== start) {
          start = current;
          element.textContent = current.toLocaleString() + (element.dataset.suffix || '');
        }
        requestAnimationFrame(updateNumber);
      };
      requestAnimationFrame(updateNumber);
    }, [end, duration]);
    return ref;
  };
  
  const useIntersectionObserver = (options: IntersectionObserverInit) => {
      const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
      const [node, setNode] = useState<HTMLElement | null>(null);
      const observer = useRef<IntersectionObserver | null>(null);
      useEffect(() => {
          if (observer.current) observer.current.disconnect();
          observer.current = new window.IntersectionObserver(([entry]) => {
              if (entry.isIntersecting) {
                  setEntry(entry);
                  observer.current?.unobserve(entry.target);
              }
          }, options);
          const { current: currentObserver } = observer;
          if (node && currentObserver) currentObserver.observe(node);
          return () => currentObserver?.disconnect();
      }, [node, options]);
      return [setNode, entry] as const;
  };

  const AnimatedSection = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className: string }>(({ children, className }, ref) => {
      const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });
      return (
          <div
              ref={(node) => {
                  setNode(node);
                  if (ref) {
                      if (typeof ref === 'function') {
                          ref(node);
                      } else {
                          ref.current = node;
                      }
                  }
              }}
              className={`${className} transition-all duration-1000 ease-out ${entry ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
              {children}
          </div>
      );
  });
  
   const useTilt = (ref: React.RefObject<HTMLDivElement | null>) => {
        useEffect(() => {
            const el = ref.current;
            if (!el) return;

            const onMouseMove = (e: MouseEvent) => {
                const { left, top, width, height } = el.getBoundingClientRect();
                const x = (e.clientX - left) / width;
                const y = (e.clientY - top) / height;
                const rotateX = (y - 0.5) * -12; // Invert for natural feel
                const rotateY = (x - 0.5) * 12;
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            };

            const onMouseLeave = () => {
                el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            };

            el.addEventListener('mousemove', onMouseMove);
            el.addEventListener('mouseleave', onMouseLeave);

            return () => {
                el.removeEventListener('mousemove', onMouseMove);
                el.removeEventListener('mouseleave', onMouseLeave);
            };
        }, [ref]);
    };

  interface StatCardProps {
    value: number;
    label: string;
    suffix?: string;
  }

  const StatCard = ({ value, label, suffix = '' }: StatCardProps) => {
    const countUpRef = useCountUp(value);
    return (
      <div className="flex flex-col items-center flex-1 p-2">
        <span 
          className="text-3xl font-semibold text-gray-800" 
          ref={countUpRef} 
          data-suffix={suffix}
        >
          {0}
        </span>
        <span className="text-xs text-gray-500 mt-1" dangerouslySetInnerHTML={{ __html: label }} />
      </div>
    );
  };

  interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const tiltRef = useRef<HTMLDivElement>(null);
    useTilt(tiltRef);
    
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const onMouseMove = (e: MouseEvent) => {
            const { left, top } = el.getBoundingClientRect();
            el.style.setProperty('--x', `${e.clientX - left}px`);
            el.style.setProperty('--y', `${e.clientY - top}px`);
        };
        el.addEventListener('mousemove', onMouseMove);
        return () => el.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
    <div ref={tiltRef} className="feature-card group bg-white/50 backdrop-blur-2xl rounded-3xl p-5 flex items-start space-x-4 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-blue-100 text-blue-600 rounded-lg p-3 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 shadow-inner-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  )};
  
  interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    avatar: string;
  }

  const TestimonialCard = ({ quote, name, role, avatar }: TestimonialCardProps) => (
     <div className="bg-gray-200/50 backdrop-blur-lg rounded-2xl p-5 w-72 flex-shrink-0 border border-white/50 shadow-md">
        <p className="text-gray-700 text-base">"{quote}"</p>
        <div className="flex items-center mt-4">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
            <div className="ml-3">
                <p className="font-semibold text-sm text-gray-900">{name}</p>
                <p className="text-gray-600 text-xs">{role}</p>
            </div>
        </div>
    </div>
  );
  
  interface HowItWorksStepProps {
    number: string;
    title: string;
    description: string;
  }

  const HowItWorksStep = ({ number, title, description }: HowItWorksStepProps) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 text-xl font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
            {number}
        </div>
        <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
    </div>
  );
  
  interface FounderCardProps {
    name: string;
    role: string;
    avatar: string;
  }

  const FounderCard = ({ name, role, avatar }: FounderCardProps) => (
      <div className="text-center">
          <img src={avatar} alt={name} className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg border-4 border-white" />
          <h3 className="font-semibold text-gray-900 mt-4">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
      </div>
  );
  
  interface PartnerLogoProps {
    children: React.ReactNode;
  }

  const PartnerLogo = ({ children }: PartnerLogoProps) => (
      <div className="flex items-center justify-center h-10 text-gray-500 font-bold text-lg opacity-80 hover:opacity-100 transition-opacity">
          {children}
      </div>
  );

  interface FAQItemProps {
    question: string;
    answer: string;
  }

  const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200/80 py-4 last:border-b-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <span className="font-semibold text-gray-800">{question}</span>
                <div className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m6-6H6"></path></svg>
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm pt-2">{answer}</p>
                </div>
            </div>
        </div>
    );
  };

  interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
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
          className={`absolute inset-0 z-50 transition-colors duration-300 ${isOpen ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}
          onClick={onClose}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className={`absolute bottom-0 w-full bg-gray-100 backdrop-blur-2xl rounded-t-[2rem] p-6 shadow-2xl flex-1 items-center justify-center transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="w-full flex justify-center items-center mb-4">
                  <img src="/MedDeFiLogotype.svg" alt="Logotype" className="w-32 h-auto" />
                </div>
                {isSubmitted ? (
                    <div className="text-center py-8">
                        <div className="text-green-600 bg-green-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 ring-4 ring-green-100">
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h2>
                        <p className="text-gray-600">We'll let you know when we launch. Thanks for being an early believer.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Get Early Access</h2>
                        <p className="text-gray-600 text-center mb-6">Join the waitlist to be first in line for the future of healthcare.</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full text-lg p-4 bg-white/80 border border-gray-300/50 rounded-xl mb-4 focus:ring-2 text-gray-900 focus:ring-blue-500 outline-none transition"
                                required
                            />
                            <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded-full text-lg py-4 hover:bg-blue-700 active:bg-blue-500 transition-colors">
                                Join Waitlist
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
  };

  const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDontMissOutVisible, setIsDontMissOutVisible] = useState(false);
    const dontMissOutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsDontMissOutVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (dontMissOutRef.current) {
            observer.observe(dontMissOutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-6.364-1.636l.707-.707m12.728 0l.707-.707" /></svg>, title: 'AI Symptom Analysis', description: 'Understand symptoms with intelligent, data-driven insights.' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Verified Specialists', description: 'Connect with trusted, board-certified medical professionals.' },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: '24/7 Virtual Access', description: 'Get advice and consultations anytime, from anywhere.' },
    ];

    const testimonials = [
        { quote: "This is a game-changer. I got a diagnosis and found a specialist in record time!", name: "Sarah J.", role: "Early Adopter", avatar: "https://placehold.co/100x100/e2e8f0/4a5568?text=SJ" },
        { quote: "Finally, a healthcare app that's actually easy to use. The AI was surprisingly accurate.", name: "Michael B.", role: "Beta Tester", avatar: "https://placehold.co/100x100/fefcbf/4a5568?text=MB" },
        { quote: "As a busy professional, getting quick medical advice is essential. This is exactly what I needed.", name: "Emily K.", role: "Working Mom", avatar: "https://placehold.co/100x100/dbeafe/4a5568?text=EK" },
    ];
    
     const founders = [
        { name: "Dr. Evelyn Reed", role: "Co-Founder & CEO", avatar: "https://placehold.co/128x128/dbeafe/4a5568?text=ER" },
        { name: "Ben Carter", role: "Co-Founder & CTO", avatar: "https://placehold.co/128x128/fefcbf/4a5568?text=BC" },
    ];
    
    const faqs = [
        { question: "How is my personal data protected?", answer: "We use end-to-end encryption and follow the highest privacy standards. Your data is yours, and we are committed to keeping it secure." },
        { question: "What does 'early access' include?", answer: "By joining the waitlist, you'll be among the first to use the app, provide feedback, and help shape its future. You may also receive special introductory pricing." },
        { question: "Is this service a replacement for my doctor?", answer: "Our service is designed to provide guidance and connect you with specialists. It is a tool to support your health journey, not to replace your primary care physician." },
        { question: "Which countries will be supported at launch?", answer: "We plan to launch initially in the United States, Canada, and the UK, with more countries to follow based on user demand and regulatory approvals." },
    ];


    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full rounded-[44px] shadow-2xl overflow-hidden relative">
          
          <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <div className="h-full overflow-y-auto bg-gray-200 main-content relative">
              {/* --- HERO SECTION --- */}
              <header className={`flex-1 justify-between items-center transition-all duration-700 ease-in-out relative z-50 bg-gray-200/80 backdrop-blur-sm px-4 ${isModalOpen ? 'animate-blur-in' : 'animate-blur-out'}`}>
                <Navbar />
              </header>

              <div className="relative text-gray-800 bg-gray-100 pb-44 overflow-y-auto shadow-xl backdrop-blur-xl rounded-b-3xl z-40 flex-1">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white-100 to-gray-100 opacity-50"></div>

                <div className="relative pt-32">
                    <h1 className="text-5xl text-center text-black font-bold tracking-tight animate-fade-in">Healthcare,</h1>
                    <div className="flex justify-center">
                    <h1 className="text-5xl md:text-[100px] text-center text-black !font-semibold animate-fade-in">
                      Re<span className='bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text text-transparent font-semibold'>defi</span>ned
                    </h1>
                    </div>
                </div>
                <div className="relative mt-12">
                    <div className="w-full h-96">
                        <img src="/nurse2.png" alt="Nurse" className="w-full h-full object-cover object-top animate-fade-in-up" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative flex text-center justify-around items-center px-4 py-4 bg-white/60 backdrop-blur-xl rounded-2xl mx-4 shadow-lg -mt-20 animate-fade-in-up border border-white/80">
                        <StatCard value={1500} label="Waitlist Members" />
                        <div className="w-px text-center h-12 bg-gray-300/70"></div>
                        <StatCard value={95} label="Healthcare Providers" />
                        <div className="w-px h-12 bg-gray-300/70"></div>
                        <StatCard value={6} label="Supported Countries" suffix="+" />
                    </div>
                </div>
              </div>
              
              <AnimatedSection className="relative -mt-12 pt-28 pb-20 px-6 bg-gray-200 shadow-xl backdrop-blur-2xl rounded-b-3xl z-30"> 
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">Smarter, Faster Healthcare</h2>
                <p className="text-center text-gray-600 mb-10">Stop guessing. Start knowing.</p>
                <div className="space-y-4">
                    {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
                </div>
              </AnimatedSection>

              <AnimatedSection className="py-20 -mt-12 pt-32 px-6 bg-gray-100 shadow-xl mb-24 backdrop-blur-2xl rounded-b-3xl z-20">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">A Clear Path to Care</h2>
                <p className="text-center text-gray-600 mb-10">Guidance in three simple steps.</p>
                <div className="space-y-6">
                    <HowItWorksStep number="1" title="Describe Your Symptoms" description="Tell us what's wrong in plain language. Our smart system understands." />
                    <HowItWorksStep number="2" title="Get AI-Powered Insights" description="Receive an instant analysis of potential causes and recommendations." />
                    <HowItWorksStep number="3" title="Connect with a Specialist" description="We'll help you find and book an appointment with a verified doctor." />
                </div>
              </AnimatedSection>

              <AnimatedSection className="py-20 -mt-12 px-6 bg-gray-50 shadow-xl mb-16 mt-16 mr-4 ml-4 backdrop-blur-2xl rounded-3xl text-center">
                <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-3xl mb-4 shadow-inner-sm">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-7h3m-18 0h3"></path><circle cx="12" cy="12" r="4"></circle></svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Powered by Intelligence</h2>
                <p className="text-gray-600 mt-3 max-w-md mx-auto">Our platform is built on a sophisticated AI engine trained on millions of data points to provide safe and reliable insights.</p>
              </AnimatedSection>

              <AnimatedSection className="py-20 bg-gray-50 mb-16 mt-16 backdrop-blur-2xl rounded-3xl">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10 px-6">Loved by Our First Users</h2>
                <div className="flex overflow-x-auto space-x-4 pb-6 px-6 testimonial-carousel">
                  {testimonials.map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="py-16 rounded-3xl mx-4 bg-gray-50">
                <h3 className="text-center text-sm font-semibold px-8 text-gray-500 tracking-wider uppercase">Trusted by leading health organizations</h3>
                <div className="mt-8 grid grid-cols-3 gap-8 px-6 mx-4 text-center items-center">
                    <PartnerLogo>HealthHub</PartnerLogo>
                    <PartnerLogo>Vitality AI</PartnerLogo>
                    <PartnerLogo>MedPioneers</PartnerLogo>
                </div>
              </AnimatedSection>
              
              <AnimatedSection className="py-20 px-6 mx-4 mb-16 mt-16 shadow-xl rounded-3xl bg-gray-50">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Questions? Answered.</h2>
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-4 border border-white/80">
                  {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
                </div>
              </AnimatedSection>

              <AnimatedSection ref={dontMissOutRef} className="py-20 px-6 mx-4 mb-16 mt-16 text-center rounded-3xl bg-gray-100 z-60">
                <h2 className="text-4xl font-bold text-gray-900">Don't Miss Out</h2>
                <p className="text-gray-600 mt-3 mb-8">Join the waitlist for exclusive early access and be a part of the healthcare revolution.</p>
                <button onClick={() => setIsModalOpen(true)} className="cta-button bg-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 transition-all duration-300">
                    Claim Your Spot
                </button>
              </AnimatedSection>
          </div>

          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 via-gray-100/90 to-transparent pointer-events-none z-40 transition-opacity duration-300 ${isDontMissOutVisible ? 'opacity-0' : 'opacity-100'}`}>
            <div className="pointer-events-auto">
              <button onClick={() => setIsModalOpen(true)} className="cta-button group w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-4 px-6 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-100">
                <span className="text-lg">Join the Waitlist</span>
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          html { scroll-behavior: smooth; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
          
          .main-content {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .main-content::-webkit-scrollbar { 
            display: none;  /* Chrome, Safari and Opera */
          }
          .testimonial-carousel { scroll-snap-type: x mandatory; -ms-overflow-style: none; scrollbar-width: none; }
          .testimonial-carousel > div { scroll-snap-align: start; }
          .testimonial-carousel::-webkit-scrollbar { display: none; }

          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) both; }

          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
          .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) both; animation-delay: 0.2s; }
          
          /* Custom Blur Animations */
          @keyframes blurIn {
            from { filter: blur(0px); }
            to { filter: blur(4px); }
          }
          
          @keyframes blurOut {
            from { filter: blur(4px); }
            to { filter: blur(0px); }
          }
          
          .animate-blur-in {
            animation: blurIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-blur-out {
            animation: blurOut 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          /* Aurora Background */
          .aurora-background {
            position: absolute;
            inset: 0;
            background: linear-gradient(125deg, #e0f2fe, #ffffff, #bae6fd);
            background-size: 400% 400%;
            animation: aurora 15s ease infinite;
            z-index: -1;
            opacity: 0.3;
          }
          @keyframes aurora {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
          }
          
          /* Cursor Glow Effect */
          .feature-card {
            position: relative;
            overflow: hidden;
          }
          .feature-card::before {
            content: '';
            position: absolute;
            top: var(--y, 0);
            left: var(--x, 0);
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(99, 179, 237, 0.2), transparent 50%);
            opacity: 0;
            transition: opacity 0.4s ease-out;
            pointer-events: none;
          }
          .feature-card:hover::before {
            opacity: 1;
          }
          
          /* Pulsating CTA Button */
          .cta-button {
            animation: pulse-shadow 2s infinite;
          }
          @keyframes pulse-shadow {
            0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }
        `}</style>
      </div>
    );
  };

  return <LandingPage />;
}
