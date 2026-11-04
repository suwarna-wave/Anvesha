import brand from '../content/brand.json';
const publicEmail = import.meta.env.PUBLIC_CONTACT_EMAIL?.trim() || '';
if (publicEmail && !/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(publicEmail)) {
  throw new Error('PUBLIC_CONTACT_EMAIL must contain a valid email address.');
}
export const organization = {
  ...brand,
  shortName: brand.name,
  tagline: `${brand.taglineLead} ${brand.taglineAccent}`,
  location: 'Nepal',
  locale: 'en',
  email: publicEmail,
  indexable: import.meta.env.PUBLIC_INDEXABLE === 'true',
};
export const navigation = [
  { href: '/about', label: 'About' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/events', label: 'Events' },
  { href: '/get-involved', label: 'Get Involved' },
];
export const inquiryTopics = [
  'General',
  'Research',
  'Media',
  'Events',
  'Partnerships',
  'Grants',
  'Other',
] as const;
