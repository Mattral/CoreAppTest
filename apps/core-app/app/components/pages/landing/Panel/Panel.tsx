import { LinksFunction } from "@remix-run/node";
import styles from "./Panel.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface PropsInterface {
  panelId?: string;
  title: string;
  panelItem: { icon: string; header: string; content: string }[];
}

export default function Panel(props: PropsInterface) {
  return (
    <section className="bg-primary p-5" id={props.panelId ? props.panelId : ""}>
      <section className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-xl-6">
            <h2 className="mb-5 text-white">{props.title}</h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="local-row">
          {props.panelItem.map((item, index) => {
            return <CardItem key={index} {...item} />;
          })}
        </div>
      </section>
    </section>
  );
}

const CardItem = (props: { icon: string; header: string; content: string }) => {
  return (
    <div className="card local-card">
      <div className="card-body">
        <p className="fs-2">
          <i className={props.icon}></i>
        </p>
        <h4 className="mb-3 mt-2">{props.header}</h4>
        <p className="text-muted">{props.content}</p>
      </div>
    </div>
  );
};
