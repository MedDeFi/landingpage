import { HeroTitleDoc, HeroImage, WaitlistButton } from '../uishared/HeroSectionParts';
import { HeroBackground } from '../uishared/HeroBackground';
import { HeroContainer } from '../uishared/HeroContainer';
import { HeroLayout, HeroContentSection, HeroMobileLayout } from '../uishared/HeroLayout';

interface HeroSectionDoctorProps {
  onOpenModal?: () => void;
}

const HeroSectionDoctor = ({ onOpenModal }: HeroSectionDoctorProps) => {

  return (
    <>
      {/* Desktop (large screens - 1024px and above) */}
      <div key="desktop-hero" className="hidden lg:block z-40 h-screen"
           style={{ 
             padding: 'var(--hero-padding-sm)',
             paddingTop: 'var(--hero-padding-md)'
           }}>
        <HeroContainer variant="desktop">
          <HeroBackground className="lg:w-1/2" 
                          style={{ 
                            marginRight: 'var(--hero-margin-md)',
                            marginTop: 'var(--hero-spacing-xl)',
                            marginBottom: 'var(--hero-spacing-xl)'
                          }} />
          <HeroLayout>
            <HeroContentSection>
              <HeroTitleDoc />
              <div className="flex" style={{ marginTop: 'var(--hero-spacing-md)' }}>
                <WaitlistButton onClick={() => onOpenModal?.()} />
              </div>
            </HeroContentSection>
          </HeroLayout>
        </HeroContainer>
      </div>

      {/* Tablet (medium screens - 768px to 1023px) */}
      <div key="tablet-hero" className="hidden md:flex lg:hidden z-40 h-auto w-full"
           style={{ 
             padding: 'var(--hero-padding-sm)',
             paddingTop: 'var(--hero-padding-md)'
           }}>
        <HeroContainer variant="tablet">
          <HeroBackground 
            className="w-1/2" 
            imageClassName="max-h-[500px] max-w-[500px] object-cover object-top"
            style={{ 
              marginRight: 'var(--hero-margin-md)',
              marginTop: 'var(--hero-spacing-lg)',
              marginBottom: 'var(--hero-spacing-lg)'
            }}
          />
          <HeroLayout className="justify-start items-center">
            <HeroContentSection className="items-center text-center">
              <HeroTitleDoc />
            </HeroContentSection>
          </HeroLayout>
        </HeroContainer>
      </div>

      {/* Mobile (small screens) */}
      <div className="md:hidden mb-8 shadow-xl rounded-3xl h-screen">
        <HeroContainer variant="mobile">
          <HeroMobileLayout showGradient={true}>
            <div className="flex flex-col w-full min-h-screen items-center justify-center">
              <div className="relative" style={{ paddingTop: 'clamp(6rem, 15vw, 10rem)' }}>
                <HeroTitleDoc />
              </div>
              <div className="relative flex-1 flex flex-col items-center justify-end h-full w-full">
                <div className="relative flex items-center justify-center w-full">
                  <HeroImage className="min-w-3/5 max-w-4/5 min-h-auto max-h-auto" alt="Nurse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </HeroMobileLayout>
        </HeroContainer>
      </div>
    </>
  );
};

export default HeroSectionDoctor;