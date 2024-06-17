import {
  ActionFunctionArgs,
  type LinksFunction,
  type MetaFunction,
  redirect,
  LoaderFunctionArgs,
  json,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import { getPartner } from '~/services/api/getPartner.server';
import VerifyForm, {
  links as VerifyFormLinks,
} from '~/components/pages/auth/verify/VerifyForm';
import { getSession } from '~/services/auth/session.server';
// import { EmailVerification } from "~/services/api/emailVerification.server";
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

  const session = await getSession(request.headers.get('Cookie'));
  const verificationEmail = session.get('verificationEmail') || null;

  // Redirect to login page
  // User logs in and a verification popup can be shown
  if (!verificationEmail) return redirect('/login');

  return json({
    siteName: response.siteName,
    siteLogo: response.siteLogo,
    siteCode: response.siteCode,
    siteSubDomainUrl: response.siteSubDomainUrl,
    siteRoute53Key: response.siteRoute53Key,
    verificationEmail,
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.siteName} | Verification` },
    {
      name: 'description',
      content: `${data?.siteName} Verification Form`,
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
  const verificationCode = formData.get('verificationCode') as string;
  const verificationEmail = formData.get('verificationEmail') as string;

  console.log({ verificationCode, verificationEmail });

  // const response = await EmailVerification({
  //   verificationCode,
  //   verificationEmail,
  // });

  // Failed verification
  // if (response?.error || response.status !== ApiResponseStatusEnum.OK) {
  //   return redirect("/register");
  // }

  return redirect('/dashboard/edit-profile');
}

export const links: LinksFunction = () => [...VerifyFormLinks()];

export default function Register() {
  const data = useLoaderData<typeof loader>();

  return (
    <VerifyForm
      logo={data.siteLogo || logo}
      homeUrl="/"
      verificationEmail={data.verificationEmail}
    />
  );
}
