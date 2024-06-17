import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';
import Hero, { links as HeroLinks } from '~/components/pages/landing/Hero/Hero';
import Header, {
  links as HeaderLinks,
} from '~/components/pages/landing/Header/Header';
import Panel, {
  links as PanelLinks,
} from '~/components/pages/landing/Panel/Panel';
import Subscription from '~/components/pages/landing/Subscription/Subscription';
import Footer, {
  links as FooterLinks,
} from '~/components/pages/landing/Footer/Footer';
import { useLoaderData } from '@remix-run/react';
import { getPartnerLandingPageData } from '~/services/api/getPartnerLandingPageData.server';
import TrustedByPanel from '../components/pages/landing/TrustedBy/TrustedBy';
import PricingPanel, {
  links as PricingPanelLinks,
} from '../components/pages/landing/Pricing/Pricing';
import AboutPanel from '../components/pages/landing/About/About';
import { ApiResponseStatusEnum } from '../utils/enums/ApiResponseStatusEnum';

export async function loader({ request }: LoaderFunctionArgs) {
  const partnerSiteCode = request.headers.get('X-PARTNER-SITE-CODE') as string;

  const response = await getPartnerLandingPageData(partnerSiteCode);

  if (response.status !== ApiResponseStatusEnum.SUCCESS) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return json({
    pageData: response.landingPageData?.panels,
    siteName: response.landingPageData?.siteName,
    siteLogo: response.landingPageData?.siteLogo,
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.siteName },
    {
      name: 'description',
      content: `Welcome to ${data?.siteName}`,
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

export const links: LinksFunction = () => [
  ...HeaderLinks(),
  ...HeroLinks(),
  ...PanelLinks(),
  ...PricingPanelLinks(),
  ...FooterLinks(),
];

export default function Index() {
  const { pageData, siteLogo } = useLoaderData<typeof loader>();

  return (
    <main className="overflow-x-hidden">
      {pageData &&
        pageData.map(({ panelData }, index) => {
          const { panelType } = panelData;

          if (panelType === 'HEADER_NAV_PANEL') {
            return <Header {...panelData} logo={siteLogo} key={index} />;
          }

          if (panelType === 'HERO_PANEL') {
            return <Hero {...panelData} key={index} />;
          }

          if (panelType === 'ABOUT_PANEL') {
            return <AboutPanel {...panelData} key={index} />;
          }

          if (panelType === 'SERVICE_PANEL') {
            return <Panel {...panelData} key={index} />;
          }

          if (panelType === 'PRICING_PANEL') {
            return <PricingPanel {...panelData} key={index} />;
          }

          if (panelType === 'TRUSTED_BY_PANEL') {
            return <TrustedByPanel {...panelData} key={index} />;
          }

          if (panelType === 'SUBSCRIPTION_PANEL') {
            return <Subscription {...panelData} key={index} />;
          }

          if (panelType === 'FOOTER_PANEL') {
            return <Footer {...panelData} key={index} />;
          }
        })}
    </main>
  );
}
