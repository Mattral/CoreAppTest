import { Client } from 'ssh2';
import { readFileSync } from 'fs';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

export const deleteNginxConfig = async (assignedSubDomain: string) => {
  return new Promise((resolve, reject) => {
    const sshConnection = new Client();

    const fileName = `${assignedSubDomain}.default.conf`;

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
            `cd app/docker/nginx_partials\nrm -rf ${fileName}\nexit\n`
          );
        });
      })
      .on('error', (err) => {
        reject({ status: ApiResponseStatusEnum.FAILED, message: err?.message });
      })
      .on('end', () => {
        resolve({
          status: ApiResponseStatusEnum.SUCCESS,
          message: `Assigned Domain (${assignedSubDomain}) successfully deleted`,
        });
      });
  });
};
