import { Authenticator } from 'remix-auth';
import { sessionStorage } from './session.server';
import { FormStrategy } from 'remix-auth-form';
import { UserInterface } from '~/utils/interfaces/User.interface';
import invariant from 'tiny-invariant';
import { LoginAuth } from '../api/login.server';
import { LoginErrorResponseInterface } from '../../utils/interfaces/LoginErrorResponse.interface';

export const authenticator = new Authenticator<
  UserInterface | LoginErrorResponseInterface
>(sessionStorage);

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    // You can validate the inputs however you want
    invariant(typeof email === 'string', 'email must be a string');
    invariant(email.length > 0, 'email must not be empty');

    invariant(typeof password === 'string', 'password must be a string');
    invariant(password.length > 0, 'password must not be empty');

    const user = await LoginAuth({ email, password });

    return user;
  }),
  'user-pass'
);
