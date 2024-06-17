import { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import logo from "~/assets/images/logo.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Law On Earth | Terms and Conditions" },
    {
      name: "description",
      content: "Welcome to Law on earth!",
    },
    {
      tagName: "link",
      rel: "shortcut icon",
      href: logo,
    },
    {
      tagName: "link",
      rel: "icon",
      href: logo,
    },
  ];
};

export default function TermsAndCondition() {
  const navigate = useNavigate();

  return (
    <main className="p-3 px-5 w-75 mx-auto">
      <button
        type="button"
        className="btn btn-link"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to Previous page
      </button>

      <section className="mt-5">
        <h1>Terms and Conditions</h1>
        <article>
          <p>
            Welcome to our website! These terms and conditions{" "}
            {`("Terms", "Terms
            of Service") govern your access to and use of [Your Website Name]
            ("Service", "Website") operated by [Your Company Name] ("us", "we",
            or "our")`}
            .
          </p>
          <p>
            Please read these Terms carefully before accessing or using our
            Service. By accessing or using the Service, you agree to be bound by
            these Terms. If you disagree with any part of the terms then you may
            not access the Service.
          </p>

          <h2>Your Account</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
            odio ut tellus tincidunt blandit eget eget quis magna. Sed vel
            sapien eu magna laoreet rutrum. Donec vitae leo at tellus
            sollicitudin tincidunt vitae et leo. Pellentesque eget ultrices
            odio. Aenean eu leo quam. Pellentesque quam odio, nonummy eget,
            vestibulum vel, mauris eget, quam. Morbi leo risus, porta ac,
            consectetur ac, vestibulum at, eros. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Mauris blandit aliquam elit, eget tincidunt odio laoreet vitae.
          </p>

          <h2>Links to Other Web Sites</h2>

          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by us. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third party web sites or services.{" "}
          </p>
          <p>
            We encourage you to be aware of when you leave our Service and to
            read the terms and conditions and privacy policy of any other web
            site that you visit.
          </p>

          <h2>Termination</h2>

          <p>
            We may terminate or suspend your access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these Terms.
          </p>
          <p>
            All provisions of these Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </p>

          <h2>Governing Law</h2>

          <p>
            These Terms shall be governed and construed in accordance with the
            laws of [Your Country] without regard to its conflict of law
            provisions.
          </p>

          <h2>Changes to These Terms</h2>

          <p>
            We reserve the right to update or change our Terms at any time
            without prior notice. We will notify you of any significant changes
            by posting the new Terms on this page.{" "}
          </p>
          <p>
            You are advised to review these Terms periodically for any changes.
            Your continued use of the Service after we post revisions to these
            Terms means you accept and agree to the changes.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <Link to="mailto:mail@example.com">mail@example.com</Link>.
          </p>
        </article>
      </section>
    </main>
  );
}
