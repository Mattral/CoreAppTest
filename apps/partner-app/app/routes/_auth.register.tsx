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
import RegisterForm, {
  links as RegisterFormLinks,
} from '~/components/pages/auth/register/RegisterForm';
import { getPartner } from '~/services/api/getPartner.server';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import { BadRequestError } from '~/utils/errors/BadRequestError.server';
import { getSession, commitSession } from '~/services/auth/session.server';
import { UserRegistration } from '../services/api/register.server';

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
    { title: `${data?.siteName} | Register` },
    {
      name: 'description',
      content: `${data?.siteName} Register Form`,
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
  // Session
  const session = await getSession(request.headers.get('Cookie'));

  const formData = await request.formData();
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // TODO: Validate entries

  // Send request to API
  const response = await UserRegistration({
    firstName,
    lastName,
    email,
    password,
  });

  // Failed Login Attempt: Server
  if (response?.status === ApiResponseStatusEnum.FAILED) {
    return BadRequestError({
      fields: { email, password },
      formError: response.message,
    });
  }

  // Session flash message
  session.flash('verificationEmail', `${email}`);

  return redirect('/verify', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export const links: LinksFunction = () => [...RegisterFormLinks()];

export default function Register() {
  const data = useLoaderData<typeof loader>();

  return (
    <RegisterForm
      logo={data.siteLogo || logo}
      homeUrl="/"
      loginPageUrl="/login"
      termsAndConditionPageUrl="/terms-and-condition"
    />
  );
}
