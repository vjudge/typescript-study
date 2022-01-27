import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { DbModule } from './sequelize/db.module';

@Module({
  imports: [
    ConfigModule.register({ folder: './config' }),
    DbModule
  ],
  providers: [
  ],
  exports: [
  ]
})
export class ServerModule {
}
