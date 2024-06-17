import { useState } from "react";

export default function DashboardDomain() {
  const [managers, setManagers] = useState([
    {
      client: "Harper Wilson",
      email: "harperwilson@mail.com",
      address: "123 Main Street, Springfield, IL 62701",
      telephone: "(123) 456-7890",
      sites: "Site A",
    },
    {
      client: "Mia Brown",
      email: "miabrown@mail.com",
      address: "456 Elm Avenue, Oakville, CA 94577",
      telephone: "(234) 567-8901",
      sites: "Site A, Site B, Site C",
    },
    {
      client: "Emily Miller",
      email: "emilymiller@mail.com",
      address: "789 Pine Road, Maplewood, NJ 07040",
      telephone: "(345) 678-9012",
      sites: "Site B, Site C",
    },
    {
      client: "Avery Davis",
      email: "averydavis@mail.com",
      address: "1010 Cedar Lane, Lakeside, TX 75023",
      telephone: "(456) 789-0123",
      sites: "Site B",
    },
  ]);

  const [formData, setFormData] = useState({
    client: "",
    email: "",
    address: "",
    telephone: "",
    sites: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setManagers((prev) => [...prev, { ...formData }]);
    // reset form
    setFormData({
      client: "",
      email: "",
      address: "",
      telephone: "",
      sites: "",
      password: "",
    });
  };

  return (
    <>
      <section className="row d-flex align-items-start">
        <div className="col-sm-12 col-md-6">
          <h2>Managers</h2>
        </div>

        <div className="col-sm-12 col-md-6 text-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#formModal"
          >
            Add New Manager
          </button>
        </div>
      </section>

      <section className="row my-4">
        <table className="table table-hover table-striped">
          <caption>List of Partner Managers</caption>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Telephone</th>
              <th>Sites</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {managers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.client}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.telephone}</td>
                  <td>{item.sites}</td>
                  <td>
                    <button className="btn btn-primary me-3">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
              <label htmlFor="client" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="client"
                name="client"
                className="form-control mb-3"
                value={formData.client}
                onChange={handleChange}
              />

              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mb-3"
                value={formData.password}
                onChange={handleChange}
              />

              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control mb-3"
                value={formData.address}
                onChange={handleChange}
              />

              <label htmlFor="telephone" className="form-label">
                Telephone
              </label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                className="form-control mb-3"
                value={formData.telephone}
                onChange={handleChange}
              />

              <label htmlFor="sites" className="form-label">
                Sites
              </label>
              <input
                type="text"
                id="sites"
                name="sites"
                className="form-control mb-3"
                value={formData.sites}
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
