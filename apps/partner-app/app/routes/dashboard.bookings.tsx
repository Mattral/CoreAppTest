import { Link } from "@remix-run/react";

export default function DashboardDomain() {
  const userData = [
    {
      client: "Harper Wilson",
      advisor: "Evelyn Garcia",
      student: "Mia Martin",
      date: "January 01, 2025",
      time: "01:00pm",
      link: "link.dev/meeting/01",
    },
    {
      client: "Mia Brown",
      advisor: "Ava Taylor",
      student: "Elizabeth Robinson",
      date: "February 02, 2025",
      time: "02:00pm",
      link: "link.dev/meeting/02",
    },
    {
      client: "Emily Miller",
      advisor: "Scarlett Anderson",
      student: "",
      date: "March 03, 2025",
      time: "03:00pm",
      link: "link.dev/meeting/03",
    },
    {
      client: "Avery Davis",
      advisor: "Sophia Jones",
      student: "Charlotte Jackson",
      date: "April 04, 2025",
      time: "04:00pm",
      link: "link.dev/meeting/04",
    },
    {
      client: "Elizabeth Martin",
      advisor: "Madison Moore",
      student: "",
      date: "May 05, 2025",
      time: "05:00pm",
      link: "link.dev/meeting/05",
    },
    {
      client: "Amelia Thompson",
      advisor: "Chloe Martinez",
      student: "",
      date: "June 06, 2025",
      time: "06:00pm",
      link: "link.dev/meeting/06",
    },
    {
      client: "Olivia White",
      advisor: "Abigail Thomas",
      student: "Sofia Smith",
      date: "July 07, 2025",
      time: "07:00pm",
      link: "link.dev/meeting/07",
    },
    {
      client: "Isabella Jackson",
      advisor: "Isabella Harris",
      student: "",
      date: "August 08, 2025",
      time: "08:00pm",
      link: "link.dev/meeting/08",
    },
    {
      client: "Grace Harris",
      advisor: "Ella Smith",
      student: "Olivia Wilson",
      date: "September 09, 2025",
      time: "09:00pm",
      link: "link.dev/meeting/09",
    },
    {
      client: "Charlotte Robinson",
      advisor: "Emma Johnson",
      student: "",
      date: "October 10, 2025",
      time: "10:00pm",
      link: "link.dev/meeting/10",
    },
  ];

  const completedData = [
    {
      client: "Harper Wilson",
      advisor: "Evelyn Garcia",
      student: "Mia Martin",
      date: "January 01, 2025",
      time: "01:00pm",
      link: "link.dev/meeting/01",
      artifact: "link.dev/artifact/01",
    },
    {
      client: "Mia Brown",
      advisor: "Ava Taylor",
      student: "Elizabeth Robinson",
      date: "February 02, 2025",
      time: "02:00pm",
      link: "link.dev/meeting/02",
      artifact: "link.dev/artifact/02",
    },
    {
      client: "Emily Miller",
      advisor: "Scarlett Anderson",
      student: "",
      date: "March 03, 2025",
      time: "03:00pm",
      link: "link.dev/meeting/03",
      artifact: "link.dev/artifact/03",
    },
    {
      client: "Avery Davis",
      advisor: "Sophia Jones",
      student: "Charlotte Jackson",
      date: "April 04, 2025",
      time: "04:00pm",
      link: "link.dev/meeting/04",
      artifact: "link.dev/artifact/04",
    },
    {
      client: "Elizabeth Martin",
      advisor: "Madison Moore",
      student: "",
      date: "May 05, 2025",
      time: "05:00pm",
      link: "link.dev/meeting/05",
      artifact: "link.dev/artifact/05",
    },
    {
      client: "Amelia Thompson",
      advisor: "Chloe Martinez",
      student: "",
      date: "June 06, 2025",
      time: "06:00pm",
      link: "link.dev/meeting/06",
      artifact: "link.dev/artifact/06",
    },
    {
      client: "Olivia White",
      advisor: "Abigail Thomas",
      student: "Sofia Smith",
      date: "July 07, 2025",
      time: "07:00pm",
      link: "link.dev/meeting/07",
      artifact: "link.dev/artifact/07",
    },
    {
      client: "Isabella Jackson",
      advisor: "Isabella Harris",
      student: "",
      date: "August 08, 2025",
      time: "08:00pm",
      link: "link.dev/meeting/08",
      artifact: "link.dev/artifact/08",
    },
    {
      client: "Grace Harris",
      advisor: "Ella Smith",
      student: "Olivia Wilson",
      date: "September 09, 2025",
      time: "09:00pm",
      link: "link.dev/meeting/09",
      artifact: "link.dev/artifact/09",
    },
    {
      client: "Charlotte Robinson",
      advisor: "Emma Johnson",
      student: "",
      date: "October 10, 2025",
      time: "10:00pm",
      link: "link.dev/meeting/10",
      artifact: "link.dev/artifact/10",
    },
  ];

  return (
    <>
      <section className="row">
        <h2>Bookings</h2>
      </section>

      <section className="row my-4">
        <h4>Upcoming Sessions</h4>
        <table className="table table-hover table-striped">
          <caption>List of Upcoming sessions</caption>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Client</th>
              <th>Advisor</th>
              <th>Student</th>
              <th>Date</th>
              <th>Time</th>
              <th>Session Link</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {userData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.client}</td>
                  <td>{item.advisor}</td>
                  <td>{item.student}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <Link to="#">{item.link}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="row my-4">
        <h4>Completed Sessions</h4>
        <table className="table table-hover table-striped">
          <caption>List of Completed sessions</caption>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Client</th>
              <th>Advisor</th>
              <th>Student</th>
              <th>Date</th>
              <th>Time</th>
              <th>Session Link</th>
              <th>Artifact Link</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {completedData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.client}</td>
                  <td>{item.advisor}</td>
                  <td>{item.student}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <Link to="#">{item.link}</Link>
                  </td>
                  <td>
                    <Link to="#">{item.artifact}</Link>
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
