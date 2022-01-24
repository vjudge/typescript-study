# controller (控制器)
控制器负责处理传入的请求和向客户端返回响应

控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求


### @Controller()
该装饰器定义一个基本的控制器

在 @Controller() 装饰器中使用路径前缀可以使我们轻松地对一组相关的路由进行分组，并最大程度地减少重复代码
```typescript
// api 路由路径前缀
@Controller('api')
export class SomeController {
  @Get()
  find(): string {
    return '';
  }
}
```


### nest-cli
```shell
$ nest g controller controller_name
```


### HTTP Params
Nest 提供了对底层平台（默认为 Express）的访问方式
* @Request(): 别名 @Req(), req
* @Response(): 别名 @Res()*, res
  * 在请求处理函数中注入 @Res()或 @Response() 时，会将 Nest 置于该处理函数的特定于库（Library-specific mode）的模式下，并负责管理响应
  * 必须通过调用 response 对象（例如，res.json(…) 或 res.send(…)）发出某种响应，否则 HTTP 服务器将挂起
  * 失去与依赖于 Nest 标准响应处理的 Nest 功能。要解决此问题，可以将 passthrough 选项设置为 true
* @Next(): next
* @Session(): req.session
* @Param(key?: string): req.params/req.params[key]
* @Body(key?: string): req.body/req.body[key]
* @Query(key?: string): req.query/req.query[key]
* @Headers(name?: string): req.headers/req.headers[name]
* @Ip(): req.ip
* @HostParam(): req.hosts


### HTTP 方法
* @Get()
* @Post()
* @Put()
* @Delete()
* @Patch()
* @Options()
* @Head()
* @All(): 用于处理所有 HTTP 请求方法


### 路由通配符
路由支持模式匹配
```typescript
// 星号通配符，将匹配任何字符组合
@Get('a*d')
find () {}
```


### 状态码
响应的状态码总是默认为 200，除了 POST 请求(默认响应状态码为 201)

可以通过在处理函数外添加 @HttpCode（...） 装饰器来轻松更改此行为
```typescript
@Post()
@HttpCode(204)
create() { }
```


### Headers
要指定自定义响应头，可以使用 @Header() 装饰器或类库特有的响应对象，并直接调用 res.header() 


### 重定向
将响应重定向到特定的 URL，可以使用 @Redirect() 装饰器或特定于库的响应对象，并直接调用 res.redirect()

@Redirect() 装饰器有两个可选参数，url 和 statusCode。 如果省略，则 statusCode 默认为 302
```typescript
@Get()
@Redirect('https://nestjs.com', 301)
```

想动态地决定 HTTP 状态代码或重定向 URL。通过从路由处理方法返回一个如下格式的对象
```typescript
{
  "url": string,
  "statusCode": number
}
```


### 路由参数
```typescript
@Get('info/:userid')
async getUser (@Param() params) {
    return { userid: params.userid }
}

@Post('info')
async createUser (@Query() query) {}

@Post('info')
async createUser (@Body() body) {}
```


### 子域路由
@Controller 装饰器可以接受一个 host 选项，以要求传入请求的 HTTP 主机匹配某个特定值
```typescript
@Controller({ host: 'admin.example.com' })

// 使用参数标识（token）来捕获主机名中该位置的动态值
@Controller({ host: ':account.example.com' })
export class AccountController {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account;
    }
```


### 异步支持
```typescript
@Get()
async findAll(): Promise<any[]> {
  return [];
}

// 或者: 通过返回 RxJS observable 流，Nest 将自动订阅该源并获取最后发出的值(在流完成后)
@Get()
findAll(): Observable<any[]> {
    return of([]);
}
```











