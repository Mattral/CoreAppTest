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
import VerifyForm, {
  links as VerifyFormLinks,
} from '~/components/pages/auth/verify/VerifyForm';
import { commitSession, getSession } from '~/services/auth/session.server';
import { ApiResponseStatusEnum } from '../utils/enums/ApiResponseStatusEnum';
import { EmailVerification } from '../services/api/emailVerification.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const verificationEmail = session.get('verificationEmail') || null;

  // Redirect to register page
  if (!verificationEmail) return redirect('/verification-status');

  return json({ verificationEmail });
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Verification' },
    {
      name: 'description',
      content: 'Law on Earth Verification Form',
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

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const resendVerificationCodeForm = formData.get('resendVerificationCodeForm');

  if (resendVerificationCodeForm) {
    console.log({ resendVerificationCodeForm });
    console.log('yea');
    return;
  }
  const verificationCode = formData.get('verificationCode') as string;
  const verificationEmail = formData.get('verificationEmail') as string;

  const response = await EmailVerification({
    verificationCode,
    verificationEmail,
  });

  const verificationStatusResponse = {
    message: response.message,
    status: response.status === ApiResponseStatusEnum.FAILED ? 'failed' : 'ok',
  };

  // Get Session
  const session = await getSession(request.headers.get('Cookie'));

  // Session flash message
  session.flash(
    'verificationStatusResponse',
    JSON.stringify(verificationStatusResponse)
  );

  return redirect('/verification-status', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export const links: LinksFunction = () => [...VerifyFormLinks()];

export default function Verify() {
  const data = useLoaderData<typeof loader>();

  return (
    <VerifyForm
      logo={logo}
      homeUrl="/"
      verificationEmail={data.verificationEmail}
    />
  );
}
