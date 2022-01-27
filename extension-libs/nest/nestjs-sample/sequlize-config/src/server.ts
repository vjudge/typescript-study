import { Logger, HttpStatus, ClassSerializerInterceptor, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { join } from 'path';
import compression from 'compression';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { middleware as expressCtx } from 'express-ctx';

import { HttpExceptionFilter } from './filters/http-exception.filter';
// import { QueryExceptionFilter } from './filters/query-exception.filter';
import { LoggingInterceptor } from './Interceptors/logging.interceptor';

import { ServerModule } from './server.module';
import { ConfigService } from './config/config.service';

async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(ServerModule, new ExpressAdapter());
  const configService = app.get(ConfigService);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  // compress all responses
  app.use(compression());
  // secure by setting various HTTP headers
  app.use(helmet());
  // body parser
  app.use(bodyParser.json({ limit: '500mb' }));
  app.use(
    bodyParser.urlencoded({
      limit: '500mb',
      extended: true,
      parameterLimit: 50000
    })
  );
  // use api as global prefix
  app.setGlobalPrefix(configService.get('global_api_prefix'));

  const reflector = app.get(Reflector);
  // filters
  app.useGlobalFilters(
    new HttpExceptionFilter(reflector),
    // new QueryExceptionFilter(reflector)
  );
  // interceptors
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(reflector),
    new LoggingInterceptor()
  );
  // pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 白名单
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true, // 根据对象的 DTO 类自动将有效负载转换为对象类型
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
  );
  app.use(expressCtx);


  const HTTP_PORT = process.env.PORT || configService.get('port');
  await app.listen(HTTP_PORT, () => {
    Logger.log(`Server listening port on ${HTTP_PORT}. NODE_ENV: ${process.env.NODE_ENV}`);
  });
  // console.log(`Application is running on: ${await app.getUrl()}`);

  return app;
}

void bootstrap().catch(err => {
  Logger.error(`Error starting server, ${err}`, '', 'Bootstrap');
  process.exit(-1);
});
