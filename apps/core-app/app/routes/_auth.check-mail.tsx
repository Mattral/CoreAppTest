import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import CheckMailForm, {
  links as CheckMailFormLinks,
} from '~/components/pages/auth/checkMail/CheckMailForm';
import { getSession } from '../services/auth/session.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth | Check Mail' },
    {
      name: 'description',
      content: 'Law on Earth Check Mail Form',
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

export const links: LinksFunction = () => [...CheckMailFormLinks()];

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const message = session.get('checkMailMessage') || null;

  return json({ message });
}

export default function CheckMail() {
  const data = useLoaderData<typeof loader>();

  return (
    <CheckMailForm
      logo={logo}
      homeUrl="/"
      loginPageUrl="/login"
      message={data?.message}
    />
  );
}
