// import { LandingPageDataInterface } from '~/utils/interfaces/LandingPageData.interface';
import { DefaultLandingPageDataInterface } from '../utils/interfaces/DefaultLandingPageData.interface';

// export const projectData: LandingPageDataInterface = {
//   partnerSiteName: 'Law On Earth',
//   partnerId: '12345',
//   partnerUrl: '/',
//   siteLogo:
//     'http://staging-frontend.s3-website-ap-southeast-1.amazonaws.com/favicon.ico',
//   headerNav: {
//     navLinks: [
//       { linkTitle: 'About', linkUrl: '#about' },
//       { linkTitle: 'Services', linkUrl: '#services' },
//       { linkTitle: 'Pricing', linkUrl: '#pricing' },
//     ],
//     primaryButton: {
//       text: 'Register',
//       url: '/register',
//     },
//     secondaryButton: {
//       text: 'Login',
//       url: '/login',
//     },
//   },
//   hero: {
//     tagline: {
//       firstTagline: 'Making',
//       secondTagline: 'Legal Services',
//       thirdTagline: 'accessible for everyone.',
//     },
//     subTagline:
//       "Browse the Learning Centre to access hundreds of articles & guides. Prepare documents & contracts in just a few clicks. Connect with legal advisors in affordable video sessions. With Law On Earth, you'll be able to understand your legal matter and self-act safely and affordably.",
//     secondaryButton: {
//       text: 'Book A Demo',
//       url: '#',
//     },
//     primaryButton: {
//       text: 'Sign Up',
//       url: '#',
//     },
//     ratings: 4.8, // TODO: Range must be 4.5 - 4.9
//   },

//   about: {
//     panelId: 'about',
//     title: 'About Law On Earth',
//     image: 'https://d3hh6raz9l4662.cloudfront.net/media/various/small_talk.png',
//     content: `We believe that every human being has a right to a basic level of legal assistance and education. The hard part has been finding ways to pull the cost out of legal and empower the public to manage their own legal needs to the extent they can. \n
//     Our founder Katie Richards grew up in a small country town in North Queensland where there was at the time only one law firm so half the town had representation and everyone else had to fend for themselves. Katie has built up a team of lawyers, developers and entrepreneurs who are equally as passionate about making a difference for the masses and giving every Australian the opportunity to live happier, more fulfilled and safer futures with equal access to legal help when they need it most, regardless of where they live or what they earn.\n
//     Research indicates that even in 2019, the majority of the world's population cannot afford or access legal assistance. As a result, people are making decisions involving their legal rights, or making no decisions at all, and this is impacting not only their current life situation but their future also.`,
//   },

//   services: {
//     title: 'Our Services',
//     panelId: 'services',
//     panelItem: [
//       {
//         icon: 'fa-regular fa-clock',
//         header: 'Pro Bono (Free) Legal Support',
//         content:
//           'If you are struggling financially and cannot afford a lawyer, you can apply for a 20-minute free advice session with a lawyer through Law On Earth. To help determine your eligibility we will need to submit a request form which can help us determine what type of lawyer will be able to provide the best support for your situation. ',
//       },
//       {
//         icon: 'fa-solid fa-award',
//         header: 'Online Company Registration',
//         content:
//           'Register your company online, in Australia, in just minutes for as little as $562 AUD. This covers all government fees and includes 16 critical business documents and a company constitution! Start your company with confidence & legal security. You can set your company up for success with Law On Earth.',
//       },
//       {
//         icon: 'fa-solid fa-wallet',
//         header: 'Create Legal Documents',
//         content:
//           "Change the way you use legal documents with Law On Earth. We are more than just a 'template' company. Our documents aren't filled with legal jargon and are companies with 'Human Guides'. These guides are written at a grade-7 reading standard, and explain each clause of the legal documents.",
//       },
//       {
//         icon: 'fa-solid fa-wallet',
//         header: 'Legal Advisors',
//         content: 'Speak to a Lawyer. Booking sessions with fixed-fee Advisors.',
//       },
//       {
//         icon: 'fa-solid fa-wallet',
//         header: 'Legal Guides and Courses',
//         content:
//           'Browse the Learning Centre to access hundreds of articles & guides.',
//       },
//     ],
//   },

