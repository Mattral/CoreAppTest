interface PropsInterface {
  title: string;
  content: string;
  buttonText: string;
}

export default function Subscription(props: PropsInterface) {
  return (
    <div className="container title mb-0 py-5">
      <div
        className="row align-items-center"
        data-wow-delay="0.2s"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease-out-back"
      >
        <div className="col-md-5">
          <h2 className="mb-3">{props.title}</h2>
          <p className="mb-4 mb-md-0">{props.content}</p>
        </div>
        <div className="col-md-4 offset-md-3">
          <div className="row">
            <div className="col">
              <input
                type="email"
                name="subscriber-email"
                id="subscriber-email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" type="submit">
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
