import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'headline', type: 'text', required: true, defaultValue: 'Maximizing efficiency.' },
        { name: 'subheadline', type: 'text', defaultValue: 'Minimizing footprint.' },
        { name: 'ctaText', type: 'text', defaultValue: 'Ready to save money, optimize space, and reduce carbon emissions?' },
        {
          name: 'videos',
          type: 'array',
          label: 'Hero Videos',
          fields: [
            { name: 'video', type: 'upload', relationTo: 'media', required: true },
          ],
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'The Answer to the $20 Billion Empty Container Repositioning Problem' },
        { name: 'body', type: 'textarea', defaultValue: 'The GenFlat Container is engineered to be a substitute for the standard Marine Container...' },
        { name: 'ctaText', type: 'text', defaultValue: 'LEARN MORE' },
      ],
    },
    {
      name: 'process',
      type: 'group',
      label: 'Process Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: '80 seconds to Collapse' },
        { name: 'subheading', type: 'text', defaultValue: 'Start to Finish.' },
        {
          name: 'steps',
          type: 'array',
          label: 'Process Steps',
          maxRows: 4,
          fields: [
            { name: 'stepLabel', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
    {
      name: 'numbers',
      type: 'group',
      label: 'By the Numbers',
      fields: [
        { name: 'footnote', type: 'text', defaultValue: '*average cost savings from US Midwest to Asia' },
        {
          name: 'stats',
          type: 'array',
          label: 'Stats',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'number', required: true },
            { name: 'prefix', type: 'text', defaultValue: '$' },
          ],
        },
      ],
    },
    {
      name: 'valueProps',
      type: 'group',
      label: 'Value Propositions',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'GenFlat Value Propositions' },
        {
          name: 'props',
          type: 'array',
          label: 'Props',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
    {
      name: 'whyGenflat',
      type: 'group',
      label: 'Why GenFlat Section',
      fields: [
        {
          name: 'fullyLoadedPoints',
          type: 'array',
          label: '"Fully Loaded" Bullet Points',
          fields: [{ name: 'point', type: 'text', required: true }],
        },
        {
          name: 'emptyPoints',
          type: 'array',
          label: '"Empty" Bullet Points',
          fields: [{ name: 'point', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'specs',
      type: 'group',
      label: 'Technical Specifications',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Technical Specifications' },
        { name: 'totalLength', type: 'text', defaultValue: '40 ft' },
        { name: 'maxGrossWeight', type: 'text', defaultValue: '32,500 kgs' },
        { name: 'tareWeight', type: 'text', defaultValue: '5,300 kgs' },
        { name: 'payload', type: 'text', defaultValue: '27,200 kgs' },
        { name: 'internalLength', type: 'text', defaultValue: '12,192 mm' },
        { name: 'internalWidth', type: 'text', defaultValue: '2,438 mm' },
        { name: 'internalHeight', type: 'text', defaultValue: '2,591 mm' },
      ],
    },
    {
      name: 'contactForm',
      type: 'group',
      label: 'Contact/Lead Form',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Learn More about GenFlat' },
        { name: 'subheading', type: 'text', defaultValue: 'Sign up here to receive more information and breaking news on our revolutionary container and actuator system.' },
        { name: 'submitButtonText', type: 'text', defaultValue: 'CONTACT US' },
      ],
    },
  ],
}
