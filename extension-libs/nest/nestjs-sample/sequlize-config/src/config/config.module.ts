import { DynamicModule, Global, Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import { CONFIG_OPTION_PROVIDER } from '../common/constants/provider';

import { ConfigOptions } from './interfaces/config.interface';

// @Global()
@Module({
  providers: []
})
export class ConfigModule {
  static register(options: ConfigOptions): DynamicModule {
    return {
      global: true,
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTION_PROVIDER,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
