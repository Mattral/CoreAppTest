import { AboutPanelInterface } from "~/utils/interfaces/LandingPageData.interface";

export default function AboutPanel(props: AboutPanelInterface) {
  return (
    <section className="p-5" id={props.panelId ? props.panelId : ""}>
      <h2 className="text-center mb-5">{props.title}</h2>

      <section className="container">
        <section className="row">
          <div className="col-md-6 overflow-hidden">
            <img
              alt={props.image}
              src={props.image}
              className="img-fluid d-block"
            />
          </div>
          <div
            className="col-md-6 p-3 overflow-hidden"
            style={{
              backgroundColor: "rgba(var(--bs-secondary-rgb), 0.1)",
              whiteSpace: "pre-line",
            }}
          >
            {props.content}
          </div>
        </section>
      </section>
    </section>
  );
}
