export interface MenuInterface {
  icon: string;
  id: string;
  title: string;
  link?: string;
  isPlaceholder: boolean;
  children?: { title: string; link: string }[];
}
