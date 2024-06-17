import {
  type LinksFunction,
  type MetaFunction,
  type LoaderFunctionArgs,
  json,
} from '@remix-run/node';
import Sidebar, {
  links as SidebarLinks,
} from '~/components/pages/siteDashboard/Sidebar/Sidebar';
import defaultLogo from '~/assets/images/logo.png';
import styles from '~/styles/dashboard.css';
import { Outlet, useLoaderData } from '@remix-run/react';
import { authenticator } from '../services/auth/auth.server';
import { GetPartnerSite } from '../services/api/getPartnerSite.server';
import { getSession } from '../services/auth/session.server';
import { ApiResponseStatusEnum } from '../utils/enums/ApiResponseStatusEnum';
import { useState } from 'react';
import { links as DashboardHeaderLinks } from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Dashboard' },
    {
      name: 'description',
      content: 'Law on Earth Dashboard',
    },
    {
      tagName: 'link',
      rel: 'shortcut icon',
      href: defaultLogo,
    },
    {
      tagName: 'link',
      rel: 'icon',
      href: defaultLogo,
    },
  ];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  const siteId = params.id as string;

  const session = await getSession(request.headers.get('Cookie'));

  const response = await GetPartnerSite(session.data.user.authToken, siteId);

  if (response.status !== ApiResponseStatusEnum.SUCCESS) {
    return null;
  }

  return json({
    status: response.status,
    siteCode: response.siteCode,
    siteName: response.siteName,
    siteSubDomainUrl: response.siteSubDomainUrl,
    siteLogo: response.siteLogo,
  });
}

export const links: LinksFunction = () => [
  ...DashboardHeaderLinks(),
  ...SidebarLinks(),
  { rel: 'stylesheet', href: styles },
];

export default function SiteDashboard() {
  const data = useLoaderData<typeof loader>();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <main className="vh-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        logo={data?.siteLogo || defaultLogo}
        siteId={data?.siteCode as string}
        siteName={data?.siteName}
        siteSubDomainUrl={`http://${data?.siteSubDomainUrl}`}
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
            key={data?.siteCode}
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
