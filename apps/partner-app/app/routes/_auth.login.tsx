import {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import LoginForm, {
  links as LoginFormLinks,
} from '~/components/pages/auth/login/LoginForm';
import { getPartner } from '~/services/api/getPartner.server';
import { BadRequestError } from '~/utils/errors/BadRequestError.server';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import { UserLogin } from '../services/api/login.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const partnerSiteName = request.headers.get('X-PARTNER-SITE-CODE') as string;
  const response = await getPartner(partnerSiteName);

  // TODO: Check for previous authentication

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
    { title: `${data?.siteName} | Login` },
    {
      name: 'description',
      content: `${data?.siteName} Login Form`,
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
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // TODO: Validate email
  // TODO: Validate Password

  // Send request to API
  const resp = await UserLogin(email, password);

  // Failed Login attempt (Server response)
  if (resp.status === ApiResponseStatusEnum.FAILED) {
    return BadRequestError({
      fields: { email, password },
      formError: resp.message,
    });
  }

  // Successful Login attempt
  return redirect('/dashboard');
}

export const links: LinksFunction = () => [...LoginFormLinks()];

export default function Login() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <LoginForm
      logo={data.siteLogo || logo}
      homeUrl="/"
      registerPageUrl="/register"
      forgotPasswordPageUrl="/forgot-password"
      formError={actionData?.formError as string}
      // Used to refill any submitted data by the user
      defaultValues={{
        email: actionData?.fields?.email || '',
        password: actionData?.fields?.password || '',
      }}
    />
  );
}
