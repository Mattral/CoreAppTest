import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { Outlet, json, useLoaderData } from '@remix-run/react';
import DashboardHeader, {
  links as DashboardHeaderLinks,
} from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';
import Sidebar, {
  links as SidebarLinks,
} from '~/components/pages/dashboard/Sidebar/Sidebar';
import { getPartner } from '../services/api/getPartner.server';
import logo from '~/assets/images/logo.png';
import styles from '~/styles/dashboard.css';
import { ApiResponseStatusEnum } from '../utils/enums/ApiResponseStatusEnum';

export async function loader({ request }: LoaderFunctionArgs) {
  const partnerSiteName = request.headers.get('X-PARTNER-SITE-CODE') as string;

  const response = await getPartner(partnerSiteName);

  if (response.status !== ApiResponseStatusEnum.SUCCESS) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return json({
    siteName: response.siteName,
    siteLogo: response.siteLogo,
    siteCode: response.siteCode,
    siteSubDomainUrl: response.siteSubDomainUrl,
    siteRoute53Key: response.siteRoute53Key,
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.siteName} | Dashboard` },
    {
      name: 'description',
      content: `${data?.siteName} Dashboard Form`,
    },
    {
      tagName: 'link',
      rel: 'shortcut icon',
      href: data?.siteLogo,
    },
    {
      tagName: 'link',
      rel: 'icon',
      href: data?.siteLogo,
    },
  ];
};

export const links: LinksFunction = () => [
  ...DashboardHeaderLinks(),
  ...SidebarLinks(),
  { rel: 'stylesheet', href: styles },
];

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="vh-100 overflow-hidden local-main-container">
      {/* Sidebar */}
      <Sidebar logo={data?.siteLogo || logo} />
      <section className="vh-100 overflow-y-auto overflow-x-hidden local-dashboard-container">
        {/* Header */}
        <DashboardHeader />
        {/* Children */}
        <section className="py-2 px-5">
          <Outlet />
        </section>
      </section>
    </main>
  );
}
