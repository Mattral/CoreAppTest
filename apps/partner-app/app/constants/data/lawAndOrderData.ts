import { LandingPageDataInterface } from "~/utils/interfaces/LandingPageData.interface";

export const projectData: LandingPageDataInterface = {
  partnerId: "12345",
  partnerUrl: "/partner/lao",
  partnerSiteName: "Law and Order",
  siteLogo: "https://ableproadmin.com/assets/images/landing/tech-angular.svg",
  headerNav: {
    navLinks: [
      { linkTitle: "Why Us", linkUrl: "#" },
      { linkTitle: "Team", linkUrl: "#" },
      { linkTitle: "Awards", linkUrl: "#" },
      { linkTitle: "Pricing", linkUrl: "#" },
      { linkTitle: "Blog", linkUrl: "#" },
      { linkTitle: "Testimonials", linkUrl: "#" },
    ],
    primaryButton: {
      text: "Create Account",
      url: "#",
    },
  },
  hero: {
    tagline: {
      firstTagline: "The law is",
      secondTagline: "our passion",
      thirdTagline: "",
    },
    subTagline:
      "We know what it is to defend rights. We work with people, for people, and with the full respect to the law. Contact us for more details!",
    primaryButton: {
      text: "Learn More",
      url: "#",
    },
  },

  firstpanel: {
    title: "Why work with Us?",
    panelItem: [
      {
        icon: "fa-regular fa-clock",
        header: "Available Anytime Anywhere",
        content:
          "Access Law on Earth's services online 24/7. You can complete your documents and business registration in as little as 5 minutes and then instantly download your document.",
      },
      {
        icon: "fa-solid fa-award",
        header: "Quality Your Can Trust",
        content:
          "Each advisor has at least 3-years' experience in their field, so you can have peace of mind knowing that you can access the expert support that you need.",
      },
      {
        icon: "fa-solid fa-wallet",
        header: "Transparent Pricing",
        content:
          "You can save thousands on legal fees with our fixed-price system, you'll know exactly what you'll pay for from the start so you can make the best decision for your needs.",
      },
    ],
  },

  footer: {
    companyName: "Law And Order Ltd",
    companyUrl: "",
    footerContent:
      "A way to connect the world and make legal services accessible to everyone. The Law On Earth portal contains 100's of legal documents and guidance sheets so that clients can self-service yet also receive advice packages depending on their subscription level.",
    footerLinks: [
      {
        header: "Useful Links",
        links: [
          { title: "Clients", link: "#" },
          { title: "Pro bono", link: "#" },
          { title: "How to join as a partner", link: "#" },
          { title: "Help", link: "#" },
        ],
      },
      {
        header: "Help & Support",
        links: [
          {
            title: "Address: 8222 Nico Fork, Parisianbury, California",
            link: "",
          },
          { title: "Email Us: cs@lawandorder.com", link: "" },
        ],
      },
      {
        header: "Resources",
        links: [
          { title: "Customer Terms", link: "#" },
          { title: "Privacy Policy", link: "#" },
          { title: "Partner Terms", link: "#" },
        ],
      },
    ],
  },
};
