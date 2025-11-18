'use client';
import React from 'react';
import Image from "next/image";
import Header from '../layout/Header/Header';

interface HeroSecsProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkHref?: string;
  backgroundImage?: string;
  id?: string;
  backgroundColor?: string;
  cardButton?: string;
  backDropBlur?: string;
  className?: string;
  
  // Individual visibility controls for each component
  imageVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  contentVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  buttonVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  backgroundVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  
  // Legacy props for backward compatibility (apply to all components)
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
}

// Helper function to generate responsive visibility classes
const getResponsiveVisibilityClasses = (props: {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
}) => {
  const classes = [];
  
  // Hide classes
  if (props.hideOnMobile) classes.push('hidden sm:block');
  if (props.hideOnTablet) classes.push('sm:hidden lg:block');
  if (props.hideOnDesktop) classes.push('lg:hidden');
  
  // Show classes (override hide classes)
  if (props.showOnMobile) classes.push('block sm:hidden');
  if (props.showOnTablet) classes.push('hidden sm:block lg:hidden');
  if (props.showOnDesktop) classes.push('hidden lg:block');
  
  return classes.join(' ');
};

const CardImage: React.FC<{ 
  src: string; 
  alt: string;
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
}> = ({ src, alt, visibility }) => {
  const visibilityClasses = visibility ? getResponsiveVisibilityClasses(visibility) : '';
  
  return (
    <div className={`flex flex-col w-full md:pb-4 md:px-8 h-auto items-center justify-end ${visibilityClasses}`}>
      <div className='flex flex-col items-end justify-end w-full'>
        <Image
          src={src}
          alt={alt}
          height={200}
          width={200}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
          quality={100}
          priority
          fetchPriority='high'
          className="object-cover object-top flex w-full md:w-[80vw] md:h-[90vh] h-full md:bg-gradient-to-t from-yellow-600 via-yellow-400/20 to-yellow-200/0 md:pt-12 md:rounded-full"
        />
      </div>
    </div>
  );
};

const CardContent: React.FC<{ 
  title: React.ReactNode; 
  description: string; 
  buttonText: string; 
  linkHref: string;
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
}> = ({ title, description, buttonText, linkHref, visibility }) => {
  const visibilityClasses = visibility ? getResponsiveVisibilityClasses(visibility) : '';
  
  return (
    <div className={`absolute md:relative z-10 rounded-3xl w-full h-auto flex flex-col text-balance justify-start items-center md:items-start gap-4 md:pl-16 lg:pl-24 ${visibilityClasses}`}>
      <h2 id="card-title" className="text-center md:text-start text-balance font-semibold text-4xl md:text-7xl px-2 md:px-0">{title}</h2>
      <p className="text-xl text-center md:text-start">{description}</p>
      <a href={linkHref} className="hidden md:block relative bg-purple-100 cursor-pointer hover:bg-purple-200 text-purple-900 font-bold px-8 py-4 rounded-full">{buttonText}</a>
    </div>
  );
};

const CardButton: React.FC<{ 
  buttonText: string; 
  linkHref: string;
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
}> = ({ buttonText, linkHref, visibility }) => {
  const visibilityClasses = visibility ? getResponsiveVisibilityClasses(visibility) : '';
  
  return (
    <div className={`absolute md:relative z-10 w-full h-auto flex flex-col text-balance justify-end items-center md:items-start px-8 pb-8 ${visibilityClasses}`}>
      <a href={linkHref} className="md:hidden bg-yellow-500 hover:bg-purple-200 text-purple-900 uppercase font-bold px-6 py-4 rounded-full">{buttonText}</a>
    </div>
  );
};

class HeroSecs extends React.Component<HeroSecsProps> {
  static defaultProps = {
    title: "Default Title",
    description: "Default Description",
    imageSrc: "/default-image.webp",
    imageAlt: "Default Image",
    linkHref: "#",
    backgroundColor: "#f8f8f8",
    CardButton: "true",
  };

  render() {
    const { 
      title, 
      description, 
      imageSrc, 
      imageAlt, 
      linkHref, 
      backgroundImage, 
      backgroundColor, 
      backDropBlur, 
      buttonText, 
      cardButton, 
      className,
      // Individual visibility controls
      imageVisibility,
      contentVisibility,
      buttonVisibility,
      backgroundVisibility,
      // Legacy props for backward compatibility
      hideOnMobile,
      hideOnTablet,
      hideOnDesktop,
      showOnMobile,
      showOnTablet,
      showOnDesktop
    } = this.props;

    // Legacy visibility props (apply to all if no individual controls are set)
    const legacyVisibility = {
      hideOnMobile,
      hideOnTablet,
      hideOnDesktop,
      showOnMobile,
      showOnTablet,
      showOnDesktop
    };

    // Use individual visibility props if provided, otherwise fall back to legacy props
    const finalImageVisibility = imageVisibility || legacyVisibility;
    const finalContentVisibility = contentVisibility || legacyVisibility;
    const finalButtonVisibility = buttonVisibility || legacyVisibility;
    const finalBackgroundVisibility = backgroundVisibility || legacyVisibility;

    return (
      <div className='relative flex flex-col h-screen w-full rounded-b-3xl z-50'>
        {backgroundImage && (
          <Image 
            src={backgroundImage}
            alt="Background image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
            loading="lazy"
            className={`relative object-top object-cover rounded-b-3xl backdrop-blur ${getResponsiveVisibilityClasses(finalBackgroundVisibility)}`}
          />
        )}
        <Header />
        <div className={`relative flex flex-col md:flex-row h-screen w-full justify-end items-center text-white rounded-b-3xl flex-1 overflow-hidden ${className} ${backDropBlur} ${backgroundColor}`} role="region" aria-labelledby="card-title">      
          <div className='relative flex flex-col flex-1 w-full h-screen justify-around md:justify-center items-center'>
            {title && description && linkHref && buttonText && (
              <CardContent 
                title={title} 
                description={description} 
                buttonText={buttonText} 
                linkHref={linkHref}
                visibility={finalContentVisibility}
              />
            )}
          </div>
          <div className='flex flex-col w-full md:flex-1 md:pt-20 justify-end items-center'>
            {imageSrc && imageAlt && (
              <CardImage 
                src={imageSrc} 
                alt={imageAlt}
                visibility={finalImageVisibility}
              />
            )}
          </div>
        </div>
        <div className="absolute md:hidden flex flex-col md:flex-row h-screen w-full justify-end items-center">
          {cardButton && linkHref && buttonText && (
            <CardButton 
              buttonText={buttonText} 
              linkHref={linkHref}
              visibility={finalButtonVisibility}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HeroSecs;

