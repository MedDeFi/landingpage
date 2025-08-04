import Link from 'next/link';
import { AuroraText } from '@/components/magicui/aurora-text';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number with Aurora Effect */}
        <div className="mb-8">
          <AuroraText 
            className="text-9xl md:text-[12rem] font-bold"
            colors={["#3b82f6", "#1d4ed8", "#1e40af"]}
            speed={0.8}
          >
            404
          </AuroraText>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 animate-fade-in">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up max-w-md mx-auto">
          The page you're looking for seems to have wandered off. 
          Let's get you back to exploring medical tourism opportunities.
        </p>

        {/* Stats Card - Following project pattern */}
        <div className="relative flex text-center justify-around items-center px-6 py-6 bg-white/60 backdrop-blur-xl rounded-2xl mx-4 mb-8 shadow-lg animate-fade-in-up border border-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">350+</div>
            <div className="text-sm text-gray-600">Waitlist Members</div>
          </div>
          <div className="w-px h-12 bg-gray-300/70"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">152</div>
            <div className="text-sm text-gray-600">Healthcare Providers</div>
          </div>
          <div className="w-px h-12 bg-gray-300/70"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">8+</div>
            <div className="text-sm text-gray-600">Supported Countries</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Link 
            href="/doctors"
            className="cta-button group flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-100"
          >
            <span className="text-lg">Go to Doctors</span>
          </Link>
          
          <Link 
            href="/"
            className="flex items-center justify-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-full border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-100"
          >
            <span className="text-lg">Back to Home</span>
          </Link>
        </div>

        {/* Additional Help Text */}
        <p className="text-sm text-gray-500 mt-8 animate-fade-in-up">
          Can't find what you're looking for?{' '}
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}
