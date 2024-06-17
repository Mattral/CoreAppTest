import { z } from 'zod';

export const AppConfigSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'staging', 'production']),
  COOKIE_SECRET: z.string(),
  BASE_API_URL: z.string(),
  ADMIN_COMPANY_CODE: z.string(),
  ADMIN_FRONTEND_KEY: z.string(),
  FRONTEND_DOMAIN_NAME: z.string(),
  AWS_ACCESS_KEY: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_REGION: z.string(),
  EC2_INSTANCE_HOST: z.string(),
  EC2_INSTANCE_PORT: z.number(),
  EC2_INSTANCE_USERNAME: z.string(),
  EC2_INSTANCE_PRIVATE_KEY_PATH: z.string(),
  EC2_INSTANCE_DOCKER_SERVICE_NAME: z.string(),
  AWS_ROUTE53_HOSTED_ZONE_ID: z.string(),
  EC2_INSTANCE_IP_ADDRESS: z.string(),
});

export type AppConfigType = z.infer<typeof AppConfigSchema>;
