# Middleware (中间件)
中间件是在路由处理程序之前调用的函数

中间件函数可以访问请求和响应对象，以及应用程序请求响应周期中的 next() 中间件函数

可以在函数中或在具有 @Injectable() 装饰器的类中实现自定义 Nest中间件。 这个类应该实现 NestMiddleware 接口, 而函数没有任何特殊的要求


### 中间件可以执行的任务
* 执行任何代码
* 对请求和响应对象进行更改
* 结束请求-响应周期
* 调用堆栈中的下一个中间件函数
* 如果当前的中间件函数没有结束请求-响应周期, 它必须调用 next() 将控制传递给下一个中间件函数。否则, 请求将被挂起
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
```


### 依赖注入
Nest中间件完全支持依赖注入

中间件能够注入属于同一模块的依赖项(通过 constructor)


### 应用中间件
中间件不能在 @Module() 装饰器中列出

必须使用模块类的 configure() 方法来设置它们。包含中间件的模块必须实现 NestModule 接口
```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('api');
      // .forRoutes({ path: 'api', method: RequestMethod.GET })
      // .forRoutes(*Controller)
  }
}
```


### MiddlewareConsumer (中间件消费者)
MiddlewareConsumer 是一个帮助类

MiddlewareConsumer 提供了几种内置方法来管理中间件，可以被链接起来使用
* forRoutes(): 可接受一个字符串、多个字符串、对象、一个控制器类甚至多个控制器类
* apply(): 可以使用单个中间件，也可以使用多个参数来指定多个多个中间件
* exclude(): 排除某些路由。可以采用一个字符串，多个字符串或一个 RouteInfo 对象来标识要排除的路由
```typescript
consumer
  .apply(LoggerMiddleware, cors(), helmet())
  .exclude(
    { path: 'info', method: RequestMethod.GET },
    'auth/(.*)',
  )
```


### 函数式中间件
中间件没有任何依赖关系时，可以考虑使用函数式中间件
```typescript
export function logger(req, res, next) {
  next();
};
```


### 全局中间件
一次性将中间件绑定到每个注册路由，可以使用由 INestApplication 实例提供的 use() 方法
```typescript
app.use(logger);
```












