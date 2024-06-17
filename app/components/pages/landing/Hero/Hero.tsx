import { LinksFunction } from '@remix-run/node';
import styles from './Hero.css';

interface HeroPropsInterface {
  firstTagline: string;
  secondTagline: string;
  thirdTagline: string;
  subTagline: string;
  secondaryButton?: { text: string; url: string };
  primaryButton?: { text: string; url: string };
  ratings?: number;
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function Hero(props: HeroPropsInterface) {
  return (
    <section className="p-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="mb-4 local-hero-tagline" data-wow-delay="0.2s">
                {props.firstTagline}{' '}
                <span className="local-hero-text-gradient">
                  {props.secondTagline}
                </span>{' '}
                {props.thirdTagline}
              </h1>

              <div
                className="row justify-content-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="col-md-8">
                  <p className="text-muted f-16 mb-0">{props.subTagline}</p>
                </div>
              </div>

              <div className="my-4 my-sm-5 wow fadeInUp" data-wow-delay="0.4s">
                {props.secondaryButton ? (
                  <a
                    href={props.secondaryButton.url}
                    className="btn btn-outline-secondary me-2"
                  >
                    {props.secondaryButton.text}
                  </a>
                ) : null}

                {props.primaryButton ? (
                  <a href={props.primaryButton.url} className="btn btn-primary">
                    {props.primaryButton.text}
                  </a>
                ) : null}
              </div>

              {props.ratings ? (
                <div
                  className="row g-5 justify-content-center text-center wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="col-auto head-rating-block">
                    <div className="star mb-2">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                    </div>
                    <h4 className="mb-0">
                      {props.ratings}/5{' '}
                      <small className="text-muted f-w-400"> Ratings</small>
                    </h4>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
