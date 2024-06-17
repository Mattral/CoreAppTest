import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "~/components/pages/auth/style/auth.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  logo: string;
  homeUrl: string;
}

export default function ResetPasswordForm(props: PropsInterface) {
  return (
    <main className="d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <section className="card my-5 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to={props.homeUrl}>
              <img src={props.logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>

          <h4 className="mb-4">Reset Password</h4>
          <p className="mt-4 text-sm text-muted">
            Please choose your new password
          </p>

          <form action="" method="POST" autoComplete="off">
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control local-form-control"
                id="floatingPassword"
                placeholder="********"
                required
                aria-required
                autoComplete="off"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirmPassword"
                className="form-control local-form-control"
                id="confirmPassword"
                placeholder="********"
                required
                aria-required
                autoComplete="off"
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary local-btn">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
