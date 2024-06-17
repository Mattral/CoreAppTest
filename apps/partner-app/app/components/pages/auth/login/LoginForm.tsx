import { useState } from "react";
import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "~/components/pages/auth/style/auth.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  logo: string;
  homeUrl: string;
  registerPageUrl: string;
  forgotPasswordPageUrl: string;
  formError: string;
  defaultValues?: { email: string; password: string };
}

export default function LoginForm(props: PropsInterface) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <section className="card my-5 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to={props.homeUrl}>
              <img src={props.logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>
          {/* TODO: Add Social login options */}

          <h4 className="text-center mb-4">Login</h4>

          <form action="" method="POST">
            <div className="mb-3">
              <label htmlFor="floatingInput">Email Address</label>

              <input
                type="email"
                name="email"
                className="form-control local-form-control"
                id="floatingInput"
                placeholder="name@example.com"
                autoComplete="email"
                defaultValue={props.defaultValues?.email || ""}
                required
                aria-required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="floatingPassword">Password</label>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control local-form-control"
                  id="floatingPassword"
                  placeholder="********"
                  required
                  defaultValue={props.defaultValues?.password || ""}
                  aria-required
                />
                <button
                  type="button"
                  className="input-group-text"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
            </div>

            {props.formError ? (
              <p className="text-danger">{props.formError}</p>
            ) : null}

            <div className="d-flex mt-1 justify-content-between align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input input-primary"
                  type="checkbox"
                  id="customCheckc1"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="customCheckc1"
                >
                  Remember me?
                </label>
              </div>
              <h6 className="text-secondary fw-light mb-0">
                <Link to={props.forgotPasswordPageUrl}>Forgot Password?</Link>
              </h6>
            </div>
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary local-btn">
                Login
              </button>
            </div>
          </form>

          <div className="d-flex justify-content-between align-items-end mt-4">
            <h6 className="fw-medium mb-0">Don&apos;t have an Account?</h6>
            <Link to={props.registerPageUrl} className="link-primary fw-light">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
