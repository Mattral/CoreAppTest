export interface MenuInterface {
  icon: string;
  id: string;
  title: string;
  siteId: string;
  link?: string;
  isPlaceholder: boolean;
  children?: { title: string; link: string }[];
}
