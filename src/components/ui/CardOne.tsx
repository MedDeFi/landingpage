'use client'; 
import React from "react";
import Image from "next/image";

export default function OurDocs() {

return (
 
 <div className="relative flex flex-col h-auto py-8 justify-start items-center text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-t from-purple-600/70 via-purple-500/60 to-purple-500/50 backdrop-blur-2xl">
               <div className="h-[50vh]">
                <Image
                src="/images/hero/Layer 1.webp"
                alt="Dental image reference #1"
                width={800}
                height={400}
                sizes="800"
                priority={true}
                quality={100}
                loading="lazy"    
                className="object-cover bg-gradient-to-t from-black to-transparent rounded-full -z-20"
                />
                </div>
                    <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-end">
                        <h2 className="font-semibold text-4xl lg:text-6xl">
                        Dr. Guzman
                        </h2>
                        <p className="text-lg pb-8">
                        Dental Surgeon, specializing in Implants and Restorative Dentistry.
                        </p>
                    </div>
                </div>
           
            
            );
            }