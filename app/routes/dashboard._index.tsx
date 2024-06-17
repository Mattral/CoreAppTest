import { useOutletContext } from '@remix-run/react';
import DashboardHeader from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';

export default function Dashboard() {
  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Dashboard'} setOpenDrawer={setOpenDrawer} />

      <section style={{ zIndex: 1 }} className="overflow-x-hidden my-3 mb-5">
        {/* Simple Data cards */}
        <section className="w-100">
          <div className="row g-4 justify-content-center flex-wrap px-2">
            {[
              {
                icon: 'fa-solid fa-users',
                title: '0 Sites',
                subtitle: 'White labelled sites',
              },
              {
                icon: 'fa-solid fa-users',
                title: '0 Partners',
                subtitle: 'Partner Managers',
              },
              {
                icon: 'fa-solid fa-users',
                title: '0 Users',
                subtitle: 'Registered Users',
              },
              {
                icon: 'fa-solid fa-handshake',
                title: '0 Advisors',
                subtitle: 'Registered Advisors',
              },
              {
                icon: 'fa-solid fa-bookmark',
                title: '0 Articles',
                subtitle: 'Learning Centre',
              },
              {
                icon: 'fa-solid fa-folder',
                title: '0 Document',
                subtitle: 'Document Wizard',
              },
              {
                icon: 'fa-solid fa-video',
                title: '0 Booked',
                subtitle: 'Video Sessions',
              },
            ].map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

function Card(props: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3" style={{ zIndex: 1 }}>
      <div className="card">
        <div className="card-body">
          <i className={`${props.icon} fs-2`}></i>
          <p className="fw-bold fs-3">{props.title}</p>
          <p className="text-body-secondary">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