//   firstpanel: {
//     title: 'Why Choose Law On Earth?',
//     panelItem: [
//       {
//         icon: 'fa-regular fa-clock',
//         header: 'Available Anytime Anywhere',
//         content:
//           "Access Law on Earth's services online 24/7. You can complete your documents and business registration in as little as 5 minutes and then instantly download your document.",
//       },
//       {
//         icon: 'fa-solid fa-award',
//         header: 'Quality Your Can Trust',
//         content:
//           "Each advisor has at least 3-years' experience in their field, so you can have peace of mind knowing that you can access the expert support that you need.",
//       },
//       {
//         icon: 'fa-solid fa-wallet',
//         header: 'Transparent Pricing',
//         content:
//           "You can save thousands on legal fees with our fixed-price system, you'll know exactly what you'll pay for from the start so you can make the best decision for your needs.",
//       },
//     ],
//   },

//   pricing: {
//     panelId: 'pricing',
//     title: 'Choose what works for you!',
//     subtitle:
//       'Access unlimited documents. Save over 40% when you subscribe for 6 months. Current pricing is listed in AUD.',
//     pricingPlans: [
//       {
//         recommendedPlan: false,
//         title: 'Starter',
//         subtitle: 'Free',
//         price: '',
//         catchphrase: '',
//         options: [
//           {
//             content: 'Access to our catalogue of 150+ document templates',
//             enabled: true,
//           },
//           {
//             content: 'Download in Microsoft Word format. (Pay Per Document)',
//             enabled: true,
//           },
//           { content: 'Discounted video sessions', enabled: false },
//           {
//             content:
//               'Access encrypted, securely-stored video recordings of advice sessions',
//             enabled: false,
//           },
//           {
//             content:
//               'Access over 300 articles, booklets, infographics and checklists',
//             enabled: true,
//           },
//           { content: 'Geotagged Content', enabled: true },
//         ],
//       },
//       {
//         recommendedPlan: false,
//         title: 'Monthly',
//         subtitle: '',
//         price: '$67.00',
//         catchphrase: '*Billed Monthly',
//         options: [
//           {
//             content: 'Access to our catalogue of 150+ document templates',
//             enabled: true,
//           },
//           {
//             content: 'Download in Microsoft Word format. (Unlimited)',
//             enabled: true,
//           },
//           { content: 'Discounted video sessions', enabled: false },
//           {
//             content:
//               'Access encrypted, securely-stored video recordings of advice sessions',
//             enabled: true,
//           },
//           {
//             content:
//               'Access over 300 articles, booklets, infographics and checklists',
//             enabled: true,
//           },
//           { content: 'Geotagged Content', enabled: true },
//         ],
//       },
//       {
//         recommendedPlan: false,
//         title: 'Quarterly',
//         subtitle: '',
//         price: '$42.33',
//         catchphrase: '*Billed Every 3 Months $127',
//         options: [
//           {
//             content: 'Access to our catalogue of 150+ document templates',
//             enabled: true,
//           },
//           {
//             content: 'Download in Microsoft Word format. (Unlimited)',
//             enabled: true,
//           },
//           { content: 'Discounted video sessions', enabled: false },
//           {
//             content:
//               'Access encrypted, securely-stored video recordings of advice sessions',
//             enabled: true,
//           },
//           {
//             content:
//               'Access over 300 articles, booklets, infographics and checklists',
//             enabled: true,
//           },
//           { content: 'Geotagged Content', enabled: true },
//         ],
//       },
//       {
//         recommendedPlan: true,
//         title: 'Half-yearly',
//         subtitle: 'Best value',
//         price: '$32.83',
//         catchphrase: '*Billed Every 6 Months $197',
//         options: [
//           {
//             content: 'Access to our catalogue of 150+ document templates',
//             enabled: true,
//           },
//           {
//             content: 'Download in Microsoft Word format. (Unlimited)',
//             enabled: true,
//           },
//           { content: 'Discounted video sessions', enabled: true },
//           {
//             content:
//               'Access encrypted, securely-stored video recordings of advice sessions',
//             enabled: true,
//           },
//           {
//             content:
//               'Access over 300 articles, booklets, infographics and checklists',
//             enabled: true,
//           },
//           { content: 'Geotagged Content', enabled: true },
//         ],
//       },
//     ],
//   },

