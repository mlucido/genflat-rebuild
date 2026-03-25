import { getPayload } from 'payload'
import config from '../../payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding SiteSettings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      nav: [
        { label: 'About', href: '#about' },
        { label: 'The Process', href: '#process' },
        { label: 'Why GenFlat', href: '#whygenflat' },
        { label: 'Specs', href: '#specs' },
        { label: 'News', href: '/news' },
        { label: 'Investor Information', href: '/investor-information' },
      ],
      footer: {
        email: 'info@genflat.com',
        address: '1540 Santa Fe Ave. Long Beach, CA 90813',
        copyright: 'GenFlat Holdings, Inc. © 2023',
        socialLinks: [
          { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/genflat/' },
        ],
      },
      design: {
        primaryColor: '#373C48',
        accentColor: '#F07922',
        fontHeading: 'Darwin Pro',
        fontBody: 'Inter',
      },
    },
  })

  console.log('Seeding HomePage...')
  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      hero: {
        headline: 'Maximizing efficiency.',
        subheadline: 'Minimizing footprint.',
        ctaText: 'Ready to save money, optimize space, and reduce carbon emissions?',
      },
      about: {
        heading: 'The Answer to the $20 Billion Empty Container Repositioning Problem',
        body: 'The GenFlat Container is engineered to be a substitute for the standard Marine Container. Built from mild steel and Corten, GenFlat exceeds current strength and rigidity standards.\n\nOnce four GenFlat containers are stacked and locked together, they can be lifted as a single unit, ready for multi-modal transport.',
        ctaText: 'LEARN MORE',
      },
      process: {
        heading: '80 seconds',
        subheading: 'to Collapse Start to Finish.',
        steps: [
          { stepLabel: 'Expand', description: 'The Genny attaches to the forks of a forklift and is secured to the forklift with a safety chain.' },
          { stepLabel: 'Unlock', description: 'The forklift operator pushes the Genny wheels against the door while locking the end frame into the roof.' },
          { stepLabel: 'Collapse', description: 'The patented Genny safely collapses and locks the GenFlat Container in under 60 seconds.' },
          { stepLabel: 'Stack', description: 'Locking technology stacks 4 empty GenFlats into the space of one High Cube Marine Container.' },
        ],
      },
      numbers: {
        footnote: '*average cost savings from US Midwest to Asia',
        stats: [
          { label: 'Cost Savings per FEU Move', value: 800, prefix: '$' },
          { label: 'Cost Savings per FEU Annual', value: 3200, prefix: '$' },
          { label: 'Cost Savings per FEU Usual Life', value: 40000, prefix: '$' },
        ],
      },
      valueProps: {
        heading: 'GenFlat Value Propositions',
        props: [
          { title: 'Safe and Secure Multi-Modal Transport', description: "Your Existing Operations Don't Change. GenFlat Containers lock together when collapsed – 4 collapsed container units take up the space of 1 Standard Marine Container. The GenFlat container makes for secure multi-modal transport by train, truck, and ship." },
          { title: 'Cost Savings', description: 'Reduces repositioning costs by up to 75%.' },
          { title: 'Space Creating', description: 'Reduces overall congestion at ports, terminals, depots and related storage facilities and removes the burden of finding solutions to capacity constraints.' },
          { title: 'Carbon Emission Reduction', description: 'Fewer transportation moves = reduced fuel consumption, reduced traffic and reduced emissions.' },
          { title: 'The Genny', description: 'The Genny is key to collapsing the GenFlat collapsible container. The Genny attaches to standard forklifts and requires no power or hydraulics. Once the end doors are safely unlocked, the forklift applies pressure to the container door, pushing it into a locking position in the roof of the container. To expand the container, the doors are released from the upper cam latches causing the weight of the door to swing down and lock into the lower cam latches. The containers can be collapsed in under 60 seconds and expanded in under 15 seconds.' },
        ],
      },
      whyGenflat: {
        fullyLoadedPoints: [
          { point: 'Same internal dimensions' },
          { point: 'Same capacity and payload' },
          { point: 'Same cargo protection' },
          { point: 'ISO tested and certified + water tight' },
        ],
        emptyPoints: [
          { point: 'At ports, terminals, depots and yards – 5 to 20 stacked containers' },
          { point: 'Ships – 15,000 to 60,000 stacked containers' },
          { point: 'Trains – 2 to 8 stacked containers' },
          { point: 'Trucks – 1 to 4 stacked containers' },
        ],
      },
      specs: {
        heading: 'Technical Specifications',
        totalLength: '40 ft',
        maxGrossWeight: '32,500 kgs',
        tareWeight: '5,300 kgs',
        payload: '27,200 kgs',
        internalLength: '12,192 mm',
        internalWidth: '2,438 mm',
        internalHeight: '2,591 mm',
      },
      contactForm: {
        heading: 'Learn More about GenFlat',
        subheading: 'Sign up here to receive more information and breaking news on our revolutionary container and actuator system.',
        submitButtonText: 'CONTACT US',
      },
    },
  })

  console.log('Seeding InvestorPage...')
  await payload.updateGlobal({
    slug: 'investor-page',
    data: {
      heading: 'INVESTOR INFORMATION',
      companyName: 'GenFlat Holdings, Inc.',
      address: '1540 Santa Fe Ave\nLong Beach, CA 90813',
      secCikNumber: '1796949',
      importantNotice: 'The offered securities are offered pursuant to a claim of exemption from registration requirements of federal and state securities laws. A registration statement relating to these securities has not been filed with the Securities and Exchange Commission. No state or federal commission has approved or disapproved these securities, nor passed upon the accuracy or adequacy of our offering documents. Any representation to the contrary is a criminal offense.',
    },
  })

  console.log('Seeding news article...')
  const existing = await payload.find({
    collection: 'news-articles',
    where: { slug: { equals: 'genflat-most-inspiring-container-technology-2023' } },
    limit: 1,
  })
  if (existing.docs.length === 0) {
    await payload.create({
      collection: 'news-articles',
      data: {
        title: 'GenFlat has been recognized as...',
        slug: 'genflat-most-inspiring-container-technology-2023',
        publishedDate: '2023-10-15',
        excerpt: "We are thrilled to announce that GenFlat has been recognized as the 'Most Inspiring Container Technology' of 2023 at the prestigious Transport and Logistics Conference in the Middle East.",
        status: 'published',
      },
    })
  }

  console.log('Seed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
