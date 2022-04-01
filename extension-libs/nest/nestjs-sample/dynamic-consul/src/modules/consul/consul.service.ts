import {
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common'
import config from 'config'
import _ from 'lodash'
import Consul from 'consul'
import DEBUG from 'debug'
const debug = DEBUG('app:module:consul:service')

import { CONSUL_OPTION_PROVIDER } from './consul.provider'
import { ConsulOption } from './interfaces'

@Injectable()
export class ConsulService {
    private readonly logger = new Logger('ConsulService')
    private readonly consul: Consul.Consul


    constructor (@Inject(CONSUL_OPTION_PROVIDER) opts: ConsulOption) {
        const params = <ConsulOption>Object.assign({}, config.get('consul.opts'), opts)
        debug('ConsulOption.params: ', params)
        this.consul = new Consul(params)
    }

    async registerService () {
        try {
//             await this.consul.agent.service.register(config.get('consul.service'))
            this.logger.log(`Register service ${config.get('consul.service.name')} success!`)
        } catch (err) {
            this.logger.error(`Register service ${config.get('consul.service.name')} failed.`, err)
        }
    }
//
//     async deregisterService () {
//         try {
//             await this.consul.agent.service.deregister(config.get('consul.service'))
//             this.logger.log(`Deregister service ${config.get('consul.service.name')} success!`)
//         } catch (err) {
//             this.logger.error(`Deregister service ${config.get('consul.service.name')} failed.`, err)
//         }
//     }
}
