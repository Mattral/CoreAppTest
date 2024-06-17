import { LinksFunction } from '@remix-run/node';
import styles from './Header.css';
import { Link } from '@remix-run/react';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

interface PropsInterface {
  logo: string;
  navLinks: HeaderLinkInterface[];
  primaryButton?: { text: string; url: string };
  secondaryButton?: { text: string; url: string } | null;
}

interface HeaderLinkInterface {
  linkTitle: string;
  linkUrl: string;
}

export default function Header({
  logo,
  navLinks,
  primaryButton,
  secondaryButton,
}: PropsInterface) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light default fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width="40" height="40" />
          </a>
          <button
            className="navbar-toggler rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {navLinks.map((item, index) => {
                return (
                  <li className="nav-item px-1" key={index}>
                    <Link className="nav-link" to={item.linkUrl}>
                      {item.linkTitle}
                    </Link>
                  </li>
                );
              })}
              {/* SPACER: Add spacing before the 2/1 CTA buttons */}
              <div className="ms-md-4 mt-2 mt-md-0"></div>
              {/* -- SPACER ends --- */}
              {secondaryButton ? (
                <li className="nav-item px-1 me-2 mb-2 mb-md-0">
                  <Link
                    className="btn btn-outline-secondary"
                    to={secondaryButton.url}
                  >
                    {secondaryButton.text}
                  </Link>
                </li>
              ) : null}
              {primaryButton ? (
                <li className="nav-item">
                  <Link className="btn btn-success" to={primaryButton.url}>
                    {primaryButton.text}
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
