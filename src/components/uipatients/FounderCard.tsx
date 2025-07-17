import React from 'react';
import Image from 'next/image';

interface FounderCardProps {
  name: string;
  role: string;
  avatar: string;
}

export const FounderCard = ({ name, role, avatar }: FounderCardProps) => (
    <div  className="text-center">
        <Image
            src={avatar}
            alt={name}
            width={96}
            height={96}
            className="rounded-full object-cover mx-auto shadow-lg border-4 border-white"
        />
        <h3 className="font-semibold text-gray-900 mt-4">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
    </div>
);