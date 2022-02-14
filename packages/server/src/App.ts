import express, { RequestHandler } from 'express';
import { Methods } from './Methods';
import { envConfig } from './envConfig';

export class App {
  private readonly app: express.Application;

  private readonly port: number;

  private readonly host: string;

  public constructor() {
    this.app = express();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.port = envConfig.port || 3000;
    this.host = envConfig.host || 'localhost';
  }

  public setRoute = (url: string, method: Methods, handler: RequestHandler) => {
    if (this.app) {
      switch (method) {
        case Methods.GET:
          this.app.get(url, handler);
          break;
        case Methods.PUT:
          this.app.put(url, handler);
          break;
        case Methods.DELETE:
          this.app.delete(url, handler);
          break;
        case Methods.POST:
          this.app.post(url, handler);
          break;
        default:
          throw new Error('No such method');
      }
    }
  };

  public setStatic = (path: string) => {
    this.app.use(express.static(path));
  };

  public run = () => {
    this.app.listen(this.port, this.host, () => {
      // eslint-disable-next-line no-console
      const port = server.adress().port;
      console.log(`Server is ran on port ${this.port}`);
    });
  };
}
