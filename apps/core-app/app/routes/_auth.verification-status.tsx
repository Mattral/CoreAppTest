import { Link, useLoaderData } from '@remix-run/react';
import logo from '~/assets/images/logo.png';
import { LinksFunction, LoaderFunctionArgs, json } from '@remix-run/node';
import styles from '~/components/pages/auth/style/auth.css';
import { getSession } from '../services/auth/session.server';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const verificationStatusResponse =
    session.get('verificationStatusResponse') || null;

  return json({ verificationStatusResponse });
}

enum VerificationStatusEnum {
  FAILED = 'failed',
}

export default function VerificationFailed() {
  const data = useLoaderData<typeof loader>();
  const { status, message } = data.verificationStatusResponse
    ? JSON.parse(data.verificationStatusResponse)
    : { status: 'failed', message: '' };

  return (
    <main className="d-flex flex-column align-items-center justify-content-center vh-100 p-4">
      <section className="card my-5 fw-normal w-100 local-card">
        <div className="card-body p-4">
          <aside className="mb-4 text-center">
            <Link to="/">
              <img src={logo} alt="logo" width="40px" height="40px" />
            </Link>
          </aside>

          <h4 className="text-center mb-4">
            {status === VerificationStatusEnum.FAILED
              ? 'Verification Error'
              : 'Verification Successful'}
          </h4>
          <p className="mt-4 text-sm text-muted">
            {message ||
              'We encountered an error while trying to verify your email. Please try again later.'}
          </p>

          <div className="d-grid mt-4">
            <Link to="/login" className="btn btn-primary local-btn">
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
