interface PropsInterface {
  title: string;
  subtitle: string;
  logos: string[];
}

export default function TrustedByPanel(props: PropsInterface) {
  return (
    <section className="bg-white p-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <h2>{props.title}</h2>
            <p className="my-4 mb-5">{props.subtitle}</p>

            <div className="row justify-content-center align-items-center g-5 overflow-hidden">
              {props.logos.map((logo, index) => {
                return (
                  <div
                    className="col-sm-2 col-md-4 overflow-hidden"
                    key={index}
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                  >
                    <img
                      src={logo}
                      alt={logo}
                      className="img-fluid d-block w-100"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
