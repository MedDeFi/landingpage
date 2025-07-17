"use client";

import React from 'react';
import { AnimatedSection } from '../uishared/AnimatedSection';
import Image from 'next/image';


export const SmileDoc = () => {
  return (
    <AnimatedSection className="flex flex-col items-center justify-center relative bg-gray-100 shadow-xl backdrop-blur-2xl rounded-3xl sm:h-[90vh] md:mx-4 my-12">
      <div className="flex flex-col items-end md:items-center justify-center relative w-full h-screen sm:h-screen md:h-full md:w-full">
        <Image
          src="/MedDeFiProfessionals3.webp"
          alt="SmileDoc"
          className="w-full h-screen max-w-full max-h-full object-cover object-right rounded-3xl"
          width={800}
          height={600}
        />
      </div>
      {/* main card */}
      <div className="flex flex-col absolute items-center md:items-start justify-center  rounded-3xl z-20 w-full md:w-4/5">
        <div className="flex flex-col w-4/5 md:w-3/5 lg:w-2/5 h-full bg-gradient-to-bl from-white/40 via-white/60 to-white/30 rounded-3xl p-2 md:p-4 backdrop-blur-sm">
          {/* title and description */}
          <div className="flex flex-col items-start w-full h-full pl-4 md:px-8 pt-4">
            <h1 className="text-3xl font-semibold text-left text-gray-900">A Clear Path to Care
            </h1>
            <p className="text-left text-gray-600 mb-4">We&apos;re here to help you grow as a professional.</p>
          </div>
          {/* cards container */}
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 py-4">
                  {/* card 2 */}
                  <div className="flex flex-col items-center justify-start w-full h-full bg-white rounded-3xl p-2 md:p-4 backdrop-blur-xl">
              {/* title */}
              <div className="flex flex-row gap-2 items-center w-full h-full pl-2 md:pl-4">
                <svg className="w-8 h-8 text-gray-500 bg-gray-200 rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 shadow-inner-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m6-6H6"></path>
                </svg>
                <h1 className="text-2xl font-semibold text-left text-gray-900">Secure Payments</h1>
              </div>
              {/* description */}
              <div className="flex flex-col items-start w-full pl-2 md:pl-4">
                <p className="text-left text-gray-600">Make sure your money gets home on time. </p>
              </div>
            </div>
         
            <div className="flex flex-col items-center justify-start w-full h-full bg-white rounded-3xl p-2 md:p-4 backdrop-blur-xl">
              {/* title */}
              <div className="flex flex-row gap-2 items-center w-full h-full pl-2 md:pl-4">
                <svg className="w-8 h-8 text-gray-500 bg-gray-200 rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 shadow-inner-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m6-6H6"></path>
                </svg>
                <h1 className="text-2xl font-semibold text-left text-gray-900">Easy Management</h1>
              </div>
              {/* description */}
              <div className="flex flex-col items-start w-full pl-2 md:pl-4">
                <p className="text-left text-gray-600">Handle your schedule with ease, everything in a single place. </p>
              </div>
            </div>
               {/* card 1 */}
               <div className="flex flex-col items-center w-full h-full bg-white rounded-3xl p-2 md:p-4 backdrop-blur-xl">
              {/* title */}
              <div className="flex flex-row gap-2 items-center w-full h-full pl-2 md:pl-4">
                <svg className="w-8 h-8 text-gray-500 bg-gray-200 rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 shadow-inner-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m6-6H6"></path>
                </svg>
                <h1 className="text-2xl font-semibold text-left text-gray-900">Encrypted Information</h1>
              </div>
              {/* description */}
              <div className="flex flex-col items-center w-full pl-2 md:pl-4">
                <p className="text-left text-gray-600">Forget about security issues by encrypting every single thing that happens between you and your clients. </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};