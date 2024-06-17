export default function DashboardDomain() {
  const unverifiedData = [
    {
      client: "Harper Wilson",
      email: "harperwilson@mail.com",
      address: "123 Main Street, Springfield, IL 62701",
      telephone: "(123) 456-7890",
    },
    {
      client: "Mia Brown",
      email: "miabrown@mail.com",
      address: "456 Elm Avenue, Oakville, CA 94577",
      telephone: "(234) 567-8901",
    },
    {
      client: "Emily Miller",
      email: "emilymiller@mail.com",
      address: "789 Pine Road, Maplewood, NJ 07040",
      telephone: "(345) 678-9012",
    },
    {
      client: "Avery Davis",
      email: "averydavis@mail.com",
      address: "1010 Cedar Lane, Lakeside, TX 75023",
      telephone: "(456) 789-0123",
    },
    {
      client: "Elizabeth Martin",
      email: "elizabethmartin@mail.com",
      address: "1313 Oak Street, Rivertown, FL 33009",
      telephone: "(567) 890-1234",
    },
    {
      client: "Amelia Thompson",
      email: "ameliathompson@mail.com",
      address: "1515 Birch Avenue, Hillcrest, OH 43215",
      telephone: "01234 567 890",
    },
    {
      client: "Olivia White",
      email: "oliviawhite@mail.com",
      address: "1717 Willow Drive, Woodland, WA 98052",
      telephone: "02345 678 901",
    },
    {
      client: "Isabella Jackson",
      email: "isabellajackson@mail.com",
      address: "1919 Maple Court, Parkside, CO 80203",
      telephone: "03456 789 012",
    },
    {
      client: "Grace Harris",
      email: "graceharris@mail.com",
      address: "2121 Pine Street, Meadowville, NY 10001",
      telephone: "04567 890 123",
    },
    {
      client: "Charlotte Robinson",
      email: "charlotterobinson@mail.com",
      address: "2323 Cedar Road, Valleyview, AZ 85001",
      telephone: "05678 901 234",
    },
  ];

  const verifiedData = [
    {
      client: "Harper Wilson",
      email: "harperwilson@mail.com",
      address: "123 Main Street, Springfield, IL 62701",
      telephone: "(123) 456-7890",
    },
    {
      client: "Mia Brown",
      email: "miabrown@mail.com",
      address: "456 Elm Avenue, Oakville, CA 94577",
      telephone: "(234) 567-8901",
    },
    {
      client: "Emily Miller",
      email: "emilymiller@mail.com",
      address: "789 Pine Road, Maplewood, NJ 07040",
      telephone: "(345) 678-9012",
    },
    {
      client: "Avery Davis",
      email: "averydavis@mail.com",
      address: "1010 Cedar Lane, Lakeside, TX 75023",
      telephone: "(456) 789-0123",
    },
    {
      client: "Elizabeth Martin",
      email: "elizabethmartin@mail.com",
      address: "1313 Oak Street, Rivertown, FL 33009",
      telephone: "(567) 890-1234",
    },
    {
      client: "Amelia Thompson",
      email: "ameliathompson@mail.com",
      address: "1515 Birch Avenue, Hillcrest, OH 43215",
      telephone: "01234 567 890",
    },
    {
      client: "Olivia White",
      email: "oliviawhite@mail.com",
      address: "1717 Willow Drive, Woodland, WA 98052",
      telephone: "02345 678 901",
    },
    {
      client: "Isabella Jackson",
      email: "isabellajackson@mail.com",
      address: "1919 Maple Court, Parkside, CO 80203",
      telephone: "03456 789 012",
    },
    {
      client: "Grace Harris",
      email: "graceharris@mail.com",
      address: "2121 Pine Street, Meadowville, NY 10001",
      telephone: "04567 890 123",
    },
    {
      client: "Charlotte Robinson",
      email: "charlotterobinson@mail.com",
      address: "2323 Cedar Road, Valleyview, AZ 85001",
      telephone: "05678 901 234",
    },
  ];

  return (
    <>
      <section className="row">
        <h2>Clients</h2>
      </section>

      <section className="row my-4">
        <h4>Unverified Clients</h4>
        <table className="table table-hover table-striped">
          <caption>List of Unverified clients</caption>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Telephone</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {unverifiedData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.client}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.telephone}</td>
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

      <section className="row my-4">
        <h4>Verified Clients</h4>
        <table className="table table-hover table-striped">
          <caption>List of Verified Clients</caption>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Telephone</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {verifiedData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.client}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.telephone}</td>
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
    </>
  );
}
