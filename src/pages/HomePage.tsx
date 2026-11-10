import CtaBand from '../components/CtaBand'
import ElevateStats from '../components/ElevateStats'
import Hero from '../components/Hero'
import Industries from '../components/Industries'
import LiveCounter from '../components/LiveCounter'
import Outcomes from '../components/Outcomes'
import Platform from '../components/Platform'
import Reveal from '../components/Reveal'
import Testimonials from '../components/Testimonials'
import Trust from '../components/Trust'

export default function HomePage() {
  return (
    <>
      <Reveal />
      <Hero />
      <ElevateStats />
      <LiveCounter />
      <Outcomes />
      <Industries />
      <Testimonials />
      <Platform />
      <Trust />
      <CtaBand />
    </>
  )
}
