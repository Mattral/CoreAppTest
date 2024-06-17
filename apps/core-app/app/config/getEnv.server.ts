/**
 * Function to return an environment variable or throw an Error for undefined varibales
 */

export function getEnv(name: string): string {
  const envVar = process.env[name];

  if (envVar === undefined || '') {
    throw new Error(`Env variable (${name}) is undefined`);
  } else {
    return envVar;
  }
}
