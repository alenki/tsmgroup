export interface Company {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  color: string;
  logo: string;
}

export const companies: Company[] = [
  {
    name: 'Maestro Event',
    slug: 'maestro',
    tagline: 'Event Orchestration',
    description:
      'Maestro Event specializes in comprehensive event and exhibition management, delivering world-class experiences for corporate and public events across the Kingdom of Saudi Arabia.',
    color: '#E84393',
    logo: '/maestro.png',
  },
  {
    name: 'Saudi Blantex',
    slug: 'blantex',
    tagline: 'Fabrics & Textiles',
    description:
      'Saudi Blantex Factory is a leading manufacturer of premium fabrics and textiles, serving the growing demand for high-quality textile products in the Saudi market and beyond.',
    color: '#C8102E',
    logo: '/saudiblantex.png',
  },
  {
    name: 'Pronto',
    slug: 'pronto',
    tagline: 'Furniture Manufacturing',
    description:
      'Pronto Furniture Factory produces exceptional quality furniture for residential and commercial projects, combining modern design with traditional craftsmanship.',
    color: '#D4A06A',
    logo: '/pronto.png',
  },
  {
    name: 'TSM Security',
    slug: 'security',
    tagline: 'Cybersecurity Solutions',
    description:
      'TSM Security provides comprehensive cybersecurity and digital protection solutions, safeguarding businesses and institutions across the Kingdom with cutting-edge technology.',
    color: '#0984E3',
    logo: '/tsmsecurity.png',
  },
];
