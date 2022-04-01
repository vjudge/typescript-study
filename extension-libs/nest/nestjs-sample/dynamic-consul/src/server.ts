import { Logger, ClassSerializerInterceptor } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { ExpressAdapter } from '@nestjs/platform-express'
import config from 'config'

import { ConsulService } from './modules/consul/consul.service'
import { ServerModule } from './server.module'

const options = {}

async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(ServerModule, new ExpressAdapter(), options)

  // Consul 注册服务
  const consulService = app.get(ConsulService)
  await consulService.registerService()

  await app.listen(config.get('port'), () => {
    Logger.log(`Server listening port on ${config.get('port')}`)
  })
  return app
}

void bootstrap().catch(err => {
  Logger.error('bootstrap Error: ', err)
  process.exit(-1)
})
