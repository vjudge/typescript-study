import { Inject, Injectable } from '@nestjs/common';
// import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
import DEBUG from 'debug';
const debug = DEBUG('app:config:service');

import { CONFIG_OPTION_PROVIDER, configOptions } from './CONST';
import { ConfigOptions } from './interfaces/config.interface';

@Injectable()
export class ConfigService {
  private readonly envConfig;

  // constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
  //     const filePath = `${process.env.NODE_ENV || 'development'}.env`;
  //     const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
  //     this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  // }

  constructor(@Inject(CONFIG_OPTION_PROVIDER) options: ConfigOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.json`;
    debug('filePath', filePath);
    if (!options.folder) {
      options = configOptions;
    }
    // debug('options', JSON.stringify(options), options.folder);
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    const fileConent = fs.readFileSync(envFile);
    this.envConfig = JSON.parse(fileConent.toString());
  }

  get(key: string): any {
    return _.get(this.envConfig, key);
    // return this.envConfig[key];
  }
}
