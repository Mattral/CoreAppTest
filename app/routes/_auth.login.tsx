import {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  redirect,
} from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import LoginForm, {
  links as LoginFormLinks,
} from '~/components/pages/auth/login/LoginForm';
import { BadRequestError } from '~/utils/errors/BadRequestError.server';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import { UserInterface } from '../utils/interfaces/User.interface';
import { LoginErrorResponseInterface } from '../utils/interfaces/LoginErrorResponse.interface';
import { authenticator } from '~/services/auth/auth.server';
import { commitSession, getSession } from '../services/auth/session.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Login' },
    {
      name: 'description',
      content: 'Law on earth Login Form',
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

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: '/dashboard',
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.clone().formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // TODO: Validate email

  const response: UserInterface | LoginErrorResponseInterface =
    await authenticator.authenticate('user-pass', request);

  // Failed Login attempt
  if (response?.status === ApiResponseStatusEnum.FAILED) {
    return BadRequestError({
      fields: { email, password },
      formError: response.message,
    });
  }

  // manually get the session
  const session = await getSession(request.headers.get('cookie'));
  // and store the user data
  session.set(authenticator.sessionKey, response);

  // commit the session
  const headers = new Headers({ 'Set-Cookie': await commitSession(session) });

  // Successful Login attempt
  return redirect('/dashboard', { headers });
}

export const links: LinksFunction = () => [...LoginFormLinks()];

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <LoginForm
      logo={logo}
      homeUrl="/"
      registerPageUrl="/register"
      forgotPasswordPageUrl="/forgot-password"
      formError={actionData?.formError || ''}
      // Used to refill any submitted data by the user
      defaultValues={{
        email: actionData?.fields?.email || '',
        password: actionData?.fields?.password || '',
      }}
    />
  );
}
