"use client";

import React, { useState, ChangeEvent } from 'react';
import { Mail, User, CheckCircle } from 'lucide-react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    procedure: '',
    customProcedure: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const procedures = [
    'Cardiac Surgery',
    'Orthopedic Surgery',
    'Cosmetic Surgery',
    'Dental Procedures',
    'Bariatric Surgery',
    'Eye Surgery',
    'General Surgery',
    'Other'
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 md:p-8 lg:p-12">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get Your Free Consultation
                </h3>
                <p className="text-blue-200 text-lg">
                  Join our waitlist to be among the first to access our services
                </p>
              </div>

              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl border border-white/20 p-4">
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-0 py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl border border-white/20 p-4">
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-0 py-2 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Procedure Selection */}
                <div className="bg-white/10 rounded-xl border border-white/20 p-4">
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Procedure of Interest
                  </label>
                  <select
                    name="procedure"
                    value={formData.procedure}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                  >
                    <option value="" style={{backgroundColor: '#1e3a8a', color: 'white'}}>Select procedure</option>
                    {procedures.map((procedure, index) => (
                      <option key={index} value={procedure} style={{backgroundColor: '#1e3a8a', color: 'white'}}>
                        {procedure}
                      </option>
                    ))}
                  </select>
                  
                  {/* Custom Procedure Input - Shows when "Other" is selected */}
                  {formData.procedure === 'Other' && (
                    <div className="mt-4">
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Please specify the procedure
                      </label>
                      <input
                        type="text"
                        name="customProcedure"
                        value={formData.customProcedure}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter the specific procedure"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Join Waitlist - and get cheaper Healthcare
                </button>

    
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Welcome to the Waitlist!
              </h3>
              <p className="text-blue-100 mb-6">
                Thank you for joining our waitlist. Our team will contact you in a few months to discuss your treatment options.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Go to Home
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors block w-full"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientForm;