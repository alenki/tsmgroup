import type { Lang } from '../context/LanguageContext';

const translations = {
  en: {
    nav: {
      about: 'About',
      chairman: "Chairman's Message",
      companies: 'Companies',
      clients: 'Clients',
      contact: 'Contact Us',
    },

    hero: {
      taglineLine1: ['Building', ' Excellence'],
      taglineLine2: ['Across The', ' Kingdom'],
      established: 'Est. 1997',
      location: 'Riyadh, Saudi Arabia',
      meta: 'Diversified Conglomerate',
      cta: 'Get In Touch',
      scroll: 'Scroll',
    },

    about: {
      headingTop: 'About',
      headingBottom: 'The Group',
      accentLabel: 'Leading Companies',
      accentNumber: "Since '97",
      paragraphs: [
        'TSM Group of Companies was established in 1997 to cover the growing demand in the local market in different sectors. The Group has grown with the time to four leading companies in various commercial activities.',
        "This expansion came by Allah's reconcile primarily, then by continuous effort on the expansion plans and studies to develop the business of these companies followed by constructed investments.",
        'The Group aimed since the beginning an expansion strategy based on diversifications of the commercial activities to include textile manufacturing, event management, medical services, furniture production, and security solutions.',
        "The Group's business activities covered many areas within the Kingdom of Saudi Arabia, in addition to various commercial activities such as supply of automobile, vehicles & building armory, telecommunication & electronics trading, and real estate.",
      ],
      divider: 'Our Sectors',
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

    stats: [
      { value: 28, suffix: '+', label: 'Years of Excellence' },
      { value: 4, suffix: '', label: 'Leading Companies' },
      { value: 43, suffix: '+', label: 'Trusted Clients' },
      { value: 1997, suffix: '', label: 'Year Established' },
    ],

    chairman: {
      name: 'Thamer Bin Saud Al Muraibdh',
      verticalLabel: "Chairman's Message",
      labelAbove: 'A Message From',
      headingTop: 'The',
      headingBottom: 'Chairman',
      role: 'TSM Group of Companies',
      pullQuote:
        "\u201CEagle doesn\u2019t fold its wings and stop flying as long as there is a summit was not reached.\u201D",
      paragraphs: [
        "In the journey of life, our destinies were written.. Some of us are destined to be a doctor, a scientist, a teacher, or a merchant.. and everyone becomes what Allah destined for him. Glory ways are not associated with the profession but with insistence, the pace steady, perfect vision, and determination to launch its owner unleashed to reach the highest peaks.",
        "Eagle doesn\u2019t fold its wings and stop flying as long as there is a summit was not reached. This is my belief depending on Allah and adhering to teachings of Islam and the morality instilled into me since I grew up on the land of the Kingdom.",
        "Humbly, I believe that what we have come in our company even though our modest starting would not have been without the help of Allah Almighty and then my parent\u2019s satisfaction and my determination to overcome all obstacles and advancement after every bump with greater determination until our TSM Group attained prestigious position among the major companies on the road to sustainable development.",
        "I do not think I have achieved all what I aspire but certainly I am walking on the right path by Allah\u2019s help and guidance. I consider the paradigm shift that has been in the history of our Group will be conveyed by many variables to keep pace with contemporary trends, whether it\u2019s on a human level, or technical, or on the level of services provided to meet our customers demands and to achieve their aspirations with the highest degree of quality and proficiency.",
      ],
    },

    companies: {
      headingTop: 'Our',
      headingBottom: 'Companies',
      description:
        'A diversified portfolio of companies serving industries across the Kingdom of Saudi Arabia.',
      explore: 'Explore',
      items: [
        {
          name: 'Maestro Event',
          slug: 'maestro',
          tagline: 'Event Orchestration',
          description:
            'Maestro Event specializes in comprehensive event and exhibition management, delivering world-class experiences for corporate and public events across the Kingdom of Saudi Arabia.',
          color: '#2D7DD2',
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
          color: '#C8102E',
          logo: '/tsmsecurity.png',
        },
      ],
    },

    clients: {
      headingTop: 'Our',
      headingBottom: 'Clients',
    },

    contact: {
      headingTop: 'Contact',
      headingBottom: 'Us',
      tel: '+966 11 4660 120',
      telLabel: 'Telephone',
      fax: '+966 11 4660 292',
      faxLabel: 'Fax',
      address: 'P.O.Box: 13650, Riyadh 11414, Saudi Arabia',
      addressLabel: 'Address',
      formName: 'Full Name',
      formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formEmailPlaceholder: 'your@email.com',
      formPhone: 'Phone',
      formPhonePlaceholder: '+966...',
      formCompany: 'Company',
      formCompanyPlaceholder: 'Company name',
      formMessage: 'Message',
      formMessagePlaceholder: 'How can we help you?',
      formSubmit: 'Send Message',
      formSubmitted: 'Message Sent',
    },

    footer: {
      tagline: 'Building Excellence Across The Kingdom',
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} TSM Group. All Rights Reserved.`,
      about: 'About',
      companies: 'Companies',
      contact: 'Contact',
    },

    loader: {
      established: 'Est. 1997',
    },
  },

  ar: {
    nav: {
      about: 'عن المجموعة',
      chairman: 'كلمة رئيس مجلس الإدارة',
      companies: 'شركات المجموعة',
      clients: 'عملائنا',
      contact: 'اتصل بنا',
    },

    hero: {
      taglineLine1: ['بناء', ' التميز'],
      taglineLine2: ['عبر أرجاء', ' المملكة'],
      established: 'تأسست ١٩٩٧',
      location: 'الرياض، المملكة العربية السعودية',
      meta: 'تكتل متنوع',
      cta: 'تواصل معنا',
      scroll: 'تصفّح',
    },

    about: {
      headingTop: 'عن',
      headingBottom: 'المجموعة',
      accentLabel: 'شركات رائدة',
      accentNumber: "منذ '٩٧",
      paragraphs: [
        'تأسست مجموعة شركات ثامر بن سعود المريبض المحدودة في عام 1997 م لتغطية الطلب المتزايد للسوق المحلى في قطاعات الأعمال المختلفة والتي نمت وتوسعت لتشمل أكثر من خمس شركات رائدة في أنشطة تجارية مختلفة',
        'وقد جاء هذا التوسع بعد توفيق الله ثم بالعمل الدؤوب على وضع الخطط والدراسات لتطوير أعمال هذه الشركات ومن ثم بضخ الاستثمارات بها على الوجه الأمثل',
        'وقد هدفت المجموعة في استراتيجيتها التوسعية التنوع في الأنشطة التجارية لتشمل:',
        'هذا إضافة إلى أنشطة تجارية مختلفة كتوريد السيارات – تصفيح المراكب والمباني – تجارة أجهزة الاتصالات والالكترونيات – وقطاع العقارات. وقد غطى النشاط التجاري للمجموعة العديد من المناطق داخل المملكة العربية السعودية.',
      ],
      divider: 'قطاعاتنا',
      activities: [
        {
          title: 'تصنيع المنسوجات',
          company: 'مصنع سعودي بلانتكس للبطنيات والمنسوجات',
          icon: 'textile',
        },
        {
          title: 'إدارة الفعاليات والمعارض',
          company: 'شركة الجهوزية التامة لإقامة المعارض',
          icon: 'event',
        },
        {
          title: 'القطاع الطبي',
          company: 'شركة الثقة الطبية',
          icon: 'medical',
        },
        {
          title: 'تصنيع الأثاث',
          company: 'مصنع برونتو للأثاث الراقي',
          icon: 'furniture',
        },
      ],
    },

    stats: [
      { value: 28, suffix: '+', label: 'عاماً من التميز' },
      { value: 4, suffix: '', label: 'شركات رائدة' },
      { value: 43, suffix: '+', label: 'عميل موثوق' },
      { value: 1997, suffix: '', label: 'سنة التأسيس' },
    ],

    chairman: {
      name: 'ثامر بن سعود المريبض',
      verticalLabel: 'كلمة رئيس مجلس الإدارة',
      labelAbove: 'رسالة من',
      headingTop: 'رئيس',
      headingBottom: 'مجلس الإدارة',
      role: 'مجموعة شركات TSM',
      pullQuote:
        '\u201Cكتبت لنا أقدارنا في رحلة العمر وقدرها لنا الله بحكمته\u201D',
      paragraphs: [
        'كتبت لنا أقدارنا في رحلة العمر وقدرها لنا الله بحكمته ليكون منا الطبيب ومنا العالم والتاجر ورجل أمن .. فتحقيق الطموح لا يقترن بمهنة ولا يعترف بحدود وإنما باستعانة بالله، واصرار، والتحلي بالعزيمة الثابتة والرؤية السديدة، هذا يقيني متوكلاً على الله تعالى ومتمسكاً بتعاليم ديني السمحة وبما استقيته من والدي الكريمين.',
        'أؤمن بأن ما وصلت إليه مجموعة ثامر بن سعود المريبض المحدودة اليوم ما كان ليكون لولا توفيق الله عز وجل ودعم من عائلتي وإصراري وعزيمتي على تخطي العقبات والنهوض من العثرات بعزيمة وإصرار أكبر لخدمة هذا البلد المعطاء الذي قدم لي الكثير والكثير، حتى تمكنت مجموعة ثامر بن سعود المريبض المحدودة من تحقيق مكانة مرموقة بين الشركات بمبدأ التنمية المستدامة.',
        'ولا أعتبر أنني حققت كل ما أصبو إليه وإنما أسعى جاهداً أن أسير بحول الله بخطى ثابتة على الطريق الصحيح.',
        'وأعتبر النقلة التي حققتها المجموعة خلال تاريخها ماهي إلا خطوة أولى سيستتبعها خطوات أشمل لتواكب التوجه المعاصر وللاستثمار في العنصر البشري ووسائل التكنولوجيا الحديثة لتقديم خدمات تليق بعملائنا وتلبي احتياجاتهم بأعلى معايير الجودة والاتقان.',
      ],
    },

    companies: {
      headingTop: 'شركات',
      headingBottom: 'المجموعة',
      description:
        'مجموعة متنوعة من الشركات التي تخدم الصناعات عبر المملكة العربية السعودية.',
      explore: 'اكتشف',
      items: [
        {
          name: 'مايسترو إيفنت',
          slug: 'maestro',
          tagline: 'إدارة الفعاليات',
          description:
            'تتخصص مايسترو إيفنت في إدارة الفعاليات والمعارض الشاملة، وتقديم تجارب عالمية المستوى للفعاليات المؤسسية والعامة في جميع أنحاء المملكة العربية السعودية.',
          color: '#2D7DD2',
          logo: '/maestro.png',
        },
        {
          name: 'سعودي بلانتكس',
          slug: 'blantex',
          tagline: 'البطنيات والمنسوجات',
          description:
            'مصنع سعودي بلانتكس هو مصنع رائد في تصنيع الأقمشة والمنسوجات الفاخرة، يلبي الطلب المتزايد على منتجات النسيج عالية الجودة في السوق السعودي وخارجه.',
          color: '#C8102E',
          logo: '/saudiblantex.png',
        },
        {
          name: 'برونتو',
          slug: 'pronto',
          tagline: 'تصنيع الأثاث',
          description:
            'مصنع برونتو للأثاث ينتج أثاثاً بجودة استثنائية للمشاريع السكنية والتجارية، يجمع بين التصميم الحديث والحرفية التقليدية.',
          color: '#D4A06A',
          logo: '/pronto.png',
        },
        {
          name: 'TSM للأمن السيبراني',
          slug: 'security',
          tagline: 'حلول الأمن السيبراني',
          description:
            'تقدم TSM للأمن السيبراني حلول حماية رقمية شاملة، لحماية الأعمال والمؤسسات في جميع أنحاء المملكة بأحدث التقنيات.',
          color: '#C8102E',
          logo: '/tsmsecurity.png',
        },
      ],
    },

    clients: {
      headingTop: 'عملاؤنا',
      headingBottom: 'الكرام',
    },

    contact: {
      headingTop: 'اتصل',
      headingBottom: 'بنا',
      tel: '+966 11 4660 120',
      telLabel: 'الهاتف',
      fax: '+966 11 4660 292',
      faxLabel: 'الفاكس',
      address: 'ص.ب: 13650، الرياض 11414، المملكة العربية السعودية',
      addressLabel: 'العنوان',
      formName: 'الاسم الكامل',
      formNamePlaceholder: 'اسمك',
      formEmail: 'البريد الإلكتروني',
      formEmailPlaceholder: 'بريدك@مثال.com',
      formPhone: 'الهاتف',
      formPhonePlaceholder: '+966...',
      formCompany: 'الشركة',
      formCompanyPlaceholder: 'اسم الشركة',
      formMessage: 'الرسالة',
      formMessagePlaceholder: 'كيف يمكننا مساعدتك؟',
      formSubmit: 'إرسال الرسالة',
      formSubmitted: 'تم الإرسال',
    },

    footer: {
      tagline: 'بناء التميز عبر أرجاء المملكة',
      copyright: `حقوق الطبع والنشر \u00A9 ${new Date().getFullYear()} مجموعة TSM. جميع الحقوق محفوظة.`,
      about: 'عن المجموعة',
      companies: 'الشركات',
      contact: 'اتصل بنا',
    },

    loader: {
      established: 'تأسست ١٩٩٧',
    },
  },
};

type TranslationData = typeof translations;

export type Translations = TranslationData['en'];

export function t(lang: Lang): Translations {
  return translations[lang] as Translations;
}
