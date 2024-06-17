import { DefaultLandingPageDataInterface } from '~/utils/interfaces/DefaultLandingPageData.interface';

export const pageData: DefaultLandingPageDataInterface[] = [
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
