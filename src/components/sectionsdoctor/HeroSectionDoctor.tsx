import React, { useState } from 'react';
import { HeroTitleDoc, HeroImage, HeroBookDemoButton } from '../uishared/HeroSectionParts';
import { BookDemoModal } from '../uishared/BookDemoModal';

const HeroSectionDoctor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Desktop (large screens) */}
      <div className="hidden lg:block z-40 px-4 pt-4">
        <div className="relative h-[95vh] bg-white shadow-xl overflow-hidden rounded-3xl w-full items-stretch">
          {/* Blue background on the right, containing image and patterns */}
          <div className="absolute inset-y-0 right-0 lg:w-1/2 items-end mr-4 mt-12 mb-12 justify-center bottom-0 bg-gradient-to-t from-blue-600 to-white rounded-full overflow-hidden">
            {/* Main Doctor Image */}
            <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
              <HeroImage className="h-3/5 w-3/5 object-cover" alt="Doctor" />
            </div>
            {/* Background pattern on blue section */}
            <div className="absolute inset-0 z-0">
              <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-3/4 h-full bg-blue-500 opacity-10 transform rotate-12 rounded-full"></div>
              <div className="absolute -right-1/2 top-1/4 -translate-y-1/2 w-full h-full bg-blue-400 opacity-10 transform -rotate-12 rounded-full"></div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row min-h-screen rounded-3xl">
            {/* Left Section - White Background */}
            <div className="w-full md:w-1/2 flex flex-col p-8 md:ml-8 text-gray-800 relative justify-center items-start rounded-3xl">
              <div className="item-evenly">
                <HeroTitleDoc />
            
                <div className="flex mt-4">
                  <HeroBookDemoButton onClick={() => setIsModalOpen(true)} />
                </div>
              </div>
            </div>
            {/* Waitlist Modal */}
            <div className="absolute inset-0 mb-16">
              <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet (medium screens) */}
      <div className="hidden md:block lg:hidden z-40 px-4 pt-4">
        <div className="relative h-[90vh] bg-white overflow-hidden rounded-3xl w-full items-stretch">
          {/* Blue background on the right, containing image and patterns */}
          <div className="absolute inset-y-0 right-0 w-1/2 items-end mr-4 mt-8 mb-8 justify-center bottom-0 bg-gradient-to-t from-blue-600 to-white rounded-full overflow-hidden">
            {/* Main Doctor Image */}
            <div className="absolute bottom-0 w-full flex justify-center items-end z-10">
              <HeroImage className="h-[70vh] w-full object-cover object-top" alt="Doctor" />
            </div>
            {/* Background pattern on blue section */}
            <div className="absolute inset-0 z-0">
              <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-3/4 h-full bg-blue-500 opacity-10 transform rotate-12 rounded-full"></div>
              <div className="absolute -right-1/2 top-1/4 -translate-y-1/2 w-full h-full bg-blue-400 opacity-10 transform -rotate-12 rounded-full"></div>
            </div>
          </div>
          <div className="relative flex flex-col min-h-screen justify-center items-centerx rounded-3xl">
            {/* Left Section - White Background */}
            <div className="w-full md:w-1/2 flex flex-col p-8 md:ml-8 text-gray-800 relative justify-center items-center rounded-3xl">
              <div className="item-evenly">
                <HeroTitleDoc />
                <div className="flex mt-4">
                  <HeroBookDemoButton onClick={() => setIsModalOpen(true)} />
                </div>
              </div>
            </div>
            {/* Waitlist Modal */}
            <div className="absolute inset-0 mb-16">
              <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (small screens) */}
      <div className="md:hidden">
        <div className="relative text-gray-800 bg-gray-100  overflow-hidden shadow-xl backdrop-blur-xl rounded-b-3xl z-40 flex-1">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white-100 to-gray-100 opacity-50"></div>
          <div className="relative pt-32">
            <HeroTitleDoc />
          </div>
          <div className="relative mt-12 flex flex-col items-center justify-center">
            <div className="w-full h-120 flex items-center justify-center flex">
              <HeroImage className="w-full h-full items-center justify-center object-cover object-top" alt="Nurse" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionDoctor;