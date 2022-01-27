import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ConfigModule } from './config/config.module';
import { DbModule } from './modules/sequelize/db.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.register({ folder: './config' }),
    HttpModule.register({
      timeout: 5000,
    }),
    DbModule,
    AuthModule,
    UserModule
  ],
  providers: [
  ],
  exports: [
  ]
})
export class ServerModule {
}
