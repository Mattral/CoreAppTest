import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import CheckMailForm, {
  links as CheckMailFormLinks,
} from '~/components/pages/auth/checkMail/CheckMailForm';
import { getPartner } from '../services/api/getPartner.server';
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
    { title: `${data?.siteName} | Check Mail` },
    {
      name: 'description',
      content: `${data?.siteName} Check Mail Form`,
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

export const links: LinksFunction = () => [...CheckMailFormLinks()];

export default function CheckMail() {
  const data = useLoaderData<typeof loader>();

  return (
    <CheckMailForm
      logo={data.siteLogo || logo}
      homeUrl="/"
      loginPageUrl="/login"
    />
  );
}
