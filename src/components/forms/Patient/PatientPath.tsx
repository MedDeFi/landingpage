"use client";

import React from 'react';
import { Heart, CheckCircle, DollarSign, MapPin, Clock, Shield, Award, Users, Plane, Star } from 'lucide-react';

const PatientPath = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save 50-70% on Medical Costs",
      description: "Get the same quality procedures at a fraction of US prices, with transparent pricing and no hidden fees."
    },
    {
      icon: Award,
      title: "World-Class Medical Care",
      description: "Access board-certified doctors and internationally accredited hospitals with cutting-edge technology."
    },
    {
      icon: MapPin,
      title: "Beautiful Costa Rica Location",
      description: "Recover in a tropical paradise with perfect weather, stunning beaches, and peaceful environments."
    },
    {
      icon: Clock,
      title: "No Waiting Lists",
      description: "Skip long wait times and get your procedure scheduled quickly with our streamlined booking process."
    },
    {
      icon: Shield,
      title: "Comprehensive Support",
      description: "Full concierge service including travel arrangements, accommodation, and 24/7 medical support."
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join thousands of satisfied patients who've had successful procedures in Costa Rica."
    }
  ];

  const features = [
    "Free initial consultation with medical experts",
    "Detailed treatment plans with transparent pricing",
    "Assistance with travel and accommodation booking",
    "Airport pickup and transportation services",
    "English-speaking medical staff and translators",
    "Recovery accommodation near medical facilities",
    "Post-procedure follow-up and support",
    "Medical tourism insurance options"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      procedure: "Knee Replacement",
      rating: 5,
      text: "Saved $45,000 and got better care than I would have in the US. The doctors were amazing!"
    },
    {
      name: "John D.",
      procedure: "Dental Implants",
      rating: 5,
      text: "Perfect results at 60% less cost. The facilities were world-class and staff incredibly caring."
    },
    {
      name: "Maria L.",
      procedure: "Cosmetic Surgery",
      rating: 5,
      text: "Exceeded all expectations. Professional, safe, and the recovery in Costa Rica was like a vacation."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-blue-300 mr-2" />
            <span className="text-white font-medium">For Patients</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            World-Class Healthcare at
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Affordable Prices
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience premium medical care in Costa Rica with transparent pricing, expert doctors, and comprehensive support throughout your journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">50-70%</div>
              <div className="text-blue-200 text-sm">Cost Savings vs US Prices</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-200 text-sm">Successful Procedures</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-blue-200 text-sm">Average Patient Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Costa Rica for Your Medical Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of patients choose Costa Rica for their medical procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from patients who&apos;ve experienced our care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-blue-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.procedure}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Medical Tourism Package
                </h3>
                <p className="text-gray-600 mb-6">
                  We handle everything from your initial consultation to post-procedure care, making your medical journey stress-free.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-2">Average Total Savings</div>
                  <div className="flex justify-center items-center">
                    <span className="text-3xl font-bold text-blue-600">$25,000</span>
                    <span className="text-gray-400 ml-2">per procedure</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything Included in Your Care
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive medical tourism packages ensure you receive the best care while enjoying significant cost savings.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PatientPath;