import React from 'react';

const PartnerSection: React.FC = () => {
  return (
    <div className="bg-blue-100 p-8 flex flex-col items-center justify-center relative font-sans rounded-3xl pt-20 pb-20">
      <p className="text-gray-600 text-center mb-4">
        We work closely with research institutions, biotech companies, healthcare providers, and NGOs
        <br/>
        to drive innovation and bring new treatments to the DeFi market.
      </p>
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        WOULD YOU LIKE TO PARTNER WITH US 
        <br/>
        TO ADVANCE HEALTHCARE?
      </h2>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-bold">
        CONTACT US ↗
      </button>

      {/* Placeholder for pills image */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '15%', 
          transform: 'translateY(-70%) translateX(-50%)', 
          width: '100px', 
          height: '50px',
          // backgroundColor: '#ccc', // Placeholder visual
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // fontSize: '12px',
          // color: '#666'
        }}
      >
        {/* Using simple divs to represent pills for now */}
        <div style={{
            width: '60px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
            transform: 'rotate(-30deg) translate(5px, 0px)',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        }}></div>
        <div style={{
            width: '60px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
            transform: 'rotate(-30deg) translate(-5px, -10px)',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        }}></div>
      </div>

      {/* Placeholder for product box image */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '60px', 
          right: '15%', 
          width: '100px', 
          height: '100px', 
          backgroundColor: '#fff', // Placeholder visual
          border: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: '#666',
          borderRadius: '10px',
          boxShadow: '3px 3px 8px rgba(0,0,0,0.1)',
          padding: '5px'
        }}
      >
        <div style={{fontSize: '10px', color: '#333', fontWeight: 'bold'}}>NeuroBoost</div>
        <div style={{width: '80%', height:'60%', backgroundColor: 'rgba(255, 165, 0, 0.3)', marginTop: '5px', borderRadius: '5px'}}></div>
         <div style={{fontSize: '7px', color: '#777', marginTop: '3px', textAlign:'center'}}>Supports cognitive function and mental clarity.</div>
      </div>
    </div>
  );
};

export default PartnerSection; 