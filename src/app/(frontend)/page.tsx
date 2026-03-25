import { getPayloadClient } from '@/lib/payload'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProcessSection from '@/components/sections/ProcessSection'
import NumbersSection from '@/components/sections/NumbersSection'
import ValuePropsSection from '@/components/sections/ValuePropsSection'
import WhyGenFlatSection from '@/components/sections/WhyGenFlatSection'
import SpecsSection from '@/components/sections/SpecsSection'
import ContactFormSection from '@/components/sections/ContactFormSection'

export const revalidate = 60

export default async function HomePage() {
  const payload = await getPayloadClient()
  const homeData = await payload.findGlobal({ slug: 'home-page' })

  return (
    <main>
      <HeroSection data={homeData.hero} />
      <AboutSection data={homeData.about} />
      <ProcessSection data={homeData.process} />
      <NumbersSection data={homeData.numbers} />
      <ValuePropsSection data={homeData.valueProps} />
      <WhyGenFlatSection data={homeData.whyGenflat} />
      <SpecsSection data={homeData.specs} />
      <ContactFormSection data={homeData.contactForm} />
    </main>
  )
}
