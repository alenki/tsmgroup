export const siteContent = {
  hero: {
    tagline: 'Building Excellence\nAcross The Kingdom',
    established: 'Established 1997',
    location: 'Riyadh, Saudi Arabia',
  },

  about: {
    paragraphs: [
      'TSM Group of Companies was established in 1997 to cover the growing demand in the local market in different sectors. The Group has grown with the time to more than five leading companies in various commercial activities.',
      "This expansion came by Allah's reconcile primarily, then by continuous effort on the expansion plans and studies to develop the business of these companies followed by constructed investments.",
      'The Group aimed since the beginning an expansion strategy based on diversifications of the commercial activities to include textile manufacturing, event management, medical services, furniture production, and security solutions.',
      "The Group's business activities covered many areas within the Kingdom of Saudi Arabia, in addition to various commercial activities such as supply of automobile, vehicles & building armory, telecommunication & electronics trading, and real estate.",
    ],
    activities: [
      {
        title: 'Textile Manufacturing',
        company: 'Saudi Blantex Factory for Fabrics and Textiles',
        icon: 'textile',
      },
      {
        title: 'Event & Exhibition Management',
        company: 'Maestro Event Orchestration',
        icon: 'event',
      },
      {
        title: 'Medical Sector',
        company: 'Thiqa Medical Company',
        icon: 'medical',
      },
      {
        title: 'Furniture Manufacturing',
        company: 'Pronto Furniture Factory',
        icon: 'furniture',
      },
    ],
  },

  chairman: {
    name: 'Chairman of the Board',
    paragraphs: [
      "In the journey of life, our destinies were written.. Some of us are destined to be a doctor, a scientist, a teacher, or a merchant.. and everyone becomes what Allah destined for him. Glory ways are not associated with the profession but with insistence, the pace steady, perfect vision, and determination to launch its owner unleashed to reach the highest peaks.",
      "Eagle doesn't fold its wings and stop flying as long as there is a summit was not reached. This is my belief depending on Allah and adhering to teachings of Islam and the morality instilled into me since I grew up on the land of the Kingdom.",
      "Humbly, I believe that what we have come in our company even though our modest starting would not have been without the help of Allah Almighty and then my parent's satisfaction and my determination to overcome all obstacles and advancement after every bump with greater determination until our TSM Group attained prestigious position among the major companies on the road to sustainable development.",
      "I do not think I have achieved all what I aspire but certainly I am walking on the right path by Allah's help and guidance. I consider the paradigm shift that has been in the history of our Group will be conveyed by many variables to keep pace with contemporary trends, whether it's on a human level, or technical, or on the level of services provided to meet our customers demands and to achieve their aspirations with the highest degree of quality and proficiency.",
    ],
  },

  contact: {
    tel: '+966 11 4660 120',
    fax: '+966 11 4660 292',
    address: 'P.O.Box: 13650, Riyadh 11414, Saudi Arabia',
  },

  footer: {
    copyright: `Copyright \u00A9 ${new Date().getFullYear()} TSM Group. All Rights Reserved.`,
  },
} as const;
