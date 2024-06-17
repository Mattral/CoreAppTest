import { type MetaFunction } from '@remix-run/node';
import logo from '~/assets/images/logo.png';
import { useOutletContext } from '@remix-run/react';
import DashboardHeader from '../components/pages/dashboard/DashboardHeader/DashboardHeader';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Site Dashboard' },
    {
      name: 'description',
      content: 'Law on Earth Dashboard',
    },
    {
      tagName: 'link',
      rel: 'shortcut icon',
      href: logo,
    },
    {
      tagName: 'link',
      rel: 'icon',
      href: logo,
    },
  ];
};

export default function SiteDashboard() {
  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Dashboard'} setOpenDrawer={setOpenDrawer} />

      <section style={{ zIndex: 1 }} className="overflow-x-hidden">
        {/* Simple Data cards */}
        <section className="my-3 mb-5">
          <div className="row g-4 justify-content-center">
            {[
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
