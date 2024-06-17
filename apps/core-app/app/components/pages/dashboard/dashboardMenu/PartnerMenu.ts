import { MenuInterface } from './MenuInterface.interface';

export const PartnerMenu: MenuInterface[] = [
  {
    icon: 'fa-solid fa-gauge',
    id: 'dashboard',
    title: 'Dashboard',
    link: '/dashboard',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-sitemap',
    id: 'sites',
    title: 'Sites',
    link: '/dashboard/sites',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-circle-user',
    id: 'partner-manager',
    title: 'Partner Manager',
    link: '/dashboard/partner-manager',
    isPlaceholder: false,
  },
  {
    icon: 'fa-solid fa-bell',
    id: 'notifications',
    title: 'Notifications',
    link: '/dashboard/notifications',
    isPlaceholder: false,
  },
];
