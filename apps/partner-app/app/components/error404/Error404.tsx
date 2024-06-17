import { LinksFunction } from "@remix-run/node";
import { Link, Links, Meta, Scripts, useNavigate } from "@remix-run/react";
import imgError404 from "~/assets/images/img-error-404.svg";
import styles from "./Error404.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Error404({ homepageUrl }: { homepageUrl: string }) {
  const navigate = useNavigate();

  return (
    <html lang="en">
      <head>
        <title>404 | Page Not Found</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="maintenance-block">
          <div>
            <img className="img-fluid" src={imgError404} alt="img-error-404" />
          </div>

          <section className="text-center">
            <h1 className="mt-5">
              <b>Page Not Found</b>
            </h1>
            <p className="mt-2 mb-4 text-muted">
              The page you are looking was moved, removed,
              <br /> renamed, or might never exist!
            </p>
          </section>

          <aside className="mb-5">
            <Link to={homepageUrl} className="btn btn-link">
              Go to Home
            </Link>

            {" | "}

            <button
              type="button"
              className="btn btn-link"
              onClick={() => navigate(-1)}
            >
              Go to previous page
            </button>
          </aside>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
