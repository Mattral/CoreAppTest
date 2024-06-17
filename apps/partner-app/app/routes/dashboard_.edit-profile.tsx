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
import EditProfileForm, {
  links as EditProfileFormLinks,
} from '../components/pages/dashboard/editProfile/EditProfileForm';
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

export const links: LinksFunction = () => [...EditProfileFormLinks()];

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.siteName} | Edit profile` },
    {
      name: 'description',
      content: `${data?.siteName} Edit profile Form`,
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
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const password = formData.get('password');

  console.log({ firstName, lastName, email, password });

  return redirect('/dashboard');
}

export default function EditProfile() {
  const data = useLoaderData<typeof loader>();

  return (
    <EditProfileForm
      logo={data.siteLogo || logo}
      homeUrl="/"
      submittedData={{
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
      }}
    />
  );
}
