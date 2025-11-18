'use client';
import Image from "next/image";

interface CardTwoProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkHref?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  buttonText?: string;
  cardButton?: string;
  className?: string;
}

const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative flex flex-col items-center justify-center w-full h-[40vh]">
    <Image
      src={src}
      alt={alt}
      height={1000}
      width={1000}
      sizes="1000px"
      quality={100}
      loading="lazy"
      className="object-cover object-center w-auto h-auto justify-center items-center pt-20"
    />
  </div>
  
  
);

const CardContent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="relative  rounded-3xl w-full h-full flex flex-col justify-end">
    <h2 id="card-title" className="font-semibold text-4xl lg:text-5xl">{title}</h2>
    <p className="text-lg">{description}</p>
  </div>
);

const CardTwo: React.FC<CardTwoProps> = ({
  title = "Default Title",
  description = "Default Description",
  imageSrc = "/default-image.webp",
  imageAlt = "Default Image",
}) => {

  return (
    <div className="relative flex flex-col h-auto w-full py-8 px-8 justify-start items-center text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-t from-purple-900 via-purple-300/90 to-purple-300/80 backdrop-blur-2xl" role="region" aria-labelledby="card-title">
      <CardImage src={imageSrc} alt={imageAlt} />
      <CardContent title={title} description={description} />
    </div>
  );
};

export default CardTwo;
