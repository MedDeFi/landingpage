import React from 'react';
import { ArrowRight, Star, Calendar, User } from 'lucide-react';

const PatientReview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-8 flex flex-col items-center justify-center min-h-screen relative overflow-hidden font-['Poppins']">
      {/* Minimalistic background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-blue-100/30 text-8xl sm:text-[120px] lg:text-[150px] font-light select-none">
          Reviews
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mb-2">
          What our patients say
        </h2>
        <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
      </div>

      {/* Bento Container */}
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 z-10 w-full max-w-7xl">
        {/* Review Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          
          {/* First Review Card */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 flex flex-col">
            <div className="p-6 sm:p-8 flex flex-col h-full">
            {/* Patient Info Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-200">
                <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-medium text-lg text-slate-900 truncate">Anna Thompson</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-150" 
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500 flex-shrink-0">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Apr 20, 2025</span>
                <span className="sm:hidden">Apr 20</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center&auto=format&q=80" 
                alt="Professional medical consultation showing doctor and patient interaction"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Review Text */}
            <blockquote className="text-slate-700 text-base leading-relaxed mb-8 relative">
              <span className="text-4xl text-blue-200 absolute -top-2 -left-1 font-serif">"</span>
              <p className="pl-6">
                I felt calm and cared for from the first step inside. The doctor took time to explain everything clearly and the whole process was very smooth and professional.
              </p>
            </blockquote>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">Verified Patient</span>
              </div>
              <button 
                className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 group flex-shrink-0"
                aria-label="View more reviews"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

          {/* Second Review Card */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 flex flex-col">
            <div className="p-6 sm:p-8 flex flex-col h-full">
            {/* Patient Info Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-200">
                <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-medium text-lg text-slate-900 truncate">Michael Chen</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-150" 
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500 flex-shrink-0">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Apr 18, 2025</span>
                <span className="sm:hidden">Apr 18</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center&auto=format&q=80" 
                alt="Modern medical facility with advanced equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Review Text */}
            <blockquote className="text-slate-700 text-base leading-relaxed mb-8 relative">
              <span className="text-4xl text-blue-200 absolute -top-2 -left-1 font-serif">"</span>
              <p className="pl-6">
                Outstanding service and care. The staff was incredibly professional and made me feel comfortable throughout my entire visit. Highly recommend to anyone!
              </p>
            </blockquote>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">Verified Patient</span>
              </div>
              <button 
                className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 group flex-shrink-0"
                aria-label="View more reviews"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

          {/* Third Review Card */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 flex flex-col">
            <div className="p-6 sm:p-8 flex flex-col h-full">
            {/* Patient Info Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-200">
                <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-medium text-lg text-slate-900 truncate">Sarah Rodriguez</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-150" 
                    />
                  ))}
                  <Star className="w-4 h-4 text-gray-300 hover:scale-110 transition-transform duration-150" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500 flex-shrink-0">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Apr 15, 2025</span>
                <span className="sm:hidden">Apr 15</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&crop=center&auto=format&q=80" 
                alt="Clean and comfortable medical waiting room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Review Text */}
            <blockquote className="text-slate-700 text-base leading-relaxed mb-8 relative">
              <span className="text-4xl text-blue-200 absolute -top-2 -left-1 font-serif">"</span>
              <p className="pl-6">
                Great facility with friendly staff. The appointment was on time and the treatment was effective. Only minor issue was parking, but overall a positive experience.
              </p>
            </blockquote>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">Verified Patient</span>
              </div>
              <button 
                className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 group flex-shrink-0"
                aria-label="View more reviews"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-6 right-6 text-xs text-blue-300/60 font-mono">
        { "reviews" }
      </div>
    </div>
  );
};

export default PatientReview;