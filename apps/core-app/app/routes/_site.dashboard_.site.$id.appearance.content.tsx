import { useState } from 'react';
import DashboardHeader from '../components/pages/dashboard/DashboardHeader/DashboardHeader';
import { useOutletContext } from '@remix-run/react';

export default function CustomizeAppearance() {
  const [aboutPanelState, setAboutPanelState] = useState(true);
  const [servicePanelState, setServicePanelState] = useState(true);
  const [pricingPanelState, setPricingPanelState] = useState(true);
  const [trustedByPanelState, setTrustedByPanelState] = useState(true);
  const [subscriptionPanelState, setSubscriptionPanelState] = useState(true);

  const {
    setOpenDrawer,
  }: {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Customize'} setOpenDrawer={setOpenDrawer} />

      <main>
        <h4 className="mb-5">Customize Site Content</h4>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="headerTab"
              data-bs-toggle="tab"
              data-bs-target="#headerTabPane"
              type="button"
              role="tab"
              aria-controls="headerTabPane"
              aria-selected="true"
            >
              Header
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="heroTab"
              data-bs-toggle="tab"
              data-bs-target="#heroTabPane"
              type="button"
              role="tab"
              aria-controls="heroTabPane"
              aria-selected="false"
            >
              Hero
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="aboutTab"
              data-bs-toggle="tab"
              data-bs-target="#aboutTabPane"
              type="button"
              role="tab"
              aria-controls="aboutTabPane"
              aria-selected="false"
            >
              About
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="serviceTab"
              data-bs-toggle="tab"
              data-bs-target="#serviceTabPane"
              type="button"
              role="tab"
              aria-controls="serviceTabPane"
              aria-selected="false"
            >
              Services
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pricingTab"
              data-bs-toggle="tab"
              data-bs-target="#pricingTabPane"
              type="button"
              role="tab"
              aria-controls="pricingTabPane"
              aria-selected="false"
            >
              Pricing
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="trustedByTab"
              data-bs-toggle="tab"
              data-bs-target="#trustedByTabPane"
              type="button"
              role="tab"
              aria-controls="trustedByTabPane"
              aria-selected="false"
            >
              Trusted By
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="subscriptionTab"
              data-bs-toggle="tab"
              data-bs-target="#subscriptionTabPane"
              type="button"
              role="tab"
              aria-controls="subscriptionTabPane"
              aria-selected="false"
            >
              Subscription
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="footerTab"
              data-bs-toggle="tab"
              data-bs-target="#footerTabPane"
              type="button"
              role="tab"
              aria-controls="footerTabPane"
              aria-selected="false"
            >
              Footer
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="extraTab"
              data-bs-toggle="tab"
              data-bs-target="#extraTabPane"
              type="button"
              role="tab"
              aria-controls="extraTabPane"
              aria-selected="false"
            >
              Extra
            </button>
          </li>
        </ul>

        <div className="tab-content my-5" id="myTabContent">
          {/* Header Pane */}
          <div
            className="tab-pane fade show active"
            id="headerTabPane"
            role="tabpanel"
            aria-labelledby="headerTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p className="text-secondary">
                    Add external links to the header session
                  </p>
                  <div className="my-3">
                    <label className="form-label" htmlFor="">
                      Text
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="my-3">
                    <label className="form-label" htmlFor="">
                      Link
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="my-3">
                    <button type="button" className="btn btn-secondary me-3">
                      Add new link
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="col-md-6 mt-3">
              <div className="card">
                <div className="card-body">
                  <p className="text-secondary">Toggle Login/Register button</p>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheckbox"
                    />
                    <label className="form-check-label" htmlFor="loginCheckbox">
                      Login Button
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="registerCheckbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="registerCheckbox"
                    >
                      Register Button
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <div className="my-3">
              <button type="button" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>

          {/* Hero Pane */}
          <div
            className="tab-pane fade"
            id="heroTabPane"
            role="tabpanel"
            aria-labelledby="heroTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p className="text-secondary">Change Landing page tagline</p>
                  <div className="my-3">
                    <label className="form-label" htmlFor="firstTagline">
                      First Tagline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstTagline"
                    />
                  </div>

                  <div className="my-3">
                    <label className="form-label" htmlFor="secondTagline">
                      Second Tagline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="secondTagline"
                    />
                  </div>

                  <div className="my-3">
                    <label className="form-label" htmlFor="thirdTagline">
                      Third Tagline (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="thirdTagline"
                    />
                  </div>

                  <div className="my-3">
                    <label className="form-label" htmlFor="subTagline">
                      SubTagline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subTagline"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-secondary">Primary Button</p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="primaryButton"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="primaryButton"
                      >
                        Primary Button
                      </label>
                    </div>

                    <label className="form-label" htmlFor="primaryBtnText">
                      Text
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="primaryBtnText"
                    />

                    <label className="form-label" htmlFor="primaryBtnLink">
                      Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="primaryBtnLink"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-secondary">Secondary Button</p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="secondaryButton"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="secondaryButton"
                      >
                        Secondary Button
                      </label>
                    </div>

                    <label className="form-label" htmlFor="secondaryBtnText">
                      Text
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="secondaryBtnText"
                    />

                    <label className="form-label" htmlFor="secondaryBtnLink">
                      Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="secondaryBtnLink"
                    />
                  </div>

                  <div className="my-3 mt-5">
                    <button type="button" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* About Pane */}
          <div
            className="tab-pane fade"
            id="aboutTabPane"
            role="tabpanel"
            aria-labelledby="aboutTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="aboutPanelCheckbox"
                  defaultChecked
                  checked={aboutPanelState}
                  onClick={() => setAboutPanelState((prev) => !prev)}
                />
                <label
                  className="form-check-label"
                  htmlFor="aboutPanelCheckbox"
                >
                  Add/Remove About Panel
                </label>
              </div>

              {aboutPanelState ? (
                <div className="card">
                  <div className="card-body">
                    <p className="text-secondary">About Pane</p>
                    <div className="my-3">
                      <label className="form-label" htmlFor="aboutMenu">
                        Menu Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="aboutMenu"
                      />
                    </div>

                    <div className="my-3">
                      <label className="form-label" htmlFor="aboutHeader">
                        Header
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="aboutHeader"
                      />
                    </div>

                    <div className="my-3">
                      <label className="form-label" htmlFor="aboutImage">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="aboutImage"
                      />
                    </div>

                    <div className="my-3">
                      <label className="form-label" htmlFor="aboutContent">
                        Content
                      </label>
                      <textarea
                        className="form-control"
                        id="aboutContent"
                        rows={5}
                      ></textarea>
                    </div>

                    <div className="my-3 mt-5">
                      <button type="button" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          </div>

          {/* Service Pane */}
          <div
            className="tab-pane fade"
            id="serviceTabPane"
            role="tabpanel"
            aria-labelledby="serviceTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="servicePanelCheckbox"
                  defaultChecked
                  checked={servicePanelState}
                  onClick={() => setServicePanelState((prev) => !prev)}
                />
                <label
                  className="form-check-label"
                  htmlFor="servicePanelCheckbox"
                >
                  Add/Remove Service Panel
                </label>
              </div>

              {servicePanelState ? (
                <>
                  <div className="card">
                    <div className="card-body">
                      <p className="text-secondary">Service Pane</p>
                      <div className="my-3">
                        <label className="form-label" htmlFor="serviceHeader">
                          Header
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="serviceHeader"
                        />
                      </div>

                      <div className="my-3 card">
                        <div className="card-body">
                          <label className="form-label" htmlFor="">
                            Card Icon
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            id=""
                          />

                          <label className="form-label" htmlFor="">
                            Card Header
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            id=""
                          />

                          <label className="form-label" htmlFor="">
                            Card Content
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>

                      <div className="my-3">
                        <button type="button" className="btn btn-secondary">
                          Add new card
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 mt-4">
                    <button type="button" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </>
              ) : null}
            </section>
          </div>

          {/* Pricing Pane */}
          <div
            className="tab-pane fade"
            id="pricingTabPane"
            role="tabpanel"
            aria-labelledby="pricingTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pricingPanelCheckbox"
                  defaultChecked
                  checked={pricingPanelState}
                  onClick={() => setPricingPanelState((prev) => !prev)}
                />
                <label
                  className="form-check-label"
                  htmlFor="pricingPanelCheckbox"
                >
                  Add/Remove Pricing Panel
                </label>
              </div>

              {pricingPanelState ? (
                <>
                  <div className="card">
                    <div className="card-body">
                      <p className="text-secondary">Pricing Pane</p>
                      <div className="my-3">
                        <label className="form-label" htmlFor="pricingHeader">
                          Header
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pricingHeader"
                        />

                        <label
                          className="form-label"
                          htmlFor="pricingSubHeader"
                        >
                          Sub Header
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pricingSubHeader"
                        />
                      </div>

                      <div className="my-3 card">
                        <div className="card-body">
                          <label className="form-label" htmlFor="">
                            Card Icon
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            id=""
                          />

                          <label className="form-label" htmlFor="">
                            Card Header
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            id=""
                          />

                          <label className="form-label" htmlFor="">
                            Card Content
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                          ></textarea>
                        </div>
                      </div>

                      <div className="my-3">
                        <button type="button" className="btn btn-secondary">
                          Add new card
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 mt-4">
                    <button type="button" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </>
              ) : null}
            </section>
          </div>

          {/* Trusted By Pane */}
          <div
            className="tab-pane fade"
            id="trustedByTabPane"
            role="tabpanel"
            aria-labelledby="trustedByTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="trustedByPanelCheckbox"
                  defaultChecked
                  checked={trustedByPanelState}
                  onClick={() => setTrustedByPanelState((prev) => !prev)}
                />
                <label
                  className="form-check-label"
                  htmlFor="trustedByPanelCheckbox"
                >
                  Add/Remove TrustedBy Panel
                </label>
              </div>

              {trustedByPanelState ? (
                <>
                  <div className="card">
                    <div className="card-body">
                      <p className="text-secondary">Trusted By Pane</p>
                      <div className="my-3">
                        <label className="form-label" htmlFor="trustedByHeader">
                          Header
                        </label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          id="trustedByHeader"
                        />

                        <label
                          className="form-label"
                          htmlFor="trustedBySubHeader"
                        >
                          Sub Header
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="trustedBySubHeader"
                        />
                      </div>

                      <div className="my-3 card">
                        <div className="card-body">
                          <label className="form-label" htmlFor="">
                            Company Logo
                          </label>
                          <input type="file" className="form-control" id="" />
                        </div>
                      </div>

                      <div className="my-3">
                        <button type="button" className="btn btn-secondary">
                          Add New Logo
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 mt-4">
                    <button type="button" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </>
              ) : null}
            </section>
          </div>

          {/* Subscription Pane */}
          <div
            className="tab-pane fade"
            id="subscriptionTabPane"
            role="tabpanel"
            aria-labelledby="subscriptionTab"
            tabIndex={0}
          >
            <section className="col-md-6">
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="subscriptionPanelCheckbox"
                  defaultChecked
                  checked={subscriptionPanelState}
                  onClick={() => setSubscriptionPanelState((prev) => !prev)}
                />
                <label
                  className="form-check-label"
                  htmlFor="subscriptionPanelCheckbox"
                >
                  Add/Remove Subscription Panel
                </label>
              </div>

              {subscriptionPanelState ? (
                <div className="card">
                  <div className="card-body">
                    <p className="text-secondary">Subscription Pane</p>
                    <div className="my-3">
                      <label
                        className="form-label"
                        htmlFor="subscriptionHeader"
                      >
                        Header
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="subscriptionHeader"
                      />

                      <label
                        className="form-label"
                        htmlFor="subscriptionSubHeader"
                      >
                        Sub Header
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="subscriptionSubHeader"
                      />

                      <label
                        className="form-label"
                        htmlFor="subscriptionBtnText"
                      >
                        Button Text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subscriptionBtnText"
                      />
                    </div>

                    <div className="my-3 mt-5">
                      <button type="button" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
