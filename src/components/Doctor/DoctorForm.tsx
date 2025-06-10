"use client";

import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle } from 'lucide-react';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    country: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // send the data to the backend
    
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 md:p-8 lg:p-12">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Únete a la Lista de Espera
                </h3>
                <p className="text-blue-200 text-lg">
                  Conéctate con nosotros para explorar oportunidades de asociación
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div className="bg-white/10 rounded-xl border border-white/20 p-4">
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Dirección de Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 py-3 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg text-lg"
                      placeholder="doctor@email.com"
                    />
                  </div>
                </div>

                {/* Country Field */}
                <div className="bg-white/10 rounded-xl border border-white/20 p-4">
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    País *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-0 py-3 pl-10 pr-4 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg text-lg"
                      placeholder="Costa Rica"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!formData.email || !formData.country}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center group mt-8"
                >
                  Unirme a la lista de espera
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Gracias por tu Interés!
              </h3>
              <p className="text-blue-100 mb-6">
                Hemos recibido tu información y nuestro equipo se pondrá en contacto en unos meses para discutir oportunidades de asociación y próximos pasos.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Ir al Inicio
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors block w-full"
                >
                  Enviar Otra Solicitud
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;