//   trustedBy: {
//     title: 'Trusted By',
//     subtitle:
//       'From Startups to Fortune 500 companies using our Template for their product',
//     logos: [
//       'https://cdn.worldvectorlogo.com/logos/iseo-1.svg',
//       'https://ableproadmin.com/assets/images/landing/client-eagames.svg',
//       'https://ableproadmin.com/assets/images/landing/tech-angular.svg',
//       'https://www.pngitem.com/pimgs/m/296-2963531_random-logos-hd-png-download.png',
//       'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
//       'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wotHexdCNMZxUljB4kfZ0iwGcBMSystP0tbn4y3Ng&s',
//       'https://www.pngitem.com/pimgs/m/296-2963531_random-logos-hd-png-download.png',
//       'https://cdn.worldvectorlogo.com/logos/iseo-1.svg',
//     ],
//   },

//   subscription: {
//     title: 'Stay connected with us',
//     content:
//       'Simply submit your email, we share you the top news and updates from Law On Earth',
//     buttonText: 'Subscribe',
//   },

//   footer: {
//     companyName: 'Law On Earth IP Pty Ltd',
//     companyUrl: 'https://lawonearth.com',
//     footerContent:
//       "A way to connect the world and make legal services accessible to everyone. The Law On Earth portal contains 100's of legal documents and guidance sheets so that clients can self-service yet also receive advice packages depending on their subscription level.",
//     footerLinks: [
//       {
//         header: 'Useful Links',
//         links: [
//           { title: 'Discover Law On Earth for Clients', link: '#' },
//           { title: 'Discover Law On Earth for Advisors', link: '#' },
//           { title: 'How to join as an advisor', link: '#' },
//           { title: 'Help', link: '#' },
//         ],
//       },
//       {
//         header: 'Help & Support',
//         links: [
//           {
//             title:
//               'Address: Level 54, 111 Eagle Street, Brisbane City, Qld, 4000',
//             link: '',
//           },
//           { title: 'Support & Enquiries: 1300 66 46 88', link: '' },
//           { title: 'Email Us: hello@lawonearth.com', link: '' },
//         ],
//       },
//       {
//         header: 'Resources',
//         links: [
//           { title: 'Privacy Policy', link: '#' },
//           { title: 'Customer Terms', link: '#' },
//           { title: 'Advisor Terms', link: '#' },
//         ],
//       },
//     ],
//   },
// };

