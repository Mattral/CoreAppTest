import {
  ActionFunctionArgs,
  LinksFunction,
  MetaFunction,
  redirect,
} from '@remix-run/node';
import logo from '~/assets/images/logo.png';
import ResetPasswordForm, {
  links as ResetPasswordFormLinks,
} from '~/components/pages/auth/resetPassword/ResetPasswordForm';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Reset Password' },
    {
      name: 'description',
      content: 'Law on Earth Reset Password Form',
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
  return <ResetPasswordForm logo={logo} homeUrl="/" />;
}
