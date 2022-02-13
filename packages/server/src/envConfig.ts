export const envConfig = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  port: Number.parseInt(process.env.PORT, 10),
  host: process.env.HOST,
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  bucketName: process.env.BUCKET_NAME,
  secretAccessKey: process.env.ACCESS_KEY,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  maxSize: Number.parseInt(process.env.MAX_SIZE, 10) || 20971520,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  allowedFormats: process.env.ALLOWED_FORMATS.split('|'),
};
