import { LinksFunction } from "@remix-run/node";
import styles from "./Footer.css";
// import ColorSchemeToggle from "~/components/colorSchemeToggle/ColorSchemeToggle";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  logo?: string;
  companyName: string;
  companyUrl: string;
  footerContent?: string;
  footerLinks: { header: string; links: { title: string; link: string }[] }[];
}

export default function Footer(props: PropsInterface) {
  return (
    <footer>
      <section className="border-top border-bottom fw-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <img
                src={props.logo}
                alt="logo"
                className="img-fluid mb-3"
                width="40"
                height="40"
              />
              <p className="mb-4">{props.footerContent}</p>
            </div>

            {/* Footer Links */}
            <div className="col-md-8">
              <div className="row justify-content-between">
                {props.footerLinks.map((footerLink, index) => {
                  return (
                    <div
                      className="col-sm-4 wow fadeInUp"
                      data-wow-delay="0.6s"
                      key={index}
                    >
                      <h5 className="mb-4">{footerLink.header}</h5>
                      <ul className="list-unstyled">
                        {footerLink.links.map((link, index) => {
                          return (
                            <li key={index} className="py-2">
                              {link.link ? (
                                <a
                                  href={link.link}
                                  className="local-footer_link link-hover link-underline-primary"
                                >
                                  {link.title}
                                </a>
                              ) : (
                                <span>{link.title}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="copyright container py-4">
        <div className="d-flex align-items-center">
          <p className="my-auto">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a href={props.companyUrl}>{props.companyName}</a>
          </p>

          {/* <aside className="ms-auto">
            <ColorSchemeToggle />
          </aside> */}
        </div>
      </section>
    </footer>
  );
}

/**
 * 
 * <a class="icon-link icon-link-hover link-success link-underline-success " href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
 */
