import { MenuInterface } from './MenuInterface.interface';

export const MenuList: MenuInterface[] = [
  {
    icon: 'fa-solid fa-gauge',
    id: 'dashboard',
    title: 'Dashboard',
    link: '/dashboard',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-users',
    id: 'advisors',
    title: 'Advisors',
    isPlaceholder: true,
    children: [
      { title: 'Find Advisors', link: '/dashboard/advisors/find' },
      { title: 'Engaged Advisors', link: '/dashboard/advisors/engaged' },
      { title: 'Bookmarked Advisors', link: '/dashboard/advisors/bookmarked' },
    ],
  },
  {
    icon: 'fa-solid fa-users',
    id: 'articles',
    title: 'Artciles',
    isPlaceholder: true,
    children: [
      { title: 'Find Artciles', link: '/dashboard/articles/find' },
      { title: 'Bookmarked Articles', link: '/dashboard/articles/bookmarked' },
    ],
  },
  {
    icon: 'fa-solid fa-users',
    id: 'documents',
    title: 'Documents',
    isPlaceholder: true,
    children: [
      { title: 'Find Document', link: '/dashboard/documents/find' },
      { title: 'My Documents', link: '/dashboard/documents/personal' },
      { title: 'Others', link: '/dashboard/documents/others' },
      {
        title: 'Bookmarked Documents',
        link: '/dashboard/documents/bookmarked',
      },
    ],
  },
  {
    icon: 'fa-solid fa-users',
    id: 'companies',
    title: 'Companies',
    isPlaceholder: true,
    children: [
      { title: 'Register New Company', link: '/dashboard/company/register' },
      { title: 'My Companies', link: '/dashboard/company/all' },
      {
        title: 'Ongoing Applications',
        link: '/dashboard/company/applications',
      },
    ],
  },
  {
    icon: 'fa-solid fa-users',
    id: 'video-session',
    title: 'Video Sessions',
    isPlaceholder: true,
    children: [
      { title: 'Find Advisor', link: '/dashboard/advisors/find' },
      { title: 'All Sessions', link: '/dashboard/video-session/all' },
    ],
  },
  {
    icon: 'fa-solid fa-users',
    id: 'voi',
    title: 'Verification of Identity',
    isPlaceholder: true,
    children: [
      { title: 'New VOI', link: '/dashboard/voi/register' },
      { title: 'Application', link: '/dashboard/voi/application' },
    ],
  },
  {
    icon: 'fa-solid fa-sitemap',
    id: 'calendar',
    title: 'Calendar',
    link: '/dashboard/calendar',
    isPlaceholder: false,
  },

  /*
  {
    icon: "fa-solid fa-sliders",
    id: "appearance",
    title: "Appearance",
    isPlaceholder: true,
    children: [
      { title: "Customize", link: "#" },
      { title: "Header", link: "#" },
      { title: "Menu", link: "#" },
      { title: "Logo", link: "#" },
    ],
  },*/
];
