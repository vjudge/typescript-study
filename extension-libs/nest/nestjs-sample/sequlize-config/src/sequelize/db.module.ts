import { Module } from '@nestjs/common';
import { mysqlProvider } from './mysql.provider';

@Module({
  imports: [],
  providers: [ mysqlProvider ],
  exports: [ mysqlProvider ],
})
export class DbModule {}
