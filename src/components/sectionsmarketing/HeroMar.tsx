"use client";
import React from "react";
import Image from "next/image";
import MarketingHeader from "./MarketingHeader";
import { WaitlistButton } from "../uishared/HeroSectionParts";

// 1. Use React.memo to prevent unnecessary re-renders (if props are added in the future)
const HeroMar = React.memo(function HeroMar({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <>
          {/* Desktop (large screens) */}
          <div className="relative overflow-hidden h-[96vh] flex items-center rounded-b-3xl justify-between">
            <MarketingHeader />
            <div className="flex flex-col h-screen w-full ">
                {/* Top row */}
                <div className="flex flex-col md:flex-row h-screen">
                    <div className="relative flex flex-col justify-center items-start text-white p-4 flex-1 overflow-hidden bg-gradient-to-tr from-pink-200/70 via-pink-300/80 to-purple-200/80 backdrop-blur-2xl">
                        {/* 2. Optimize Image: add priority, sizes, and placeholder for better LCP and perceived speed */}
                        <Image 
                            src="/Doctor4.webp" 
                            alt="Dental image reference #1"
                            fill
                            className="object-cover object-left md:object-right w-full"
                            priority
                            sizes="(max-width: 1920px) 100vw, 50vw"
                            placeholder="blur"
                            blurDataURL="/Doctor4.webp"
                        />
                        <div className="relative z-10 rounded-3xl p-4 max-w-4xl h-auto flex flex-col justify-center  md:bg-gray-600/20 md:backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none lg:pl-20">
                            <h2 className="font-semibold text-7xl text-center md:text-start lg:text-8xl text-pretty text-balance max-w-3xl ">
                                The Airbnb of Medical Tourism
                            </h2>
                            <p className="text-xl text-pretty max-w-2xl text-balance text-center md:text-start pt-4">
                                Connect with verified healthcare professionals worldwide. Secure payments, transparent pricing, and comprehensive care coordination.
                            </p>
                            <div className="flex">
                                 <WaitlistButton onClick={onOpenModal} />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
});

export default HeroMar;
