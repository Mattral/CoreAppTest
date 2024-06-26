import { LinksFunction } from '@remix-run/node';
import styles from './Sidebar.css';
import { Link } from '@remix-run/react';
import { PartnerMenu } from '../dashboardMenu/PartnerMenu';
import MenuItem, {
  links as MenuItemLinks,
} from '../dashboardMenu/MenuItem/MenuItem';

export const links: LinksFunction = () => [
  ...MenuItemLinks(),
  { rel: 'stylesheet', href: styles },
];

export default function Sidebar({
  logo,
  openDrawer,
  setOpenDrawer,
}: {
  logo: string;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={`p-4 position-fixed top-0 start-0 bottom-0 overflow-hidden overflow-y-auto vh-100 local-nav-sidebar ${
        openDrawer ? 'open' : ''
      }`}
      id="navSidebar"
    >
      <div className="">
        {/* Dashboard Logo */}
        <aside className="d-flex align-items-center justify-content-between p-3 py-4 d-md-block text-center">
          <Link to="/dashboard" className="brand">
            <img src={logo} alt="logo" width={40} height={40} />
          </Link>

          <button
            type="button"
            className="btn-close d-md-none"
            aria-label="Close"
            onClick={() => setOpenDrawer((prev) => !prev)}
          ></button>
        </aside>

        {/* Dashboard Logo ends */}

        <section className="local-navbar-content">
          {/* Profile Card */}
          <aside className="card local-user-card">
            <div className="card-body local-card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://ableproadmin.com/assets/images/user/avatar-1.jpg"
                    alt="user"
                    className="rounded-circle local-user-avatar"
                  />
                </div>
                <div className="flex-grow-1 ms-3 me-2">
                  <h6 className="mb-0">John Smith</h6>
                  <small>Administrator</small>
                </div>
                <a
                  className="btn btn-icon btn-link-secondary rounded-circle local-btn-avatar"
                  data-bs-toggle="collapse"
                  href="#sidebarProfilelinks"
                >
                  <i className="fa-solid fa-circle-chevron-down"></i>
                </a>
              </div>

              {/* Profile Links */}
              <div className="collapse" id="sidebarProfilelinks">
                <div className="pt-3">
                  <Link
                    to="/dashboard/account"
                    className="d-flex align-items-center py-2 local-profile-link"
                  >
                    <i className="fa-solid fa-user me-3"></i>
                    <span>My Account</span>
                  </Link>

                  <Link
                    to="/dashboard/settings"
                    className="d-flex align-items-center py-2 local-profile-link"
                  >
                    <i className="fa-solid fa-gear me-3"></i>
                    <span>Settings</span>
                  </Link>

                  <Link
                    to="/dashboard/billings"
                    className="py-2 d-flex align-items-center local-profile-link"
                  >
                    <i className="fa-regular fa-credit-card me-3"></i>
                    <span>Billings</span>
                  </Link>

                  <Link
                    to="/logout"
                    className="py-2 d-flex align-items-center local-profile-link"
                  >
                    <i className="fa-solid fa-power-off me-3"></i>
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
          {/* Profile Card ends */}

          {/* Dashboard Menu */}
          <aside className="px-3 mt-4" id="sideBarMenu">
            {PartnerMenu.map((item, index) => {
              return <MenuItem {...item} key={index} />;
            })}
          </aside>
          {/* Dashboard Menu ends */}
        </section>
      </div>
    </nav>
  );
}
