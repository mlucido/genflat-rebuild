// Seed via Payload REST API — run while dev server is running
// First create a user, then use that to authenticate

const BASE = 'http://localhost:3000/api'

async function seed() {
  // Create first user
  console.log('Creating admin user...')
  let token
  try {
    const userRes = await fetch(`${BASE}/users/first-register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@genflat.com',
        password: 'genflat2024',
      }),
    })
    const userData = await userRes.json()
    token = userData.token
    if (!token) {
      // Maybe user already exists — try login
      const loginRes = await fetch(`${BASE}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@genflat.com',
          password: 'genflat2024',
        }),
      })
      const loginData = await loginRes.json()
      token = loginData.token
    }
    console.log('Got token:', token ? 'yes' : 'no')
  } catch (e) {
    console.log('User creation/login failed:', e.message)
  }

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `JWT ${token}` } : {}),
  }

  // Seed SiteSettings
  console.log('Seeding SiteSettings...')
  await fetch(`${BASE}/globals/site-settings`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
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
        fontBody: 'Roboto',
      },
    }),
  }).then(r => r.json()).then(d => console.log('  SiteSettings:', d.id ? 'ok' : d))

  // Seed HomePage
  console.log('Seeding HomePage...')
  await fetch(`${BASE}/globals/home-page`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
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
          { title: 'Safe and Secure Multi-Modal Transport', description: "Your Existing Operations Don't Change. GenFlat Containers lock together when collapsed – 4 collapsed container units take up the space of 1 Standard Marine Container." },
          { title: 'Cost Savings', description: 'Reduces repositioning costs by up to 75%.' },
          { title: 'Space Creating', description: 'Reduces overall congestion at ports, terminals, depots and related storage facilities and removes the burden of finding solutions to capacity constraints.' },
          { title: 'Carbon Emission Reduction', description: 'Fewer transportation moves = reduced fuel consumption, reduced traffic and reduced emissions.' },
          { title: 'The Genny', description: 'The Genny is key to collapsing the GenFlat collapsible container. The Genny attaches to standard forklifts and requires no power or hydraulics.' },
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
    }),
  }).then(r => r.json()).then(d => console.log('  HomePage:', d.id ? 'ok' : d))

  // Seed InvestorPage
  console.log('Seeding InvestorPage...')
  await fetch(`${BASE}/globals/investor-page`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      heading: 'INVESTOR INFORMATION',
      companyName: 'GenFlat Holdings, Inc.',
      address: '1540 Santa Fe Ave\nLong Beach, CA 90813',
      secCikNumber: '1796949',
    }),
  }).then(r => r.json()).then(d => console.log('  InvestorPage:', d.id ? 'ok' : d))

  // Seed news article
  console.log('Seeding news article...')
  await fetch(`${BASE}/news-articles`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      title: 'GenFlat has been recognized as...',
      slug: 'genflat-most-inspiring-container-technology-2023',
      publishedDate: '2023-10-15',
      excerpt: "We are thrilled to announce that GenFlat has been recognized as the 'Most Inspiring Container Technology' of 2023 at the prestigious Transport and Logistics Conference in the Middle East.",
      status: 'published',
    }),
  }).then(r => r.json()).then(d => console.log('  News:', d.doc?.id || d.id ? 'ok' : d))

  console.log('Seed complete!')
}

seed().catch(e => { console.error('Seed failed:', e); process.exit(1) })
