import { useState } from "react";
import { Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "~/components/pages/auth/style/auth.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
interface PropsInterface {
  logo: string;
  homeUrl: string;
  submittedData: { firstName: string; lastName: string; email: string };
}

export default function EditProfileForm(props: PropsInterface) {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <main className="d-md-flex flex-column align-items-center justify-content-center vh-100 p-5">
      {/* Step Icon */}
      <div className="d-flex align-items-center justify-content-evenly">
        <span
          className={`badge rounded-pill me-3 ${
            step === 1 ? "text-bg-primary" : "text-bg-secondary"
          }`}
        >
          1
        </span>

        <span
          className={`badge rounded-pill ${
            step === 2 ? "text-bg-primary" : "text-bg-secondary"
          }`}
        >
          2
        </span>
      </div>

      <section className="card my-3 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to={props.homeUrl}>
              <img src={props.logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>

          <h4 className="text-center mb-4">Edit Profile</h4>

          <form action="" method="POST">
            {step === 1 && (
              <aside>
                <h6 className="text-secondary">Personal Information</h6>

                <section className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First Name</label>

                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control local-form-control"
                      placeholder="John"
                      required
                      aria-required
                      value={props.submittedData.firstName}
                      disabled
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last Name</label>

                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control local-form-control"
                      placeholder="Doe"
                      required
                      aria-required
                      value={props.submittedData.lastName}
                      disabled
                    />
                  </div>
                </section>

                <div className="mb-3">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    className="form-control local-form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                    aria-required
                    value={props.submittedData.email}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="telephone">Telephone</label>

                  <input
                    type="tel"
                    name="telephone"
                    className="form-control local-form-control"
                    id="telephone"
                    placeholder="1300 66 46 88"
                    required
                    aria-required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="country">Country</label>

                  <input
                    type="text"
                    name="country"
                    className="form-control local-form-control"
                    id="country"
                    required
                    aria-required
                  />
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="button"
                    className="btn btn-primary local-btn"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </aside>
            )}

            {step === 2 && (
              <aside>
                <h6 className="text-secondary mt-5">Company Information</h6>

                <div className="mb-3">
                  <label htmlFor="companyName">Company&apos;s Name</label>

                  <input
                    type="text"
                    name="companyName"
                    className="form-control local-form-control"
                    id="companyName"
                    required
                    aria-required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="companyAddress">Address</label>

                  <input
                    type="text"
                    name="companyAddress"
                    className="form-control local-form-control"
                    id="companyAddress"
                    required
                    aria-required
                  />
                </div>

                <div className="row mt-4 g-3 justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-primary col-md-5 local-btn"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary col-md-5 local-btn"
                  >
                    Save
                  </button>
                </div>
              </aside>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
