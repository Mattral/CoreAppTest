import { Link } from '@remix-run/react';
import { MenuInterface } from '../MenuInterface.interface';
import { LinksFunction } from '@remix-run/node';
import styles from './MenuItem.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function MenuItem(menu: MenuInterface) {
  const siteLink = `/dashboard/site/${menu.siteId}`;

  // Non-placeholder menu
  if (!menu.isPlaceholder) {
    return (
      <div className="local-menu-item">
        <Link
          to={`${siteLink}${menu.link}`}
          className="d-flex align-items-center py-3 px-2 my-2 pb-1 text-dark local-menu-nav"
        >
          <span className="local-menu-icon me-3">
            <i className={`${menu.icon}`} />
          </span>
          <span>{menu.title}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="local-menu-item">
      <button
        type="button"
        className="d-flex align-items-center w-100 text-start px-2 py-3 my-2 pb-1 border-0 text-dark bg-transparent collapsed local-menu-nav local-menu-btn"
        data-bs-toggle="collapse"
        data-bs-target={`#${menu.id}`}
        aria-expanded="false"
        aria-controls={menu.id}
      >
        <span className="local-menu-icon me-3">
          <i className={`${menu.icon}`} />
        </span>
        <span>{menu.title}</span>
        <span className="ms-auto">
          <i className="fa-solid fa-circle-chevron-down local-chevron"></i>
        </span>
      </button>

      <div className="collapse" id={menu.id} data-bs-parent="#sideBarMenu">
        <ul>
          {menu.children?.map(
            (item: { link: string; title: string }, index: number) => {
              return (
                <li key={index} className="ms-4 px-2 local-inner-menu-item">
                  <Link
                    to={`${siteLink}${item.link}`}
                    className="d-block py-2 text-dark local-inner-menu-link"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
