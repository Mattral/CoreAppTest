import { LinksFunction } from "@remix-run/node";
import styles from "./Header.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  homepageUrl: string;
  logo: string;
  links: HeaderLinkInterface[];
  rootUrl: string;
  primaryButton?: { text: string; url: string };
  secondaryButton?: { text: string; url: string } | null;
}

interface HeaderLinkInterface {
  linkTitle: string;
  linkUrl: string;
}

export default function Header(props: PropsInterface) {
  let secondaryNavButtonUrl = "";
  let primaryNavButtonUrl = "";

  if (props.primaryButton) {
    const completeUrl = `${props.rootUrl}${props.primaryButton.url}`;

    primaryNavButtonUrl = completeUrl.startsWith("//")
      ? props.primaryButton.url
      : completeUrl;
  }

  if (props.secondaryButton) {
    const completeUrl = `${props.rootUrl}${props.secondaryButton.url}`;

    secondaryNavButtonUrl = completeUrl.startsWith("//")
      ? props.secondaryButton.url
      : completeUrl;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light default fixed-top">
        <div className="container">
          <a className="navbar-brand" href={props.homepageUrl}>
            <img src={props.logo} alt="logo" width="40" height="40" />
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
              {props.links.map((item, index) => {
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
              {props.secondaryButton ? (
                <li className="nav-item px-1 me-2 mb-2 mb-md-0">
                  <Link
                    className="btn btn-outline-secondary"
                    to={secondaryNavButtonUrl}
                  >
                    {props.secondaryButton.text}
                  </Link>
                </li>
              ) : null}
              {props.primaryButton ? (
                <li className="nav-item">
                  <Link className="btn btn-success" to={primaryNavButtonUrl}>
                    {props.primaryButton.text}
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
