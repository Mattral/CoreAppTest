import { AppConfigType, AppConfigSchema } from './type';

export function defineConfig(config: AppConfigType) {
  return AppConfigSchema.parse(config);
}
