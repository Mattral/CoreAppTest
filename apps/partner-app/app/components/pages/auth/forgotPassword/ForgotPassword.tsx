import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "~/components/pages/auth/style/auth.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
interface PropsInterface {
  logo: string;
  homeUrl: string;
  loginPageUrl: string;
}

export default function ForgotPasswordForm(props: PropsInterface) {
  return (
    <main className="d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <section className="card my-5 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to={props.homeUrl}>
              <img src={props.logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>

          <div className="d-flex justify-content-between align-items-end mb-4">
            <h4 className="mb-0">
              <b>Forgot Password</b>
            </h4>
            <Link to={props.loginPageUrl} className="link-primary">
              Back to Login
            </Link>
          </div>

          <form action="" method="POST">
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control local-form-control"
                id="email"
                placeholder="name@example.com"
                autoComplete="email"
                required
                aria-required
              />
              <label htmlFor="email">Email Address</label>
            </div>

            <p className="mt-4 text-sm text-muted">
              Do not forgot to check SPAM box.
            </p>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary local-btn">
                Send Password Reset Email
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
