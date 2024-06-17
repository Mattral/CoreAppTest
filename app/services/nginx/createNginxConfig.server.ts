import { Client } from 'ssh2';
import { readFileSync } from 'fs';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

export const createNginxConfig = async (
  assignedSubDomain: string,
  companyCode: string
): Promise<{ status: string; message: string }> => {
  return new Promise((resolve, reject) => {
    const template = `
      server {
        listen 80;
        server_name ${assignedSubDomain};
      
        # Redirect all HTTP requests to HTTPS with a 301 Moved Permanently response status
        return 301 https://$host$request_uri;
      }
  
      server {
        listen 443 ssl;
        server_name ${assignedSubDomain};
      
        ssl_certificate /etc/nginx/certificates/fullchain.pem;
        ssl_certificate_key /etc/nginx/certificates/privkey.pem;
      
        ssl_protocols TLSv1.2 TLSv1.3;
      
        location / {
          proxy_set_header X-PARTNER-SITE-CODE "${companyCode}";
      
          proxy_pass http://partner;
        }
      }
  `;

    const fileName = `${assignedSubDomain}.default.conf`;

    const sshConnection = new Client();

    sshConnection
      .connect({
        host: AppConfig.EC2_INSTANCE_HOST,
        port: AppConfig.EC2_INSTANCE_PORT,
        username: AppConfig.EC2_INSTANCE_USERNAME,
        privateKey: readFileSync(AppConfig.EC2_INSTANCE_PRIVATE_KEY_PATH),
      })
      .on('ready', () => {
        console.log('Client::Ready');

        // Start shell
        sshConnection.shell((err, stream) => {
          if (err)
            reject({
              status: ApiResponseStatusEnum.FAILED,
              message: err?.message,
            });

          stream
            .on('data', (data: unknown) => {
              console.log('OUTPUT: ' + data);
            })
            .on('close', () => {
              sshConnection.end();
            });

          stream.end(
            `cd app/docker/nginx_partials\necho '${template}' > ${fileName}\ndocker service update --force ${AppConfig.EC2_INSTANCE_DOCKER_SERVICE_NAME}\nexit\n`
          );
        });
      })
      .on('error', (err) => {
        reject({ status: ApiResponseStatusEnum.FAILED, message: err?.message });
      })
      .on('end', () => {
        resolve({
          status: ApiResponseStatusEnum.SUCCESS,
          message: `Assigned Domain (${assignedSubDomain}) successfully created`,
        });
      });
  });
};
