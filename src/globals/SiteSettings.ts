import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Site Logo',
    },
    {
      name: 'nav',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        { name: 'email', type: 'email', defaultValue: 'info@genflat.com' },
        { name: 'address', type: 'text', defaultValue: '1540 Santa Fe Ave, Long Beach, CA 90813' },
        { name: 'copyright', type: 'text', defaultValue: 'GenFlat Holdings, Inc. © 2024' },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          fields: [
            { name: 'platform', type: 'text' },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'design',
      type: 'group',
      label: 'Design Tokens',
      fields: [
        { name: 'primaryColor', type: 'text', defaultValue: '#1a1a1a', label: 'Primary Color (hex)' },
        { name: 'accentColor', type: 'text', defaultValue: '#c8a84b', label: 'Accent Color (hex)' },
        { name: 'fontHeading', type: 'select', options: ['Inter', 'Montserrat', 'Bebas Neue', 'Oswald'], defaultValue: 'Montserrat' },
        { name: 'fontBody', type: 'select', options: ['Inter', 'Open Sans', 'Roboto'], defaultValue: 'Inter' },
      ],
    },
  ],
}
