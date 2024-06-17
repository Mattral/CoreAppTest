import { LandingPageDataInterface } from "~/utils/interfaces/LandingPageData.interface";

export const projectData: LandingPageDataInterface = {
  partnerSiteName: "Easy HR",
  partnerId: "12345",
  partnerUrl: "/",
  siteLogo: "https://ableproadmin.com/assets/images/landing/tech-bootstrap.svg",
  headerNav: {
    navLinks: [
      { linkTitle: "About", linkUrl: `/about` },
      { linkTitle: "Pricing", linkUrl: `#pricing` },
    ],
    primaryButton: {
      text: "Register",
      url: "/register",
    },
    secondaryButton: {
      text: "Login",
      url: "/login",
    },
  },
  hero: {
    tagline: {
      firstTagline: "HR Management Definitely",
      secondTagline: "Easy And Simple",
      thirdTagline: "",
    },
    subTagline:
      "Simplify Operations, Empower Teams, And Optimize Workforce Efficiency With Our Comprehensive Human Resources Solutions",
    primaryButton: {
      text: "Get Started for Free",
      url: "#",
    },
  },

  firstpanel: {
    title: "Why Us?",
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

  subscription: {
    title: "Let's keep you updated",
    content:
      "Subscribe now to top news related to Easy HR feature updates, roadmap, and news.",
    buttonText: "Subscribe",
  },

  footer: {
    companyName: "Easy HR Inc",
    companyUrl: "",
    footerContent:
      "A way to connect the world and make legal services accessible to everyone. The Law On Earth portal contains 100's of legal documents and guidance sheets so that clients can self-service yet also receive advice packages depending on their subscription level.",
    footerLinks: [
      {
        header: "Useful Links",
        links: [
          { title: "Clients", link: "#" },
          { title: "Staffing", link: "#" },
          { title: "Records", link: "#" },
          { title: "Help", link: "#" },
        ],
      },
      {
        header: "Help & Support",
        links: [
          {
            title: "Address: 741, Abbey Plaza, 853 Langosh Lake, California",
            link: "",
          },
          { title: "Email Us: cs@easyhr.com", link: "" },
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
