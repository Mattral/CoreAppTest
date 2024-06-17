import { Form, Link, useSubmit } from '@remix-run/react';
import { ActionFunctionArgs, LinksFunction } from '@remix-run/node';
import styles from '~/components/pages/auth/style/auth.css';
import { useEffect, useState } from 'react';
import { ResendEmailVerificationCode } from '~/services/api/resendEmailVerificationCode.server';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
interface PropsInterface {
  logo: string;
  homeUrl: string;
  verificationEmail: string;
}

export default function VerifyForm(props: PropsInterface) {
  const [splitsOne, splitsTwo] = props.verificationEmail.split('@');
  const chunkedEmail = `****${splitsOne.slice(-2)}@${splitsTwo}`;
  const DEFAULT_COUNT_DOWN_VALUE = 5;
  const [countDown, setCountDown] = useState(DEFAULT_COUNT_DOWN_VALUE);
  const timer = () => setCountDown(countDown - 1);

  const submit = useSubmit();

  useEffect(() => {
    if (countDown < 1) return;

    const interval = setInterval(timer, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  const resendVerificationCode = async () => {
    // setCountDown(DEFAULT_COUNT_DOWN_VALUE);
    submit({ yinka: 'enoch' }, { method: 'post' });

    console.log('sunk');

    // Resend verification code
    // ResendEmailVerificationCode(props.verificationEmail);
  };

  return (
    <main className="d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <section className="card my-5 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to={props.homeUrl}>
              <img src={props.logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>

          <h4 className="text-center mb-4">Enter Verification Code</h4>
          <p className="mt-4 text-sm text-muted">
            Check your email {chunkedEmail}
          </p>

          <form action="" method="POST">
            <div className="mb-3">
              <input
                type="tel"
                name="verificationCode"
                id="verificationCode"
                className="form-control local-form-control"
                placeholder=""
                required
                aria-required
                maxLength={10}
              />
            </div>

            <input
              type="hidden"
              name="verificationEmail"
              id="verificationEmail"
              value={props.verificationEmail}
            />

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary local-btn">
                Continue
              </button>
            </div>
          </form>

          {countDown < 1 ? (
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h6 className="fw-medium mb-0">Did not receive the email?</h6>
              <Form method="POST" onChange={resendVerificationCode}>
                <button
                  type="submit"
                  className="btn btn-link text-decoration-none fw-light"
                  // name="resendVerificationCodeForm"
                  // value="resendVerificationCode"
                  // onClick={resendVerificationCode}
                >
                  Resend Code
                </button>
              </Form>
            </div>
          ) : (
            <div className="text-end mt-4 text-secondary pe-none">
              <span>{countDown}s</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
