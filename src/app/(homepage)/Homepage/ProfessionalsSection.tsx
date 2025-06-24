'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Plus } from 'lucide-react';

const ProfessionalsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Professional data with real medical images
  const professionals = [
    {
      name: 'Dr. Jenny Doe',
      specialty: 'MBBS / Dip in Psychology',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Specialized in mental health and behavioral therapy'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'MBBS / Dip in Cardiology',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Expert in cardiovascular medicine and heart surgery'
    },
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'MBBS / Dip in Neurology',
      imageUrl: 'https://images.unsplash.com/photo-1594824475050-7da46b84c6e8?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Leading neurologist specializing in brain disorders'
    },
    {
      name: 'Dr. Richard Smith',
      specialty: 'MBBS / Dip in Pediatrics',
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Dedicated pediatrician with 15+ years experience'
    },
    {
      name: 'Dr. Maria Rodriguez',
      specialty: 'MBBS / Dip in Orthopedics',
      imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Orthopedic surgeon specializing in joint replacement'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'MBBS / Dip in Oncology',
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      description: 'Oncologist focused on cancer treatment and research'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(professionals.length / itemsPerSlide);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-scroll carousel every 8 seconds
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-8 min-h-screen flex items-center justify-center w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Outer Container */}
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/30 w-full max-w-7xl">
        
        {/* Inner Bento Container for Cards */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20">
          
          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-blue-600">MedDeFi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-2">
              Top <span className="text-blue-600">Professionals.</span>
            </h2>
            <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            
            {/* Cards Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professionals
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((prof, index) => (
                        <div 
                          key={`${slideIndex}-${index}`}
                          className={`bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 group ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          {/* Professional Image */}
                          <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                            <img
                              src={prof.imageUrl}
                              alt={prof.name}
                              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg border-4 border-blue-100"
                              loading="lazy"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>

                          {/* Professional Info */}
                          <h3 className="text-xl font-semibold text-slate-800 mb-2">{prof.name}</h3>
                          <p className="text-blue-600 font-medium mb-3 text-sm">{prof.specialty}</p>
                          <p className="text-slate-600 text-sm mb-6 leading-relaxed">{prof.description}</p>

                          {/* Action Button */}
                          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group/btn">
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white z-10"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white z-10"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Subtle corner accent */}
        <div className="absolute bottom-6 right-6 text-xs text-blue-400/60 font-mono">
          { "professionals" }
        </div>

      </div>
    </div>
  );
};

export default ProfessionalsSection;