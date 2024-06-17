import { createCookieSessionStorage } from '@remix-run/node';
import { AppConfig } from '../../config';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_LOE_SessionKey',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    // maxAge: 60 * 60 * 24 * 30, // 30 days
    maxAge: 1000 * 20,
    secrets: [`${AppConfig.COOKIE_SECRET}`],
    secure: AppConfig.NODE_ENV === 'production',
  },
});

// you can also export the methods individually for your own usage
export const { getSession, commitSession, destroySession } = sessionStorage;
