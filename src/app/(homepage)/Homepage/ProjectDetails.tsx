"use client";
import React from 'react';
import { Lightbulb, ArrowRight, Heart, Shield, Globe, Stethoscope } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  return (
    <div className="p-12 md:p-12 bg-white text-gray-900 font-sans relative overflow-hidden">
      {/* Modern Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30"></div>
        
        {/* Triangle */}
        <div className="absolute top-20 left-10 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-purple-100 opacity-40"></div>
        
        {/* Hexagon */}
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-emerald-100 to-emerald-200 opacity-50 transform rotate-45"></div>
        
        {/* Curved Rectangle */}
        <div className="absolute bottom-10 left-1/4 w-32 h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-full opacity-30"></div>
        
        {/* Organic Blob Shape */}
        <div className="absolute top-1/3 right-1/4 w-40 h-32 bg-gradient-to-br from-pink-100 to-rose-100 opacity-25 rounded-[50%_60%_70%_30%/60%_30%_70%_40%]"></div>
        
        {/* Small Floating Circles */}
        <div className="absolute top-40 right-40 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-emerald-300 rounded-full opacity-40 animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <header className="m-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-3 leading-tight">
            About
            <span className="text-blue-600"> MedDeFi</span>
            <span className="text-gray-400 font-light text-4xl md:text-5xl align-baseline ml-1">{"{Innovation}"}</span>
          </h1>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 tracking-wide">MedDeFi</span>
            <span className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 px-4 py-2 rounded-full text-xs font-semibold shadow-md text-gray-700">
              Decentralized medical payments
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Task Card with Modern Shapes */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl shadow-xl relative flex flex-col overflow-hidden">
            {/* Geometric Elements Inside Card */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 transform rotate-45"></div>
            <div className="absolute top-1/2 right-0 w-8 h-16 bg-white/5 rounded-l-full"></div>
            
            <div className="flex items-center mb-4 relative z-10">
              <div className="bg-white/20 p-3 rounded-2xl mr-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-semibold text-white flex-1">For Patients and Healthcare Professionals</h2>
              <span className="text-white/80 text-sm tracking-wide">MedDeFi</span>
            </div>
            
            <div className="flex items-center mb-6 relative z-10">
              <p className="text-white leading-relaxed flex-grow">
                MedDeFi is a decentralized medical payments platform enabling seamless cross-border transactions between patients and healthcare professionals. The platform's core mission is to build a trusted environment where patients feel secure and at ease throughout their treatment journey.
              </p>
            </div>
            
            {/* Modern Icon Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="mt-auto flex items-center justify-between relative z-10">
              <div className="flex items-center text-white hover:text-white/80 cursor-pointer group">
                <span className="font-medium tracking-wide">Learn more</span>
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </div>
              <div className="bg-white/20 p-2 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Column Cards */}
          <div>
            {/* Description Card with Modern Shapes */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-8 rounded-3xl shadow-lg mb-8 relative overflow-hidden">
              {/* Geometric Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-3xl opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-20 h-8 bg-purple-100 rounded-tr-3xl opacity-40"></div>
              <div className="absolute top-1/2 left-0 w-4 h-12 bg-emerald-100 rounded-r-full opacity-50"></div>
              
              <p className="text-gray-700 leading-relaxed relative z-10">
                Connecting with your healthcare provider and pay for your treatment has never been easier and secure. We are reducing frictions and increasing transparency in the healthcare industry. A solution for patients and healthcare professionals.
              </p>
              
              <div className="absolute bottom-6 right-8 bg-blue-100 p-3 rounded-2xl">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            {/* Image Card with Modern Overlay Shapes */}
            <div className="bg-gray-100 rounded-3xl shadow-xl overflow-hidden h-72 md:h-80 relative group">
              <img 
                src="/images/2148984296.jpg" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Simple Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;