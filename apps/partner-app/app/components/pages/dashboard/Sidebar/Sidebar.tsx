import { LinksFunction } from '@remix-run/node';
import styles from './Sidebar.css';
import { Link } from '@remix-run/react';
import { MenuList } from '../dashboardMenu/MenuList';
import MenuItem, {
  links as MenuItemLinks,
} from '../dashboardMenu/MenuItem/MenuItem';
import { useEffect, useState } from 'react';

export const links: LinksFunction = () => [
  ...MenuItemLinks(),
  { rel: 'stylesheet', href: styles },
];

export default function Sidebar({ logo }: { logo: string }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScreenSize = () => {
      console.log({ screenSize: window.innerWidth });

      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleScreenSize);
    window.addEventListener('load', handleScreenSize);

    console.log({ isMobile });

    return () => {
      window.removeEventListener('resize', handleScreenSize);
      window.removeEventListener('load', handleScreenSize);
    };
  });

  return (
    <nav
      className={`collapse collapse-horizontal ${
        isMobile ? 'show' : 'show'
      } local-nav-sidebar`}
      id="navSidebar"
    >
      <section
        className="local-mobile-overlay"
        onClick={() => {
          document.querySelector('#navSidebar')?.classList.remove('show'); // TODO: Refactor to useState
        }}
      ></section>

      <div className="local-navbar-wrapper">
        {/* Dashboard Logo */}
        <aside className="text-center p-3 py-4">
          <Link to="/dashboard" className="brand">
            <img src={logo} alt="logo" width={40} height={40} />
          </Link>
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
                  <h6 className="mb-0">John Doe</h6>
                  <small>Client</small>
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
                    to="#"
                    className="d-flex align-items-center py-2 local-profile-link"
                  >
                    <i className="fa-solid fa-user me-3"></i>
                    <span>My Account</span>
                  </Link>

                  <Link
                    to="#"
                    className="d-flex align-items-center py-2 local-profile-link"
                  >
                    <i className="fa-solid fa-gear me-3"></i>
                    <span>Settings</span>
                  </Link>

                  <Link
                    to="#"
                    className="py-2 d-flex align-items-center local-profile-link"
                  >
                    <i className="fa-regular fa-credit-card me-3"></i>
                    <span>Payments</span>
                  </Link>

                  <Link
                    to="#"
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
            {MenuList.map((item, index) => {
              return <MenuItem {...item} key={index} />;
            })}
          </aside>
          {/* Dashboard Menu ends */}
        </section>
      </div>
    </nav>
  );
}
