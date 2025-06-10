import Link from 'next/link';

// Medifi - Building the Future of Healthcare
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Medifi</h1>
            </div>
            <div className="text-sm text-gray-600">
              Powered by AI • Built for Tomorrow
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Building Healthcare's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {" "}Digital Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Medifi is revolutionizing healthcare delivery through intelligent automation, 
            predictive analytics, and seamless patient-provider connections. 
            Experience healthcare designed for the next generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              AI-Powered Diagnostics
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Real-time Health Monitoring
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Predictive Care Analytics
            </span>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/doctors" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare Providers</h3>
                  <p className="text-blue-600 font-medium">Advanced Clinical Tools</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Empower your practice with AI-assisted diagnostics, automated workflows, 
                and comprehensive patient insights. Transform how you deliver care with 
                intelligent tools built for modern medicine.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Access Provider Portal
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/patients" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-indigo-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Patients</h3>
                  <p className="text-indigo-600 font-medium">Personalized Health Hub</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Take control of your health journey with personalized insights, 
                seamless appointment scheduling, and continuous health monitoring. 
                Your health data, intelligently organized and always accessible.
              </p>
              <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Access Patient Portal
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Future Vision Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Future of Healthcare is Here
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Medifi, we're not just digitizing healthcare—we're reimagining it. 
            Through cutting-edge technology and human-centered design, we're building 
            a healthcare ecosystem that anticipates needs, prevents illness, and 
            delivers personalized care at scale.
          </p>
        </div>
      </main>
    </div>
  );
}