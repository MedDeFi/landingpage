import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TestimonialCard = ({ quote, name, role, avatar }: TestimonialCardProps) => (
   <div className="bg-gray-200/50 backdrop-blur-lg rounded-2xl p-5 w-72 flex-shrink-0 border border-white/50 shadow-md">
      <p className="text-gray-700 text-base">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center mt-4">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
              <p className="font-semibold text-sm text-gray-900">{name}</p>
              <p className="text-gray-600 text-xs">{role}</p>
          </div>
      </div>
  </div>
);