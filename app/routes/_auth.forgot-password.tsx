import {
  ActionFunctionArgs,
  LinksFunction,
  MetaFunction,
  redirect,
} from '@remix-run/node';
import logo from '~/assets/images/logo.png';
import ForgotPasswordForm, {
  links as ForgotPasswordFormLinks,
} from '~/components/pages/auth/forgotPassword/ForgotPassword';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Forgot Password' },
    {
      name: 'description',
      content: 'Law on Earth Forgot Password Form',
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
  const email = formData.get('email');

  console.log({ email });

  return redirect('/check-mail');
}

export const links: LinksFunction = () => [...ForgotPasswordFormLinks()];

export default function ForgotPassword() {
  return <ForgotPasswordForm logo={logo} homeUrl="/" loginPageUrl="/login" />;
}
