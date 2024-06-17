import { LinksFunction } from "@remix-run/node";
import styles from "./Pricing.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  panelId: string;
  title: string;
  subtitle: string;
  pricingPlans: PricingPlanInterface[];
}

interface PricingPlanInterface {
  recommendedPlan: boolean;
  title: string;
  subtitle: string;
  price: string;
  catchphrase: string;
  options: { content: string; enabled: boolean }[];
}

export default function PricingPanel(props: PropsInterface) {
  return (
    <section className="p-5" id={props.panelId ? props.panelId : ""}>
      <section className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 col-xl-6">
            <h2 className="text-dark">{props.title}</h2>
            <p className="text-secondary">{props.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row justify-content-center align-items-start g-3">
          {props.pricingPlans.map((plan, index) => (
            <Card key={index} {...plan} />
          ))}
        </div>
      </section>
    </section>
  );
}

const Card = (props: PricingPlanInterface) => {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card">
        <div className="card-body">
          <div
            className={`text-center mb-4 p-3 ${
              props.recommendedPlan ? "local-recommended-pricing" : ""
            }`}
          >
            <h5 className="mb-0">{props.title}</h5>
            <p className="text-secondary">{props.subtitle}</p>
            {props.price ? (
              <div className="mt-4">
                <h2>{props.price}</h2>
                <span className="text-secondary">{props.catchphrase}</span>
              </div>
            ) : null}
          </div>

          <ul className="list-group list-group-flush">
            {props.options.map((option, index) => {
              return (
                <li
                  key={index}
                  className={`list-group-item ${
                    !option.enabled
                      ? "text-decoration-line-through text-secondary"
                      : ""
                  }`}
                >
                  {option.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
