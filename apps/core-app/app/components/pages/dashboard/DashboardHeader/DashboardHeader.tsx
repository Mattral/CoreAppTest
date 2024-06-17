import styles from './DashboardHeader.css';
import Notification, {
  links as NotificationLinks,
} from '../Notification/Notification';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  ...NotificationLinks(),
  { rel: 'stylesheet', href: styles },
];

const NotificationData = [
  {
    timestamp: '2 min ago',
    title: 'UI/UX Design',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    timestamp: '2 min ago',
    title: 'UI/UX Design',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    timestamp: '2 min ago',
    title: 'UI/UX Design',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    timestamp: '2 min ago',
    title: 'UI/UX Design',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    timestamp: '2 min ago',
    title: 'UI/UX Design',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    timestamp: '2 min ago',
    title: 'UI/UX Design',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
];

export default function DashboardHeader({
  title,
  setOpenDrawer,
}: {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}) {
  return (
    <header
      className="bg-transparent position-sticky top-0 start-0 w-100 py-2 d-flex align-items-center"
      style={{ backdropFilter: 'blur(7px)', zIndex: 999 }}
    >
      <p>
        <button
          type="button"
          className="btn border-0 py-0 me-4 local-btn"
          onClick={() => setOpenDrawer((prev: boolean) => !prev)}
          aria-label="Toggle navigation sidebar"
          aria-controls="navSidebar"
          aria-expanded="true"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </p>
      <p className="py-2 fw-bold fs-4">{title}</p>
    </header>
  );
}
