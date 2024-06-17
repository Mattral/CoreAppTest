import { MenuInterface } from '../../dashboard/dashboardMenu/MenuInterface.interface';

export const MenuList: MenuInterface[] = [
  {
    icon: 'fa-solid fa-gauge',
    id: 'dashboard',
    title: 'Dashboard',
    link: '#',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-globe',
    id: 'domain',
    title: 'Domain',
    link: '/domain',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-video',
    id: 'bookings',
    title: 'Bookings',
    link: '/bookings',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-users',
    id: 'users',
    title: 'User Management',
    isPlaceholder: true,
    children: [
      { title: 'Client', link: '/user-management/clients' },
      { title: 'Advisor', link: '/user-management/advisors' },
      { title: 'Student', link: '/user-management/students' },
    ],
  },
  {
    icon: 'fa-solid fa-sliders',
    id: 'appearance',
    title: 'Appearance',
    isPlaceholder: true,
    children: [
      { title: 'Customize', link: '/appearance/customize' },
      { title: 'Content', link: '/appearance/content' },
    ],
  },
];
