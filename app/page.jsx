import Footer from '@/components/sections/Footer/Footer'
import Features  from '@/components/sections/Features/Feauters'
import FinalCTA from '@/components/sections/FinalCTA/FinalCTA'
import Header from '@/components/sections/Header.jsx/Header'
import Hero from '@/components/sections/Hero/Hero'
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks'
import Pricing from '@/components/sections/Pricing/Pricing'
import SocialProof from '@/components/sections/SocialProof/SocialProof'
import Testimonials from '@/components/sections/Testimonials/Testimonials'


const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#09090B] overflow-x-hidden">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default Home