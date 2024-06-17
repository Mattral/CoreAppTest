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

export default function DashboardHeader() {
  return (
    <header
      className="bg-transparent position-sticky top-0 start-0 w-100 py-2 px-5"
      style={{ backdropFilter: 'blur(7px)', zIndex: 1 }}
    >
      <menu className="list-unstyled d-flex align-items-center justify-content-around">
        <li className="">
          <button
            type="button"
            className="btn border-0 local-btn"
            data-bs-toggle="collapse"
            data-bs-target="#navSidebar"
            aria-controls="navSidebar"
            aria-expanded="true"
            aria-label="Toggle navigation sidebar"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </li>

        <div className="ms-auto">
          <menu className="list-unstyled d-flex align-items-center">
            {/* Light Mode */}
            <li
              className="dropdown me-4 cursor-pointer"
              style={{ zIndex: 9000 }}
            >
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="btn border-0 local-btn"
              >
                <i className="fa-regular fa-moon"></i>
              </button>

              <ul className="dropdown-menu mt-2 shadow-lg border border-0">
                <li className="dropdown-item py-3">
                  <i className="fa-regular fa-sun me-3"></i>
                  <span>Light</span>
                </li>
                <li className="dropdown-item py-3">
                  <i className="fa-solid fa-moon me-3"></i>
                  <span>Dark</span>
                </li>
                <li className="dropdown-item py-3">
                  <i className="fa-solid fa-gear me-3"></i>
                  <span>System Default</span>
                </li>
              </ul>
            </li>

            {/* Notifications */}
            <li className="dropdown">
              <button
                type="button"
                className="btn position-relative border-0 local-btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-bell"></i>
                <span
                  className="badge position-absolute top-0 start-100 translate-middle rounded-pill bg-danger
                "
                >
                  {NotificationData.length}
                </span>
              </button>
              <Notification notifications={NotificationData} />
            </li>
          </menu>
        </div>
      </menu>
    </header>
  );
}
