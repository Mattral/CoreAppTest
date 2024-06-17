import { useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import DashboardHeader from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';

export default function DashboardSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Settings'} setOpenDrawer={setOpenDrawer} />

      <section className="mt-3 mb-5">
        {/* Change Password Panel */}
        <div className="card">
          <h5 className="card-header">Change Password</h5>

          <div className="card-body">
            <div className="row mx-auto">
              <div className="col-md-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password
                    </label>

                    <div className="input-group">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        name="currentPassword"
                        className="form-control local-form-control"
                        id="currentPassword"
                        placeholder="********"
                        required
                        aria-required
                      />
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setShowCurrentPassword((prev) => !prev)}
                      >
                        {showCurrentPassword ? (
                          <i className="fa-regular fa-eye-slash"></i>
                        ) : (
                          <i className="fa-regular fa-eye"></i>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        name="newPassword"
                        className="form-control local-form-control"
                        id="newPassword"
                        placeholder="********"
                        required
                        aria-required
                      />
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                      >
                        {showNewPassword ? (
                          <i className="fa-regular fa-eye-slash"></i>
                        ) : (
                          <i className="fa-regular fa-eye"></i>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        className="form-control local-form-control"
                        id="confirmPassword"
                        placeholder="********"
                        required
                        aria-required
                      />
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      >
                        {showConfirmPassword ? (
                          <i className="fa-regular fa-eye-slash"></i>
                        ) : (
                          <i className="fa-regular fa-eye"></i>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-4  offset-md-1 card-header">
                <h6>Password Requirements</h6>

                <ul className="list-unstyled">
                  <li className="py-2">
                    <i className="fa-regular fa-circle-check me-2 text-success"></i>
                    <span>At least 10 characters</span>
                  </li>
                  <li className="py-2">
                    <i className="fa-regular fa-circle-check me-2 text-success"></i>
                    <span>At least 1 lower letter (a-z)</span>
                  </li>
                  <li className="py-2">
                    <i className="fa-regular fa-circle-check me-2 text-success"></i>
                    <span>At least 1 uppercase letter(A-Z)</span>
                  </li>
                  <li className="py-2">
                    <i className="fa-regular fa-circle-check me-2 text-success"></i>
                    <span>At least 1 number (0-9)</span>
                  </li>
                  <li className="py-2">
                    <i className="fa-regular fa-circle-check me-2 text-success"></i>
                    <span>At least 1 special characters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Spacing Hack */}
        <div className="mt-5 pt-5"></div>

        {/* Delete Account Panel */}
        <div className="card">
          <h5 className="card-header">Delete Account</h5>

          <div className="card-body">
            <p>Deleting your account is permanent and cannot be reversed.</p>
            <form>
              <div className="mt-4">
                <button type="button" className="btn btn-danger">
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
