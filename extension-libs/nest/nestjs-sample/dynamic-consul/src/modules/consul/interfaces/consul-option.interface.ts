export interface ConsulOption {
  host: string;
  port: string;
  baseUrl?: string;
  secure?: boolean;
  promisify?: boolean;
  defaults?: object;
}