export const projectData: DefaultLandingPageDataInterface[] = [
  {
    panelData: {
      panelType: 'HEADER_NAV_PANEL',
      navLinks: [
        { linkTitle: 'About', linkUrl: '#about' },
        { linkTitle: 'Services', linkUrl: '#services' },
        { linkTitle: 'Pricing', linkUrl: '#pricing' },
      ],
      primaryButton: {
        text: 'Register',
        url: '/register',
      },
      secondaryButton: {
        text: 'Login',
        url: '/login',
      },
    },
  },
  {
    panelData: {
      panelType: 'HERO_PANEL',
      firstTagline: 'Lorem Ipsum',
      secondTagline: 'dolor sit amet',
      thirdTagline: 'consectetur adipiscing elit.',
      subTagline:
        'Maecenas convallis turpis in eros luctus, eu semper erat commodo. Vestibulum interdum blandit nunc nec eleifend. In elementum consectetur mi a vehicula. Cras lacinia, ex eget tincidunt posuere, erat lacus bibendum sapien, et facilisis ante lorem quis nunc.',
      secondaryButton: {
        text: 'Book A Demo',
        url: '#',
      },
      primaryButton: {
        text: 'Sign Up',
        url: '/register',
      },
    },
  },
  {
    panelData: {
      panelType: 'ABOUT_PANEL',
      panelId: 'about',
      title: 'About Us',
      image:
        'https://d3hh6raz9l4662.cloudfront.net/media/various/small_talk.png',
      content: `Pellentesque ut erat dignissim, consectetur nunc in, blandit sem. Ut porta sed nibh eget porttitor. Nullam ac suscipit libero. Pellentesque lobortis lectus nec neque ullamcorper ultricies. Aliquam pretium dui nec egestas condimentum. Suspendisse facilisis vel magna in maximus. Sed euismod quis sapien sit amet gravida. Sed laoreet lacinia est vitae tincidunt. In sit amet felis massa. Nulla sagittis, tortor ac scelerisque auctor, dui lorem posuere libero, ac fermentum dolor ligula nec augue. Nam sollicitudin ante ante, in fermentum odio luctus ultrices. Nulla pretium nulla quis augue malesuada luctus. Proin pharetra dui condimentum nunc commodo luctus. Aenean dolor leo, dictum et mi vitae, mollis fringilla leo. Curabitur sit amet eros varius, bibendum enim sit amet, rhoncus enim. Fusce maximus nisi in lorem consectetur, vel mattis tortor fermentum.\n
  Pellentesque ut erat dignissim, consectetur nunc in, blandit sem. Ut porta sed nibh eget porttitor. Nullam ac suscipit libero. Pellentesque lobortis lectus nec neque ullamcorper ultricies. Aliquam pretium dui nec egestas condimentum. Suspendisse facilisis vel magna in maximus. Sed euismod quis sapien sit amet gravida. Sed laoreet lacinia est vitae tincidunt. In sit amet felis massa.`,
    },
  },
  {
    panelData: {
      panelType: 'SERVICE_PANEL',
      title: 'Our Services',
      panelId: 'services',
      panelItem: [
        {
          icon: 'fa-regular fa-clock',
          header: 'Lorem ipsum dolor',
          content:
            'Maecenas convallis turpis in eros luctus, eu semper erat commodo. Vestibulum interdum blandit nunc nec eleifend. In elementum consectetur mi a vehicula. Cras lacinia, ex eget tincidunt posuere, erat lacus bibendum sapien, et facilisis ante lorem quis nunc. Suspendisse pretium sem eu tellus pulvinar, sit amet pharetra lectus porttitor. Ut viverra ex elit, et sollicitudin eros consequat quis. Praesent sit amet elementum risus.',
        },
        {
          icon: 'fa-solid fa-award',
          header: 'Lorem ipsum dolor',
          content:
            'Maecenas convallis turpis in eros luctus, eu semper erat commodo. Vestibulum interdum blandit nunc nec eleifend. In elementum consectetur mi a vehicula. Cras lacinia, ex eget tincidunt posuere, erat lacus bibendum sapien, et facilisis ante lorem quis nunc. Suspendisse pretium sem eu tellus pulvinar, sit amet pharetra lectus porttitor. Ut viverra ex elit, et sollicitudin eros consequat quis. Praesent sit amet elementum risus.',
        },
        {
          icon: 'fa-solid fa-wallet',
          header: 'Lorem ipsum dolor',
          content:
            'Maecenas convallis turpis in eros luctus, eu semper erat commodo. Vestibulum interdum blandit nunc nec eleifend. In elementum consectetur mi a vehicula. Cras lacinia, ex eget tincidunt posuere, erat lacus bibendum sapien, et facilisis ante lorem quis nunc. Suspendisse pretium sem eu tellus pulvinar, sit amet pharetra lectus porttitor. Ut viverra ex elit, et sollicitudin eros consequat quis. Praesent sit amet elementum risus.',
        },
        {
          icon: 'fa-solid fa-star',
          header: 'Lorem ipsum dolor',
          content:
            'Curabitur lorem ligula, lobortis id molestie id, congue nec metus. Aenean nisi est, tincidunt ac sodales et, pharetra feugiat tellus. Morbi sed ligula justo. Fusce tristique neque a tincidunt euismod. Fusce eu lacus elementum mi finibus auctor id sed quam. Vestibulum ullamcorper enim eget sapien aliquet condimentum.',
        },
        {
          icon: 'fa-solid fa-gear',
          header: 'Lorem ipsum dolor',
          content:
            'Curabitur lorem ligula, lobortis id molestie id, congue nec metus. Aenean nisi est, tincidunt ac sodales et, pharetra feugiat tellus. Morbi sed ligula justo. Fusce tristique neque a tincidunt euismod. Fusce eu lacus elementum mi finibus auctor id sed quam. Vestibulum ullamcorper enim eget sapien aliquet condimentum.',
        },
      ],
    },
  },
  {
    panelData: {
      panelType: 'PRICING_PANEL',
      panelId: 'pricing',
      title: 'Find a plan that suits you!',
      subtitle:
        'Nullam tristique, libero sit amet eleifend vulputate, elit tellus gravida arcu, vel pharetra mauris leo ut ex. Nullam ultricies elit dui.',
      pricingPlans: [
        {
          recommendedPlan: false,
          title: 'Starter',
          subtitle: 'Free',
          price: '',
          catchphrase: '',
          options: [
            {
              content: 'Phasellus congue semper magna',
              enabled: true,
            },
            {
              content: 'Phasellus congue semper magna',
              enabled: true,
            },
            { content: 'Phasellus congue semper magna', enabled: false },
            {
              content: 'Phasellus congue semper magna',
              enabled: false,
            },
            {
              content: 'Phasellus congue semper magna',
              enabled: false,
            },
            { content: 'Phasellus congue semper magna', enabled: false },
          ],
        },
        {
          recommendedPlan: false,
          title: 'Hobby',
          subtitle: '',
          price: '$67.00',
          catchphrase: '*Billed Monthly',
          options: [
            {
              content: '* Everything in Starter',
              enabled: true,
            },
            {
              content: 'Pellentesque ut erat dignissim',
              enabled: true,
            },
            { content: 'Pellentesque ut erat dignissim', enabled: true },
            {
              content: 'Pellentesque ut erat dignissim',
              enabled: true,
            },
            {
              content: 'Pellentesque ut erat dignissim',
              enabled: false,
            },
            { content: 'Pellentesque ut erat dignissim', enabled: false },
          ],
        },
        {
          recommendedPlan: false,
          title: 'Pro',
          subtitle: '',
          price: '$42.33',
          catchphrase: '*Billed Every 3 Months $127',
          options: [
            {
              content: '* Everything in Hobby',
              enabled: true,
            },
            {
              content: 'Sed condimentum lorem augue',
              enabled: true,
            },
            { content: 'Sed condimentum lorem augue', enabled: true },
            {
              content: 'Sed condimentum lorem augue',
              enabled: true,
            },
            {
              content: 'Sed condimentum lorem augue',
              enabled: true,
            },
            { content: 'Sed condimentum lorem augue', enabled: false },
          ],
        },
        {
          recommendedPlan: true,
          title: 'Commercial',
          subtitle: 'Best value',
          price: '$32.83',
          catchphrase: '*Billed Every 6 Months $197',
          options: [
            {
              content: '* Everything in Pro',
              enabled: true,
            },
            {
              content: 'Fusce eu lacus elementum mi finibus',
              enabled: true,
            },
            { content: 'Fusce eu lacus elementum mi finibus', enabled: true },
            {
              content: 'Fusce eu lacus elementum mi finibus',
              enabled: true,
            },
            {
              content: 'Fusce eu lacus elementum mi finibus',
              enabled: true,
            },
          ],
        },
      ],
    },
  },
  {
    panelData: {
      panelType: 'TRUSTED_BY_PANEL',
      title: 'Trusted By',
      subtitle:
        'Sed condimentum lorem augue, eget porttitor magna imperdiet at. Sed euismod magna vel eros facilisis placerat',
      logos: [
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
        'https://img.freepik.com/premium-vector/yin-yang-symbol-square-shape-logo-design_375081-1220.jpg',
      ],
    },
  },
  {
    panelData: {
      panelType: 'SUBSCRIPTION_PANEL',
      title: 'Stay connected with us',
      content:
        'Sed euismod quis sapien sit amet gravida. Sed laoreet lacinia est vitae tincidunt. In sit amet felis massa.',
      buttonText: 'Subscribe',
    },
  },
  {
    panelData: {
      panelType: 'FOOTER_PANEL',
      companyName: 'Lorem Ipsum Ltd',
      companyUrl: '/',
      footerContent:
        'Aliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.',
      footerLinks: [
        {
          header: 'Useful Links',
          links: [
            { title: 'Pellentesque ut erat dignissim', link: '#' },
            { title: 'Pellentesque ut erat dignissim', link: '#' },
            { title: 'Pellentesque ut erat dignissim', link: '#' },
            { title: 'Pellentesque ut erat dignissim', link: '#' },
          ],
        },
        {
          header: 'Help & Support',
          links: [
            {
              title: 'Address: 12, Fusce nec nisi, Fusce',
              link: '',
            },
            { title: 'Support & Enquiries: 0100 23 45 67', link: '' },
            { title: 'Email Us: hello@loremipsum.com', link: '' },
          ],
        },
        {
          header: 'Resources',
          links: [
            { title: 'Privacy Policy', link: '#' },
            { title: 'Customer Terms', link: '#' },
            { title: 'Advisor Terms', link: '#' },
          ],
        },
      ],
    },
  },
];
