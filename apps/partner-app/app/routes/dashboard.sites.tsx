import { Link } from "@remix-run/react";
import { useState } from "react";

export default function DashboardDomain() {
  const [sites, setSites] = useState([
    { title: "Site XYZ" },
    { title: "Site Example" },
    { title: "Site ABC" },
    { title: "Demo" },
  ]);

  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyLogo: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSites((prev) => [...prev, { title: formData.companyName }]);
    // reset form
    setFormData({
      companyName: "",
      companyAddress: "",
      companyLogo: "",
    });
  };

  return (
    <>
      <section className="row d-flex align-items-start">
        <div className="col-sm-12 col-md-6">
          <h2>Sites</h2>
          <p className="text-secondary">Manage all your sites in one place</p>
        </div>

        <div className="col-sm-12 col-md-6 text-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#formModal"
          >
            Create New Site
          </button>
        </div>
      </section>

      <section className="row my-4 g-4">
        {sites.map((item, index) => (
          <SiteCard key={index} {...item} />
        ))}
      </section>

      <section
        className="modal fade"
        id="formModal"
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
                Create New Site
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-control mb-3"
                value={formData.companyName}
                onChange={handleChange}
              />

              <label htmlFor="companyAddress" className="form-label">
                Company Address
              </label>
              <input
                type="text"
                id="companyAddress"
                name="companyAddress"
                className="form-control mb-3"
                value={formData.companyAddress}
                onChange={handleChange}
              />

              <label htmlFor="companyLogo" className="form-label">
                Company Logo
              </label>
              <input
                type="file"
                id="companyLogo"
                name="companyLogo"
                className="form-control"
                value={formData.companyLogo}
                onChange={handleChange}
              />
            </div>

            <div className="modal-footer text-center">
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
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const SiteCard = ({ title }: { title: string }) => {
  return (
    <aside className="col-sm-12 col-md-3">
      <div className="card overflow-hidden">
        <p
          className="bg-primary"
          style={{ height: "200px", width: "100%" }}
        ></p>
        <div className="card-body">
          <Link to="#" className="text-reset">
            <h5 className="card-title">{title}</h5>
          </Link>
        </div>
      </div>
    </aside>
  );
};
