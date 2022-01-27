import { Sequelize } from 'sequelize-typescript';

import { ConfigService } from '../config/config.service';

import { User } from '../user/dto/user.model';

export const mysqlProvider = {
  provide: 'SEQUELIZE',
  useFactory: async (configService: ConfigService) => {
    const sequelize = new Sequelize(configService.get('mysqldb'));
    sequelize.addModels([
      User
    ]);
    await sequelize.sync();
    return sequelize;
  },
  inject: [ConfigService],
};
