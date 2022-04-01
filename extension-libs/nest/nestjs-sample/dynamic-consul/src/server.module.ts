import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'

import config from 'config'

import { ConsulModule } from './modules/consul/consul.module'

@Module({
  imports: [
    ConsulModule.register(config.get('consul.opts')),
  ],
  providers: [
  ],
  exports: [
  ]
})
export class ServerModule {
}
