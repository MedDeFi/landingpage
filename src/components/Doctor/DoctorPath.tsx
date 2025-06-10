"use client";

import React from 'react';
import { Stethoscope, DollarSign, Users, Globe, TrendingUp, Clock, Award, CheckCircle } from 'lucide-react';


const DoctorPath = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Aumenta tus Ingresos",
      description: "Gana 30-50% más tratando pacientes internacionales con precios premium por atención de calidad."
    },
    {
      icon: Users,
      title: "Expande tu Base de Pacientes",
      description: "Accede a miles de pacientes en todo el mundo que buscan atención médica de calidad en Costa Rica."
    },
    {
      icon: Globe,
      title: "Reconocimiento Internacional",
      description: "Construye tu reputación globalmente y forma parte de la excelencia del turismo médico de Costa Rica."
    },
    {
      icon: TrendingUp,
      title: "Mercado en Crecimiento",
      description: "El turismo médico hacia Costa Rica crece 15% anualmente - sé parte de esta oportunidad en expansión."
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Elige tu disponibilidad y gestiona pacientes internacionales junto a tu práctica local."
    },
    {
      icon: Award,
      title: "Desarrollo Profesional",
      description: "Gana experiencia con casos diversos y tecnologías médicas avanzadas."
    }
  ];

  const features = [
    "Soporte completo de adquisición de pacientes y marketing",
    "Sistema simplificado de reservas y gestión de pacientes",
    "Servicios de traducción y apoyo de enlace cultural",
    "Compensación competitiva con estructura de tarifas transparente",
    "Cobertura de responsabilidad profesional para pacientes internacionales",    
    "Seguimiento de aseguramiento de calidad y satisfacción del paciente",  
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Stethoscope className="w-5 h-5 text-blue-300 mr-2" />
            <span className="text-white font-medium">Para Profesionales Médicos</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Únete a la Red Líder de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Turismo Médico de Costa Rica
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Transforma tu práctica conectándote con pacientes internacionales que buscan atención médica de clase mundial a precios transparentes y competitivos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">$150K+</div>
              <div className="text-blue-200 text-sm">Promedio de Ingresos Adicionales Anuales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200 text-sm">Pacientes Internacionales Mensuales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200 text-sm">Tasa de Satisfacción del Paciente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Unirte a Nuestra Red?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre las ventajas de ser parte de la plataforma de turismo médico más confiable de Costa Rica
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

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Todo lo que Necesitas para Tener Éxito
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Proporcionamos soporte integral para asegurar tu éxito en el tratamiento de pacientes internacionales, desde marketing hasta seguimiento post-atención.
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
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Únete a los Doctores que trabajan en Turismo Médico
                </h3>
                <p className="text-gray-600 mb-6">
                  Sé parte de una red élite de profesionales médicos que brindan atención de clase mundial a pacientes internacionales.
                </p>
                <div className="bg-white rounded-xl p-4">
                  
                  <div className="flex justify-center items-center">
                    <span className="text-3xl font-bold text-blue-600">4.9</span>
                    <span className="text-gray-400 ml-2">/ 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default DoctorPath;