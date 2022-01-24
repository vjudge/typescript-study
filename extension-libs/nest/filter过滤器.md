# Exception Filter (异常过滤器)
内置的异常层负责处理整个应用程序中的所有抛出的异常


### 基础异常类
Nest提供了一个内置的 HttpException 类，它从 @nestjs/common 包中导入

对于典型的基于HTTP REST/GraphQL API的应用程序，最佳实践是在发生某些错误情况时发送标准HTTP响应对象

HttpException 构造函数有两个必要的参数来决定响应:
* response : 参数定义 JSON 响应体。它可以是 string 或 object
  * statusCode: 默认为 status 参数中提供的 HTTP 状态代码 
  * message: 基于状态的 HTTP 错误的简短描述
* status : 有效的 HTTP 状态码

```typescript
async fn () {
  // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  throw new HttpException({
    status: HttpStatus.FORBIDDEN, 
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);
}
```


### 内置 HTTP 异常
* BadRequestException
* UnauthorizedException
* NotFoundException
* ForbiddenException
* NotAcceptableException
* RequestTimeoutException
* ConflictException
* GoneException
* PayloadTooLargeException
* UnsupportedMediaTypeException
* UnprocessableException
* InternalServerErrorException
* NotImplementedException
* BadGatewayException
* ServiceUnavailableException
* GatewayTimeoutException


### 异常过滤器
异常过滤器可以对异常层拥有完全控制权，可以控制精确的控制流以及将响应的内容发送回客户端

所有异常过滤器都应该实现通用的 ExceptionFilter<T> 接口。它需要你使用有效签名提供 catch(exception: T, host: ArgumentsHost)方法。T 表示异常的类型

@Catch() 装饰器绑定所需的元数据到异常过滤器上，可以传递多个参数，通过逗号分隔来为多个类型的异常设置过滤器
```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

// @Catch() // 不带参数，可以捕获每一个未处理的异常(不管异常类型如何)
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // exception 参数是当前正在处理的异常对象
  // ArgumentsHost 是一个功能强大的实用程序对象
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
```


### 绑定过滤器
@UseFilters() 装饰器用来绑定过滤器

异常过滤器的作用域可以划分为不同的级别
* 方法范围
```typescript
@Post()
// @UseFilters(new HttpExceptionFilter())
@UseFilters(HttpExceptionFilter) // 推荐使用方式
async create(@Body() body) {
  throw new ForbiddenException();
}
```
* 控制器范围
```typescript
@UseFilters(new HttpExceptionFilter())
export class UserController {}
```
* 全局范围: 用于整个应用程序、每个控制器和每个路由处理程序
```typescript
// 从任何模块外部注册的全局过滤器不能注入依赖，因为它们不属于任何模块
app.useGlobalFilters(new HttpExceptionFilter());

// app.module.ts
// 注册一个全局范围的过滤器直接为任何模块设置过滤器
// 无论采用哪种结构的模块，过滤器实际上都是全局的
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
```












