import express, { type Express } from 'express';
import { env } from './env.js';
import { routes } from './routes/index.js';
import { corsMiddleware, errorHandler } from './middlewares/index.js';

export class App {
  private readonly app: Express = express();

  private readonly port: number = env.Port;

  public async start(): Promise<void> {
    this.registerMiddlewares();
    this.registerRoutes();
    this.listen();
  }

  private registerMiddlewares(): void {
    this.app.use(corsMiddleware);
    this.app.use(express.json());
  }

  private registerRoutes(): void {
    this.app.get('/', (req, res) => res.json({ status: 'ok' }));
    this.app.use('/api', routes);
    this.app.use(errorHandler);
  }

  private listen(): void {
    this.app.listen(this.port, () => console.log(`[Server] started on port ${this.port}`));
  }
}
