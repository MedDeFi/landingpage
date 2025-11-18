import Image from "next/image";
import Link from "next/link";
import { ContactInfo } from "../ui/ContactInfo";

const footer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-12 " id="first-section">
      <div className="bg-black rounded-3xl w-full pb-16 p-12 w-full lg:max-w-7xl lg:p-20">
        <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className='col-span-4'>
           <div className='flex md:flex-row flex-col items-around justify-between gap-4'>
             <h3 className='text-white text-4xl font-semibold leading-9'>
  <span className="relative inline-block">
    <span className="
      md:text-6xl text-5xl font-bold 
      text-transparent 
      bg-clip-text 
      bg-[url('/images/dental-vacations-costa-rica.webp')]
      bg-cover
      bg-center
    ">
      Costa Rica 
    </span>
  </span>
  <br /> Dental Implant Center 
</h3>

              <div className='footer-icons flex flex-col items-center justify-center gap-4'>
                <h4 className="text-purple-100 md:text-xl font-semibold">Join us on</h4>
                <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
              </div>
             
            </div>
          </div>
          {/* CLOUMN-2/3 */}
          
            <div className="group relative col-span-2 w-full">
           <ContactInfo />
            </div>
          
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className='text-center md:text-start text-white text-lg'>@2010 - All Rights Reserved by Dental Implant Center Costa Rica</h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-white pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-white pl-6 border-solid border-l border-footer">Terms & conditions</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer;