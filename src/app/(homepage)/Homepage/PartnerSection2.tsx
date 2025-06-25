import React from 'react';
import {
  ArrowRight,
  Heart,
  Shield,
  Users,
  Stethoscope
} from 'lucide-react';

const PartnerSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-6 sm:py-8 md:py-12">
      <div className="w-full">

        {/* Main Container - Full Width */}
        <div className="bg-white mx-2 sm:mx-4 lg:mx-6 xl:mx-8 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg">

          {/* Hero Section */}
          <div className="bg-blue-600 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-3 sm:mb-4 md:mb-6 relative p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">

            {/* Responsive Heading */}
            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight px-2">
              PARTNER WITH US TO ADVANCE HEALTHCARE
            </h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">

              {/* Left: Text */}
              <div className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-2">
                Join our platform connecting patients worldwide with verified healthcare providers through secure payments.
              </div>

              {/* Right: Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/2149152536.jpg"
                  alt="Healthcare Professional"
                  className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">100%</p>
              <p className="text-gray-800 font-semibold mb-1 md:mb-2 text-xs sm:text-sm md:text-base">Patient Satisfaction</p>
              <p className="text-xs md:text-sm text-gray-600 leading-tight">
                Continuously improving quality of healthcare services
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">100%</p>
              <p className="text-gray-800 font-semibold mb-1 md:mb-2 text-xs sm:text-sm md:text-base">Global Reach</p>
              <p className="text-xs md:text-sm text-gray-600 leading-tight">
                Connect with patients from around the world seeking quality medical care
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">100%</p>
              <p className="text-gray-800 font-semibold mb-1 md:mb-2 text-xs sm:text-sm md:text-base">Secure Payments</p>
              <p className="text-xs md:text-sm text-gray-600 leading-tight">
                Receive instant, secure payments through our platform with full transparency
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">100%</p>
              <p className="text-gray-800 font-semibold mb-1 md:mb-2 text-xs sm:text-sm md:text-base">Secure & Reliable</p>
              <p className="text-xs md:text-sm text-gray-600 leading-tight">
                Modern secure technology with experienced specialists
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative group">
            <img
              src="/images/122385.jpg"
              alt="Modern Medical Facility"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 text-center">
              <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-blue-600 mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-6" />
              </div>
              <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 max-w-3xl px-2">
                Be Part of a Better Future
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-2xl leading-relaxed px-2">
                Join healthcare providers transforming medical tourism with secure, transparent payments.
              </p>
              <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-6 lg:px-12 xl:py-8 xl:px-16 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mx-auto group-hover:shadow-2xl">
                Join Our Network
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnerSection;