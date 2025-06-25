import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Heart, 
  Plus,
  CheckCircle,
  Plane,
  Stethoscope
} from 'lucide-react';

const Footer = () => {
  const medicalServices = [
    { name: 'Dental Care', href: '#' },
    { name: 'Cosmetic Surgery', href: '#' },
    { name: 'Cardiac Procedures', href: '#' },
  ];

  const destinations = [
    { name: 'Costa Rica', href: '#' },
    { name: 'Argentina', href: '#' },
    { name: 'Chile', href: '#' },
  ];

  return (
    <footer className="bg-gray-100 py-8 md:py-12">
      <div className="w-full">
        
        {/* Main Bento Container - Full Width */}
        <div className="bg-white mx-4 sm:mx-6 lg:mx-8 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
          
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            
            {/* Brand & Mission */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-blue-600">MedDeFi</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Secure Medical Tourism Platform</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Connecting patients worldwide with verified healthcare providers through secure payments.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1 text-gray-800">2K+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1 text-gray-800">50</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1 text-gray-800">4</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Countries</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-600 rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-sm text-white">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-base sm:text-lg font-bold text-white">Contact</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200" />
                  <div>
                    <p className="text-xs sm:text-sm text-blue-200">Email</p>
                    <p className="text-sm sm:text-base font-semibold text-white">care@meddefi.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200 text-sm">𝕏</span>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-200">Follow us</p>
                    <a href="https://x.com/meddefi" className="text-sm sm:text-base font-semibold text-white hover:text-blue-100 transition-colors">@meddefi</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">

            {/* Medical Services */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl md:rounded-3xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-base md:text-lg font-bold text-gray-800">Services</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {medicalServices.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href} 
                      className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                    >
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Destinations */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl md:rounded-3xl p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Plane className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-base md:text-lg font-bold text-gray-800">Destinations</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    <a 
                      href={destination.href} 
                      className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                    >
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy Links */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-base md:text-lg font-bold text-gray-800">Legal</h3>
              </div>
              <div className="space-y-2 md:space-y-4">
                <a href="#" className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  Terms of Service
                </a>
                <a href="#" className="text-gray-700 text-sm md:text-base font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  Contact Support
                </a>
              </div>
            </div>

          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-200 pt-4 md:pt-6">
            <div className="text-center">
              <p className="text-xs md:text-sm text-gray-600">&copy; 2025 MedDeFi. All rights reserved.</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;