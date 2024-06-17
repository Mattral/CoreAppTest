import { LinksFunction } from "@remix-run/node";
import styles from "./Notification.css";

interface CardPropsInterface {
  timestamp: string;
  title: string;
  content: string;
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Notification({
  notifications,
}: {
  notifications: CardPropsInterface[];
}) {
  return (
    <section className="dropdown-menu p-4 mt-2 shadow-lg border border-0 overflow-hidden local-notification">
      <div className="dropdown-header d-flex align-items-center justify-content-between mb-3">
        <h5 className="m-0">Notifications</h5>
        <a href="#!" className="btn btn-link btn-sm">
          Mark all read
        </a>
      </div>

      <div
        className="dropdown-body text-wrap overflow-x-hidden overflow-y-auto pe-3"
        style={{ maxHeight: "85%" }}
      >
        {notifications.map((item, index) => (
          <NotificationCard
            key={index}
            timestamp={item.timestamp}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      <div className="text-center py-2">
        <a href="#!" className="link-danger" role="button">
          Clear all Notifications
        </a>
      </div>
    </section>
  );
}

function NotificationCard(props: CardPropsInterface) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <article>
          <span className="float-end text-sm text-muted">
            {props.timestamp}
          </span>
          <h5 className="text-body mb-2">{props.title}</h5>
          <p className="mb-0">{props.content}</p>
        </article>
      </div>
    </div>
  );
}
