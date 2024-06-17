import { LinksFunction } from '@remix-run/node';
import styles from './Sidebar.css';
import { Link } from '@remix-run/react';
import MenuItem, {
  links as MenuItemLinks,
} from '../SiteDashboardMenu/MenuItem/MenuItem';
import { MenuList } from '../SiteDashboardMenu/MenuList';

export const links: LinksFunction = () => [
  ...MenuItemLinks(),
  { rel: 'stylesheet', href: styles },
];

export default function Sidebar({
  logo,
  siteId,
  siteName,
  siteSubDomainUrl,
  openDrawer,
  setOpenDrawer,
}: {
  logo: string;
  siteId: string;
  siteName: string;
  siteSubDomainUrl: string;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={`p-4 position-fixed top-0 start-0 bottom-0 overflow-hidden overflow-y-auto vh-100 local-nav-sidebar ${
        openDrawer ? 'open' : ''
      }`}
      id="navSiteSidebar"
    >
      <div className="local-navbar-wrapper">
        {/* Dashboard Logo */}
        <aside className="text-center p-3 py-4">
          <div className="d-flex align-items-center mb-4 d-md-block text-center">
            <img src={logo} alt="logo" width={40} height={40} />
            <button
              type="button"
              className="btn-close d-md-none ms-auto"
              aria-label="Close"
              onClick={() => setOpenDrawer((prev) => !prev)}
            ></button>
          </div>
          <aside className="my-2">
            {siteName} <span className="badge bg-success">Active</span>
          </aside>
          <aside>
            <Link to={siteSubDomainUrl} target="_blank">
              Go to site{' '}
              <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
            </Link>
          </aside>
        </aside>
        {/* Dashboard Logo ends */}

        <section className="local-navbar-content">
          {/* Back to main dashboard */}
          <aside className="text-center">
            <Link to="/dashboard" className="btn btn-primary">
              Back to Main Dashboard
            </Link>
          </aside>

          {/* Dashboard Menu */}
          <aside className="px-3 mt-4" id="sideBarMenu">
            {MenuList.map((item, index) => {
              return <MenuItem {...item} key={index} siteId={siteId} />;
            })}
          </aside>
          {/* Dashboard Menu ends */}
        </section>
      </div>
    </nav>
  );
}
