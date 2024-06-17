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
import ResetPasswordForm, {
  links as ResetPasswordFormLinks,
} from '~/components/pages/auth/resetPassword/ResetPasswordForm';
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
    { title: `${data?.siteName} | Reset Password` },
    {
      name: 'description',
      content: `${data?.siteName} Reset Password Form`,
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
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (password !== confirmPassword) {
    return null;
  }

  console.log({ confirmPassword, password });

  return redirect('/login');
}

export const links: LinksFunction = () => [...ResetPasswordFormLinks()];

export default function ResetPassword() {
  const data = useLoaderData<typeof loader>();

  return <ResetPasswordForm logo={data.siteLogo || logo} homeUrl="/" />;
}
