# Guard (守卫)
守卫是一个使用 @Injectable() 装饰器的类。 守卫应该实现 CanActivate 接口

守卫有一个单独的责任，守卫根据运行时出现的某些条件 (例如权限，角色，访问控制列表等) 来确定给定的请求是否由路由处理程序处理

守卫在每个中间件之后执行，但在任何拦截器或管道之前执行


### 授权守卫
每个守卫必须实现一个canActivate()函数。此函数应该返回一个布尔值，指示是否允许当前请求。它可以同步或异步地返回响应(通过 Promise 或 Observable)

Nest使用返回值来控制下一个行为:
* 如果返回 true, 将处理用户调用
* 如果返回 false, 则 Nest 将忽略当前处理的请求

由守卫引发的任何异常都将由异常层(全局异常过滤器和应用于当前上下文的任何异常过滤器)处理


### ExecutionContext (执行上下文)
ExecutionContext 继承自 ArgumentsHost 。ArgumentsHost 是传递给原始处理程序的参数的包装器
```typescript
export interface ExecutionContext extends ArgumentsHost {
  // 返回这个特定处理程序所属的 Controller 类的类型
  getClass<T = any>(): Type<T>;
  // 返回对将要调用的处理程序的引用
  getHandler(): Function;
}
```


### 绑定守卫
* 控制器范围
```typescript
@Controller('user')
@UseGuards(AuthGuard)
// @UseGuards(new AuthGuard())
export class UserController {}
```
* 方法范围
* 全局范围
```typescript
app.useGlobalGuards(new AuthGuard());

// 依赖注入
@Module({
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {}
```


### 反射器
Nest提供了通过 @SetMetadata() 装饰器将定制元数据附加到路由处理程序的能力
```typescript
@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createDto: CreateDto) {
}
```









