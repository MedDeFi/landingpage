'use client';
import React, { useState, useEffect, CSSProperties } from 'react';

// Placeholder for icons - replace with actual icons (e.g., from react-icons)
const PlaceholderIcon = () => <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isSpecial?: boolean;
  isImage?: boolean;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon, isSpecial, isImage, imageUrl }) => {
  const [circleStyles, setCircleStyles] = useState<CSSProperties[]>([]);

  useEffect(() => {
    if (isSpecial) {
      const newStyles = Array.from({ length: 5 }).map(() => ({
        width: `${Math.random() * 20 + 10}px`,
        height: `${Math.random() * 20 + 10}px`,
        bottom: `${Math.random() * 60}%`,
        left: `${Math.random() * 80}%`,
        animationDelay: `${Math.random() * 2}s`,
      }));
      setCircleStyles(newStyles);
    }
  }, [isSpecial]); // Re-run if isSpecial changes, though not strictly necessary if it's a fixed prop

  if (isSpecial) {
    return (
      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between min-h-[220px] md:col-span-1 lg:col-span-1">
        <div>
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        {/* Decorative elements for MedDeFi card if needed */}
        <div className="mt-4 relative h-16">
          {circleStyles.map((styleProps, i) => (
            <div
              key={i}
              className={`absolute bg-white/20 rounded-full animate-pulse`}
              style={styleProps}
            />
          ))}
        </div>
      </div>
    );
  }

  if (isImage && imageUrl) {
    return (
      <div className="rounded-xl shadow-lg overflow-hidden h-[220px] md:col-span-1 lg:col-span-2 group">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"/>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-between min-h-[220px] relative overflow-hidden">
      <div className="absolute -top-2 -left-2 text-gray-300 font-bold text-8xl opacity-50 select-none" style={{ zIndex: 0 }}>
        {number}
      </div>
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="flex items-center mb-3">
          {icon || <PlaceholderIcon />}
          <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-auto relative" style={{ zIndex: 1 }}>
        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Make an appointment
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-600 text-sm font-medium">
          Price
        </a>
      </div>
       {/* Subtle background text - SalvaMedic */}
       <span className="absolute right-4 bottom-16 transform rotate-[270deg] origin-bottom-right text-xs text-gray-200 font-medium whitespace-nowrap select-none opacity-75">
        MedDeFi
      </span>
    </div>
  );
};

const OurServices: React.FC = () => {
  const services = [
    { number: '01', title: 'Family medicine', description: 'Comprehensive medical care for adults and children - prevention, diagnostics, treatment.', icon: <PlaceholderIcon /> },
    { 
      isSpecial: true, 
      title: 'MedDeFi', 
      description: 'From consultation and diagnosis to treatment with care and attention to detail.',
      number: ''
    },
    { number: '02', title: 'Pediatrics', description: 'Caring for children\'s health from the first days of life: check-ups, vaccinations, treatment.', icon: <PlaceholderIcon /> },
    { number: '03', title: 'Women\'s health', description: 'Gynecological care, family planning, hormonal health, and preventive examinations.', icon: <PlaceholderIcon /> },
    { number: '04', title: 'Cardiology', description: 'Diagnosis and treatment of cardiovascular diseases, ECG, cardiac ultrasound, Holter.', icon: <PlaceholderIcon /> },
    { number: '05', title: 'Ultrasound & Lab', description: 'Fast and accurate tests, modern laboratory diagnostics and ultrasound of various organs.', icon: <PlaceholderIcon /> },
    { 
      isImage: true, 
      imageUrl: '/images/2148884880.jpg', // Updated to use the new image
      title: 'Medical Team',
      number: '',
      description: ''
    },
  ];

  return (
    <section className="py-8 md:py-8 bg-gray-100 rounded-3xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Connect with your Doctor</h1>
            <p className="text-gray-500 mt-1 text-sm">{"{ Verified identity and services by MedDeFi }"}</p>
          </div>
          <div className="md:text-right max-w-md">
            <p className="text-gray-600 mb-2 text-sm md:text-base">
              We provide the facilitation of medical tourism by connecting you with the best doctors and hospitals.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base">
              See all categories
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isSpecial={service.isSpecial || false}
              isImage={service.isImage || false}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;