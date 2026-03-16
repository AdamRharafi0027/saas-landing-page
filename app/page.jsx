import Header from '@/components/sections/Header.jsx/Header'
import Hero from '@/components/sections/Hero/Hero'
import SocialProof from '@/components/sections/SocialProof/SocialProof'


const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#09090B] overflow-x-hidden">
      <Header />
      <Hero />
      <SocialProof />
    </div>
  )
}

export default Home