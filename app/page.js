import About from '@/components/homepage/About'
import ChooseUs from '@/components/homepage/ChooseUs'
import Contact from '@/components/homepage/Contact'
import Landing from '@/components/homepage/Landing'
import Navbar from '@/components/homepage/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      <Navbar />
      <Landing />
      <About />
      <ChooseUs />
      <Contact />
    </main>
  )
}
