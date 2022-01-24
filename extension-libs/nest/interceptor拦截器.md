# Interceptor (拦截器)
拦截器是使用 @Injectable() 装饰器注解的类。拦截器应该实现 NestInterceptor 接口


### 拦截器功能
* 在函数执行之前/之后绑定额外的逻辑
* 转换从函数返回的结果
* 转换从函数抛出的异常
* 扩展基本函数行为
* 根据所选条件完全重写函数 (例如, 缓存目的)


### 拦截器
每个拦截器都有 intercept() 方法，它接收2个参数
* ExecutionContext: 继承自 ArgumentsHost
* CallHandler: 调用处理程序。CallHandler是一个包装执行流的对象，因此推迟了最终的处理程序执行
  * handle() 返回一个 Observable
  * 如果不手动调用 handle() 方法，则主处理程序根本不会进行求值
  * Nest订阅了返回的流，并使用此流生成的值来为最终用户创建单个响应或多个响应
```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(tap(() => (1)));
  }
}
```


### 绑定拦截器
拦截器可以通过构造函数注入依赖项
* 方法范围
* 控制器范围
```typescript
@UseInterceptors(LoggingInterceptor)
// @UseInterceptors(new LoggingInterceptor())
export class UserController {}
```
* 全局范围
```typescript
app.useGlobalInterceptors(new LoggingInterceptor());

// 依赖注入
@Module({
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
    ],
})
export class AppModule {}
```












