import { type LinksFunction, type MetaFunction } from '@remix-run/node';
// import { pageData } from '../constants/landingPageData';
import { pageData } from '../constants/landingPageData';
import Hero, { links as HeroLinks } from '~/components/pages/landing/Hero/Hero';
import Header, {
  links as HeaderLinks,
} from '~/components/pages/landing/Header/Header';
import logo from '~/assets/images/logo.png';
import Panel, {
  links as PanelLinks,
} from '~/components/pages/landing/Panel/Panel';
import Subscription from '~/components/pages/landing/Subscription/Subscription';
import Footer, {
  links as FooterLinks,
} from '~/components/pages/landing/Footer/Footer';
import TrustedByPanel from '../components/pages/landing/TrustedBy/TrustedBy';
import PricingPanel, {
  links as PricingPanelLinks,
} from '../components/pages/landing/Pricing/Pricing';
import AboutPanel from '../components/pages/landing/About/About';

export const meta: MetaFunction = () => {
  return [
    { title: 'Law On Earth' },
    {
      name: 'description',
      content: 'Welcome to Law on earth!',
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

export const links: LinksFunction = () => [
  ...HeaderLinks(),
  ...HeroLinks(),
  ...PanelLinks(),
  ...PricingPanelLinks(),
  ...FooterLinks(),
];

export default function Index() {
  return (
    <main className="overflow-x-hidden">
      <Header
        logo={logo}
        homepageUrl={pageData.partnerUrl}
        links={pageData.headerNav.navLinks}
        rootUrl={pageData.partnerUrl}
        primaryButton={pageData.headerNav.primaryButton}
        secondaryButton={pageData.headerNav.secondaryButton ?? null}
      />

      <Hero
        firstTagline={pageData.hero.tagline.firstTagline}
        secondTagline={pageData.hero.tagline.secondTagline}
        thirdTagline={pageData.hero.tagline.thirdTagline}
        subTagline={pageData.hero.subTagline}
        secondaryButton={pageData.hero.secondaryButton}
        primaryButton={pageData.hero.primaryButton}
        ratings={pageData.hero.ratings}
      />

      <AboutPanel
        panelId={pageData.about.panelId}
        title={pageData.about.title}
        content={pageData.about.content}
        image={pageData.about.image}
      />

      {pageData.services ? (
        <Panel
          panelId={pageData.services.panelId}
          title={pageData.services.title}
          panelItem={pageData.services.panelItem}
        />
      ) : null}

      {pageData.firstpanel ? (
        <Panel
          title={pageData.firstpanel.title}
          panelItem={pageData.firstpanel.panelItem}
        />
      ) : null}

      {pageData.pricing ? (
        <PricingPanel
          panelId={pageData.pricing.panelId}
          title={pageData.pricing.title}
          subtitle={pageData.pricing.subtitle}
          pricingPlans={pageData.pricing.pricingPlans}
        />
      ) : null}

      {pageData.trustedBy ? (
        <TrustedByPanel
          title={pageData.trustedBy.title}
          subtitle={pageData.trustedBy.subtitle}
          logos={pageData.trustedBy.logos}
        />
      ) : null}

      {pageData.subscription ? (
        <Subscription
          title={pageData.subscription.title}
          content={pageData.subscription.content}
          buttonText={pageData.subscription.buttonText}
        />
      ) : null}

      <Footer
        logo={logo}
        companyName={pageData.footer.companyName}
        companyUrl={pageData.footer.companyUrl}
        footerContent={pageData.footer.footerContent}
        footerLinks={pageData.footer.footerLinks}
      />
    </main>
  );
}
