export interface HeaderNavInterface {
  panelType: 'HEADER_NAV_PANEL';
  navLinks: { linkTitle: string; linkUrl: string }[];
  primaryButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
}

export interface HeroPanelInterface {
  panelType: 'HERO_PANEL';
  firstTagline: string;
  secondTagline: string;
  thirdTagline: string;
  subTagline: string;
  secondaryButton?: {
    text: string;
    url: string;
  };
  primaryButton?: {
    text: string;
    url: string;
  };
  ratings?: number;
}

export interface AboutPanelInterface {
  panelType: 'ABOUT_PANEL';
  panelId: string;
  title: string;
  content: string;
  image: string;
}

export interface ServicePanelInterface {
  panelType: 'SERVICE_PANEL';
  panelId: string;
  title: string;
  panelItem: {
    icon: string;
    header: string;
    content: string;
  }[];
}

export interface PricingPanelInterface {
  panelType: 'PRICING_PANEL';
  panelId: string;
  title: string;
  subtitle: string;
  pricingPlans: {
    recommendedPlan: boolean;
    title: string;
    subtitle: string;
    price: string;
    catchphrase: string;
    options: { content: string; enabled: boolean }[];
  }[];
}

export interface TrustedByPanelInterface {
  panelType: 'TRUSTED_BY_PANEL';
  title: string;
  subtitle: string;
  logos: string[];
}

export interface SubscriptionPanelInterface {
  panelType: 'SUBSCRIPTION_PANEL';
  title: string;
  content: string;
  buttonText: string;
}

export interface FooterPanelInterface {
  panelType: 'FOOTER_PANEL';
  companyName: string;
  companyUrl: string;
  footerContent: string;
  footerLinks: { header: string; links: { title: string; link: string }[] }[];
}

export interface DefaultLandingPageDataInterface {
  panelData:
    | HeaderNavInterface
    | HeroPanelInterface
    | AboutPanelInterface
    | ServicePanelInterface
    | PricingPanelInterface
    | TrustedByPanelInterface
    | SubscriptionPanelInterface
    | FooterPanelInterface;
}
