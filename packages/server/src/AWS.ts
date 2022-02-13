import aws from 'aws-sdk';
import { envConfig } from './envConfig';

export class AWS {
  private config = {
    region: envConfig.region,
    accessKeyId: envConfig.accessKeyId,
    bucketName: envConfig.bucketName,
    secretAccessKey: envConfig.secretAccessKey,
    signatureVersion: 'v4',
  };

  public url = `https://${this.config.bucketName}.s3.${this.config.region}.amazonaws.com/`;

  private s3 = new aws.S3(this.config);

  public upload = (buffer: Buffer, filename: string) => {
    this.s3.putObject(
      {
        Body: buffer,
        Key: filename,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Bucket: envConfig.bucketName,
      },
      (err) => {
        if (err) {
          throw new Error('Uploading to AWS failed');
        }
      },
    );
  };
}
