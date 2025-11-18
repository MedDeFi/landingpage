"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BentoGrid1() {
    const router = useRouter();
    return (
    <div className="flex flex-col lg:flex-row-2 w-full justify-center items-stretch h-full py-8 relative md:mb-8">
        
        {/* Title and Description */}
        <div className="flex flex-col h-full md:h-screen items-stretch justify-start text-center">
        <div className="relative flex flex-col justify-between items-center w-full text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-blue-200/70 via-blue-300/80 to-blue-200/80 backdrop-blur-2xl">
                    <Image 
                        src="/MedDeFi-bgBig.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="relative object-top object-cover rounded-3xl"
                    />
                    
                    <div className="relative z-10 rounded-3xl p-4 w-full h-auto flex flex-col justify-center items-center">
                    <h1 className="text-6xl text-white text-balance text-pretty font-bold text-gray-800 max-w-2xl">High Quality Healthcare On Your Budget</h1>
                    <p className="text-xl text-center text-gray-100 max-w-2xl pt-4">
                   MedDeFi delivers world-class healthcare treatments at a fraction of the cost. Get elite care, advanced tech & the results you deserve.
                    </p>
                    </div>
                  
                <div className="flex flex-col items-center gap-4 w-3/5 h-2/5">
                <div className="relative flex flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-black hover:bg-white/80 backdrop-blur rounded-full">
                        Join Waitlist
                    </button>
                    <button onClick={() => router.push("/doctors")} className="px-8 py-4 bg-gray-800/50 hover:bg-gray-500/50 backdrop-blur rounded-full">
                        Become a Provider
                    </button>
                </div>
                <div className="flex flex-col w-full items-center md:flex-row gap-4">
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-gray-300/10 via-gray-400/20 to-gray-500/10 backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-3xl"></div>
                <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-start text-4xl md:text-5xl ">
                            Instant Payments
                        </h2>
                        <p className="text-start">
                        Save thousands on your full smile restoration. Experience premium care with one transparent, affordable price.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-gray-300/10 via-gray-400/20 to-gray-500/10 backdrop-blur-2xl">
                   
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl w-full h-full p-4 flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl text-start lg:text-5xl">
                        Verified Professionals
                        </h2>
                        <p className="text-start">
                       Get the same elite, lifetime-guaranteed results for a fraction of the cost. It&apos;s not just a better price—it&apos;s the intelligent choice.
                        </p>
                    </div>
                </div>
                </div>
            </div>
                </div>
        </div>
        
        <div className="flex flex-col h-5/6 justify-center gap-4 p-4 my-16 md:my-8">
            {/* Top row */}
            <div className="flex flex-col md:flex-row gap-4 h-3/5">
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-blue-200/70 via-blue-300/80 to-blue-200/80 backdrop-blur-2xl">
                    <Image 
                        src="/images/allonsix1.webp" 
                        alt="Dental image reference #1" 
                        width={200} height={200}
                        className="absolute top-0 right-4 md:top-4 lg:right-20 object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-3xl md:text-4xl ">
                           Provider ID Verification
                        </h2>
                        <p className="lg:pr-98">
                        Save thousands on your full smile restoration. Experience premium care with one transparent, affordable price.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 md:flex-none md:w-1/3 overflow-hidden bg-gradient-to-tr from-blue-200/70 via-blue-300/80 to-blue-200/80 backdrop-blur-2xl">
                   
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl lg:text-4xl lg:pr-8">
                        Privacy
                        </h2>
                        <p className="pr-12">
                       <span className="font-semibold"></span> Get the same elite, lifetime-guaranteed results for a fraction of the cost.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom row */}
            <div className="flex flex-col md:flex-row gap-4 h-3/5">
            <div className="relative flex flex-col justify-end items-start text-white p-4 rounded-3xl flex-1 md:flex-none md:w-1/3 overflow-hidden bg-gradient-to-tr from-blue-200/70 via-blue-300/80 to-blue-200/80 backdrop-blur-2xl">
                     <Image 
                        src="/images/DentalPassport2.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl gap-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl">
                        Unbeatable Pricing
                        </h2>
                        <p className="text-lg">
                        Flights + 4-star hotels + procedures + 24/7 concierge service
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-start text-white p-4 bg-gradient-to-tr from-blue-200/70 via-blue-300/80 to-blue-200/80 rounded-3xl flex-1">
                    <Image 
                        src="/images/hero/DentalPassport4.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="object-cover rounded-3xl -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl"></div>
                    <div className="relative z-10 rounded-3xl p-4 w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl">
                        Instant Payments
                        </h2>
                        <p className="lg:pr-98">
                        Achieve a durable, brilliant smile with our full Zirconia restoration. Rebuild your smile and confidence. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
    </div>  
    
    );
  }