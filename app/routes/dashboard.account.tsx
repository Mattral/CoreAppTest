import { useOutletContext } from '@remix-run/react';
import DashboardHeader from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';

export default function DashboardAccount() {
  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'My Profile'} setOpenDrawer={setOpenDrawer} />

      <section className="my-3 mb-5">
        {/* Profile Picture */}
        <section>
          <p className="text-secondary">Profile Picture</p>
          <div className="d-flex align-items-center">
            <div>
              <img
                src="https://ableproadmin.com/assets/images/user/avatar-1.jpg"
                alt="user"
                className="rounded-circle local-user-avatar"
                style={{ height: '80px', width: '80px' }}
              />
            </div>
            <div>
              <button className="btn btn-primary ms-3">Change Picture</button>
            </div>
          </div>
        </section>

        {/* Personal Details */}
        <section className="mt-5">
          <div className="d-flex align-items-center col-md-6 ">
            <p className="text-secondary me-auto">Personal Details</p>
            <p>
              <i className="fa-regular fa-pen-to-square"></i>
            </p>
          </div>

          <form method="post">
            <div className="row col-md-6 mb-4">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="middleName" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  name="middleName"
                />
              </div>
            </div>

            <div className="row col-md-6 mb-4">
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  name="emailAddress"
                />
              </div>
            </div>

            <div className="row col-md-6 mb-4">
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                />
              </div>
            </div>

            <div className="row col-md-6 mb-4">
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="timezone" className="form-label">
                  Timezone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="timezone"
                  name="timezone"
                />
              </div>
            </div>

            <div>
              <button type="button" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
