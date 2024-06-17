import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { links as DashboardHeaderLinks } from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';
import Sidebar, {
  links as SidebarLinks,
} from '~/components/pages/dashboard/Sidebar/Sidebar';
import logo from '~/assets/images/logo.png';
import styles from '~/styles/dashboard.css';
import { authenticator } from '../services/auth/auth.server';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Dashboard' },
    {
      name: 'description',
      content: 'Law on Earth Dashboard Form',
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

export const links: LinksFunction = () => [
  ...DashboardHeaderLinks(),
  ...SidebarLinks(),
  { rel: 'stylesheet', href: styles },
];

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });
}

export default function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <main className="vh-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        logo={logo}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />

      <section
        className={`vh-100 overflow-y-auto overflow-x-hidden global-dashboard-container ${
          openDrawer ? 'open' : ''
        }`}
      >
        {/* Children */}
        <section className="py-2 px-5">
          <Outlet
            context={
              { openDrawer, setOpenDrawer } satisfies {
                openDrawer: boolean;
                setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
              }
            }
          />
        </section>
      </section>
    </main>
  );
}
