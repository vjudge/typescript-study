import { DynamicModule, Module } from '@nestjs/common'

import { CONSUL_OPTION_PROVIDER } from './consul.provider'
import { ConsulOption } from './interfaces'
import { ConsulService } from './consul.service'

@Module({})
export class ConsulModule {
  static register (options: ConsulOption): DynamicModule {
    return {
      global: true,
      module: ConsulModule,
      providers: [
        {
          provide: CONSUL_OPTION_PROVIDER,
          useValue: options,
        },
        ConsulService,
      ],
      exports: [
        {
          provide: CONSUL_OPTION_PROVIDER,
          useValue: options,
        },
        ConsulService,
      ],
    }
  }
}
