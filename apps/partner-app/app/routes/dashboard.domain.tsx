import { Link } from '@remix-run/react';

export default function DashboardDomain() {
  return (
    <>
      <section className="row">
        <div className="col-sm-12 col-md-6">
          <h2>Assigned Domain</h2>
          <p className="text-secondary">Your assigned domain name: </p>
          <div className="card">
            <div className="card-body">
              <Link to="#" className="card-link">
                x07RbhYKpeNZbmjhgZI7oYEQJfPjKDZIRpuD32FokpwA.example.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="row mt-5">
        <div className="col-sm-12 col-md-6">
          <h2>Custom Domain</h2>
          <p className="text-secondary">
            You can bring a domain name that you already own, or buy a new one.
          </p>
          <div className="card">
            <div className="card-body">
              <form method="POST">
                <input
                  type="text"
                  className="form-control p-2 py-3"
                  id="domainName"
                  name="domainName"
                  placeholder="example.com"
                  pattern="[^\s]+(.*)$"
                  title="example.com | subdomain.example.com"
                  required
                  aria-required
                />

                <button type="button" className="btn btn-primary mt-4">
                  Add Domain
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-5">
        <section className="row mt-5">
          <div className="col-sm-12 col-md-6">
            <h2>Name servers</h2>
            <p className="text-secondary">
              Log in to your domain provider and change your domain&apos;s name
              servers to the following custom hostnames assigned to your domain
              name
            </p>
            <div className="card">
              <div className="card-body">
                <p>dns1.p04.net</p>
                <p>dns2.p04.net</p>
                <p>dns3.p04.net</p>
                <p>dns4.p04.net</p>
              </div>
            </div>
          </div>
        </section>

        <section className="row mt-5">
          <div className="col-sm-12 col-md-6">
            <h2>Delete Domain</h2>
            <p className="text-secondary">
              This action is irreversible. Make sure to configure your domain
              with another DNS provider before deleting this domain.
            </p>

            <button
              type="button"
              className="btn btn-danger mt-3"
              data-bs-toggle="modal"
              data-bs-target="#deleteDomainModal"
            >
              Delete Domain
            </button>
          </div>
        </section>
      </div>

      {/* Delete domain name confirmation modal */}
      <aside
        className="modal fade"
        id="deleteDomainModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">
                Delete Domain Name
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-secondary">
                Delete the domain name permanently? This action cannot be
                undone.
              </p>

              <p>To confirm, type {`"example.com"`} in the box below</p>
              <form method="POST">
                <input
                  type="text"
                  name="confirmDomainName"
                  id="confirmDomainName"
                  className="form-control p-2 py-3"
                  required
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger">
                Delete Domain
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
