# [class-validator](https://github.com/typestack/class-validator)

### 安装包
```shell
npm i --save class-validator class-transformer
```


### 可用的 class-validator 选项
* enableDebugMessages : boolean，如果设置为 true ，验证器会在出问题的时候打印额外的警告信息
* skipUndefinedProperties : boolean，如果设置为 true ，验证器将跳过对所有验证对象中值为 null 的属性的验证
* skipNullProperties : boolean，如果设置为 true ，验证器将跳过对所有验证对象中值为 null 或 undefined 的属性的验证
* skipMissingProperties : boolean，如果设置为 true ，验证器将跳过对所有验证对象中缺失的属性的验证
* whitelist : boolean，如果设置为 true ，验证器将去掉没有使用任何验证装饰器的属性的验证（返回的）对象
* forbidNonWhitelisted : boolean，如果设置为 true ，验证器不会去掉非白名单的属性，而是会抛出异常
* forbidUnknownValues: boolean，如果设置为 true ，尝试验证未知对象会立即失败
* disableErrorMessage : boolean，如果设置为 true ,验证错误不会返回给客户端
* errorHttpStatusCode : number，这个设置允许你确定在错误时使用哪个异常类型。默认抛出 BadRequestException
* exceptionFactory : Function，接受一个验证错误数组并返回一个要抛出的异常对象
* groups : string[]，验证对象时使用的分组
* always : boolean，设置装饰器选项 always 的默认值。默认值可以在装饰器的选项中被覆写
* strictGroups : boolean，忽略在任何分组内的装饰器，如果 groups 没有给出或者为空
* dismissDefaultMessages : boolean，如果设置为 true ，将不会使用默认消息验证，如果不设置，错误消息会始终是 undefined
* validationError.target : boolean，确定目标是否要在 ValidationError 中暴露出来
* validationError.value : boolean，确定验证值是否要在 ValidationError 中暴露出来
* stopAtFirstError : boolean，如果设置为 true ，对于给定的属性的验证会在触发第一个错误之后停止。默认为 false


### 参数范围
```typescript
@Post()
async create(@Body(new ValidationPipe()) createDto: CreateDto) {
}
```


### 方法范围
```typescript
@Post()
// @UsePipes(new ValidationPipe())
@UsePipes(ValidationPipe)
async create(@Body() createDto: CreateDto) {
}
```


### 全局范围
```typescript
// 全局管道用于整个应用程序、每个控制器和每个路由处理程序
// 对于标准(非混合) 微服务应用使用 useGlobalPipes() 全局设置管道
// 在 混合应用中 useGlobalPipes() 方法不会为网关和微服务设置管道
app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 白名单
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true, // 根据对象的 DTO 类自动将有效负载转换为对象类型
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors),
    }),
);

// 依赖注入方式
@Module({
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe
        }
    ]
})
export class AppModule {}
```















