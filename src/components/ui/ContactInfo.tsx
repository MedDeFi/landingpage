'use client';

export function ContactInfo() {
    return (

<div className="flex flex-col md:flex-row min-h-auto relative overflow-hidden w-full">
<div className="flex flex-col items-center justify-around bg-white/10 overflow-hidden rounded-3xl p-4 w-full">
  <h3 className="text-3xl font-semibold text-purple-100 mb-6">Contact Information</h3>
  
  <div className="flex flex-col w-full justify-center items-center text-start gap-8">
  <div className="flex md:flex-row flex-col items-start justify-center w-full gap-8">
    <div className="flex flex-row items-center md:items-center">
      <span role="img" aria-label="Dirección" className="text-white mt-1" style={{ fontSize: 20 }}>📍</span>
      <div>
        <p className="font-medium text-gray-100">Address</p>
        <p className="text-gray-100">Curridabat, 200m South of Pops<br />San José, Costa Rica</p>
      </div>
    </div>
    
    <div className="flex items-center md:items-start space-x-3">
      <span role="img" aria-label="Horarios" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>⏰</span>
      <div>
        <p className="font-medium text-gray-100">Hours</p>
        <p className="text-gray-100">24/7<br />Sunday to Sunday</p>
      </div>
    </div>
    <div className="flex items-center justify-start md:items-start space-x-3">
      <span role="img" aria-label="Phone" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>📞</span>
      <div>
        <p className="font-medium text-gray-100">Phone</p>
        <p className="text-gray-100">+1 (702) 595-3955</p>
      </div>
    </div>
    </div>
    </div>
    <div className="flex flex-col w-full justify-center items-center text-start pt-8">
    <div className="flex flex-row items-center justify-start md:justify-center pt-8 w-full">
 
    
    <div className="flex items-center space-x-3">
      <span role="img" aria-label="Correo" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>✉️</span>
      <div>
        <p className="font-medium text-gray-100">Email</p>
        <p className="text-gray-100">ivan@dentalimplantcentercostarica.com</p>
      </div>
    </div>
  </div>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-8 p-4 bg-white/10 rounded-lg">
    <h4 className="font-semibold text-2xl md:text-4xl text-balance text-purple-200 mb-2">Why choose OG Center?</h4>
    <ul className="text-lg text-purple-100 space-y-1">
      <li>• Digital technology of the latest generation</li>
      <li>• Certified specialists</li>
      <li>• International dental tourism</li>
      <li>• More than 20 years of experience</li>
    </ul>
  </div>
</div>
</div>
);
}