import Footer from '@/components/Homepage/Footer'
import Header from '@/components/Homepage/Header'
import OurServices from '@/components/Homepage/OurServices'
import PatientReview from '@/components/Homepage/PatientReview'
import ProjectDetails from '@/components/Homepage/ProjectDetails'
import ProfessionalsSection from '@/components/Homepage/ProfessionalsSection'

export default function Page() {
  return (
    <div>
      <Header /> 
        
      <OurServices />
      <PatientReview />
      <ProfessionalsSection />     
      <ProjectDetails />
      <Footer />
    </div>
  )
}