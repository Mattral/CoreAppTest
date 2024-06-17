import {
  ActionFunctionArgs,
  type LinksFunction,
  type MetaFunction,
  redirect,
} from '@remix-run/node';
import logo from '~/assets/images/logo.png';
import RegisterForm, {
  links as RegisterFormLinks,
} from '~/components/pages/auth/register/RegisterForm';
import { RegisterAuth } from '~/services/api/register.server';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import { BadRequestError } from '~/utils/errors/BadRequestError.server';
import { getSession, commitSession } from '~/services/auth/session.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Register' },
    {
      name: 'description',
      content: 'Law on Earth Register Form',
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
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validate entries

  // Send request to API
  const response = await RegisterAuth({
    firstName,
    lastName,
    email,
    password,
  });

  console.log({ response: JSON.stringify(response, null, 2) });

  // Failed Login Attempt
  if (response?.status === ApiResponseStatusEnum.FAILED) {
    return BadRequestError({
      fields: { email, password },
      formError: response.message,
    });
  }

  // Get Session
  const session = await getSession(request.headers.get('Cookie'));

  // Session flash message
  session.flash('verificationEmail', email);

  return redirect('/verify', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export const links: LinksFunction = () => [...RegisterFormLinks()];

export default function Register() {
  return (
    <RegisterForm
      logo={logo}
      homeUrl="/"
      loginPageUrl="/login"
      termsAndConditionPageUrl="/terms-and-condition"
    />
  );
}
