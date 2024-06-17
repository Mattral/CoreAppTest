import { useState } from "react";
import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "~/components/pages/auth/style/auth.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
interface PropsInterface {
  logo: string;
  homeUrl: string;
  loginPageUrl: string;
  termsAndConditionPageUrl: string;
}

export default function RegisterForm(props: PropsInterface) {
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

          <h4 className="text-center mb-4">Register</h4>

          <form action="" method="POST">
            <div className="mb-3">
              <label htmlFor="firstName">First Name</label>

              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control local-form-control"
                placeholder="John"
                required
                aria-required
                autoComplete="given-name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName">Last Name</label>

              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control local-form-control"
                placeholder="Doe"
                required
                aria-required
                autoComplete="family-name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email Address</label>

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

            <div className="form-check">
              <input
                className="form-check-input input-primary"
                type="checkbox"
                id="customCheckc1"
                required
              />
              <label
                className="form-check-label text-muted"
                htmlFor="customCheckc1"
              >
                I agree to all the{" "}
                <Link to={props.termsAndConditionPageUrl}>
                  Terms & Condition
                </Link>
              </label>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary local-btn">
                Sign Up
              </button>
            </div>
          </form>

          <div className="d-flex justify-content-between align-items-end mt-4">
            <h6 className="fw-medium mb-0">Already have an Account?</h6>
            <Link to={props.loginPageUrl} className="link-primary fw-light">
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
