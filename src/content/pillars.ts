export const pillarIds = [
  'digital-liberty',
  'technology-policy',
  'learning',
  'dialogue',
  'civic-innovation',
] as const;
export const pillars = [
  {
    id: 'digital-liberty',
    number: '01',
    title: 'Digital Liberty & Rights',
    short: 'Freedom in a connected world.',
    description:
      'Privacy, expression and digital autonomy. Exploring how people can participate online with confidence and dignity.',
    question:
      'How can digital systems protect individual choice and fundamental rights?',
    activities: [
      'Privacy and digital rights explainers',
      'Cybersecurity awareness sessions',
      'Open internet and inclusion dialogues',
    ],
    audience:
      'Civil society, researchers, communities and technology practitioners',
    icon: 'rights',
  },
  {
    id: 'technology-policy',
    number: '02',
    title: 'Technology & Public Policy',
    short: 'Better questions. Better policy.',
    description:
      'Evidence-led thinking on AI, public-interest technology and regulation that makes room for responsible innovation.',
    question:
      'What does accountable, innovation-friendly technology policy look like in Nepal?',
    activities: [
      'Policy research and briefs',
      'AI governance discussions',
      'Public policy literacy resources',
    ],
    audience:
      'Policymakers, universities, technologists and public institutions',
    icon: 'policy',
  },
  {
    id: 'learning',
    number: '03',
    title: 'Learning & Capacity Building',
    short: 'Capability belongs to everyone.',
    description:
      'Practical digital skills and policy literacy to help people understand technology and make informed choices.',
    question:
      'How can practical learning help more people shape technological change?',
    activities: [
      'Digital skills workshops',
      'Responsible technology learning',
      'Policy bootcamps and educator sessions',
    ],
    audience: 'Students, educators, early-career professionals and communities',
    icon: 'learning',
  },
  {
    id: 'dialogue',
    number: '04',
    title: 'Dialogue & Public Engagement',
    short: 'Progress begins with listening.',
    description:
      'Space for informed disagreement and shared understanding across disciplines, institutions and communities.',
    question:
      'Whose voices need to be heard in decisions about our digital future?',
    activities: [
      'Public forums and discussions',
      'Multi-stakeholder roundtables',
      'Technology and society conversations',
    ],
    audience:
      'Civil society, public agencies, researchers and the wider public',
    icon: 'dialogue',
  },
  {
    id: 'civic-innovation',
    number: '05',
    title: 'Civic Innovation & Hackathons',
    short: 'Ideas made useful.',
    description:
      'Collaborative exploration of public-interest challenges through policy hackathons, prototyping and shared learning.',
    question: 'What can we learn by testing public-interest ideas together?',
    activities: [
      'Policy hackathons',
      'Interdisciplinary prototyping labs',
      'Public-interest technology challenges',
    ],
    audience:
      'Makers, students, designers, researchers and institutional partners',
    icon: 'innovation',
  },
] as const;
