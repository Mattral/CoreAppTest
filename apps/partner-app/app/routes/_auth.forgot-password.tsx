import {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import ForgotPasswordForm, {
  links as ForgotPasswordFormLinks,
} from '~/components/pages/auth/forgotPassword/ForgotPassword';
import { getPartner } from '~/services/api/getPartner.server';
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
    { title: `${data?.siteName} | Forgot Password` },
    {
      name: 'description',
      content: `${data?.siteName} Forgot Password Form`,
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

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');

  console.log({ email });

  return redirect('/check-mail');
}

export const links: LinksFunction = () => [...ForgotPasswordFormLinks()];

export default function ForgotPassword() {
  const data = useLoaderData<typeof loader>();

  return (
    <ForgotPasswordForm
      logo={data.siteLogo || logo}
      homeUrl="/"
      loginPageUrl="/login"
    />
  );
}
