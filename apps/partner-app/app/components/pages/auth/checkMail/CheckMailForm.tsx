import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "~/components/pages/auth/style/auth.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  logo: string;
  homeUrl: string;
  loginPageUrl: string;
}

export default function CheckMailForm(props: PropsInterface) {
  return (
    <main className="d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <section className="card my-5 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to={props.homeUrl}>
              <img src={props.logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>

          <h4 className="mb-4">Hi, Check Your Mail</h4>

          <p className="mt-4 text-sm text-muted">
            We have sent a password recover instructions to your email.
          </p>

          <div className="fw-light d-grid mt-4">
            <Link
              to={props.loginPageUrl}
              className="btn btn-primary local-btn"
              role="button"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
