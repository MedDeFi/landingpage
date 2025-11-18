'use client';
import React from 'react';
import CardTwo from './CardTwo';

export default function CardTwoExample() {
  return (
    <div className='flex flex-row gap-4'>
      <CardTwo
        title="Example Card One"
        description="This is the first example of the CardTwo component."
        imageSrc="/images/hero/Layer 1.webp"
        imageAlt="Example image one"
      />
      <CardTwo
        title="Example Card Two"
        description="This is the second example of the CardTwo component."
        imageSrc="/images/hero/Dr.Guzman1.webp"
        imageAlt="Example image two"
      />
      <CardTwo
        title="Example Card Three"
        description="This is the third example of the CardTwo component."
        imageSrc="/images/hero/DentalOffice.webp"
        imageAlt="Example image three"
      />
    </div>
  );
}
