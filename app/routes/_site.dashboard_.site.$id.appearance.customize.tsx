import { useOutletContext } from '@remix-run/react';
import DashboardHeader from '../components/pages/dashboard/DashboardHeader/DashboardHeader';

export default function CustomizeAppearance() {
  const {
    setOpenDrawer,
  }: {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Customize'} setOpenDrawer={setOpenDrawer} />

      <main>
        <h4>Customize Site Appearance</h4>

        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5>Company Name</h5>
              <p>Example Inc</p>

              <p className="mt-5"></p>

              <h5>Company Logo</h5>
              <p>
                <img
                  src="http://staging-frontend.s3-website-ap-southeast-1.amazonaws.com/favicon.ico"
                  alt="company logo"
                  width={40}
                  height={40}
                />
              </p>

              <p className="mt-5"></p>

              <h5>Company Color Theme</h5>
              <p>
                <input
                  type="color"
                  value="#0000ff"
                  disabled
                  className="border border-1 border-dark"
                />
              </p>

              <p className="mt-5">
                <button
                  type="button"
                  className="btn btn-primary w-25"
                  data-bs-toggle="modal"
                  data-bs-target="#modalBackdrop"
                >
                  Edit
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Customization Modal */}
        <div
          className="modal fade"
          id="modalBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="backdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="backdropLabel">
                  Customize Site
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="my-3 mb-4">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      placeholder="Example Inc"
                    />
                  </div>

                  <div className="my-3 mb-4">
                    <label htmlFor="companyLogo" className="form-label">
                      Company Logo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="companyLogo"
                      name="companyLogo"
                    />
                  </div>

                  <div className="my-3 mb-4">
                    <label htmlFor="companyTheme" className="form-label">
                      Company Color Theme
                    </label>
                    <input
                      type="color"
                      className="form-control w-25"
                      id="companyTheme"
                      name="companyTheme"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
