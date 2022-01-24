# Provider (提供者)
Providers 是 Nest 的一个基本概念。Provider 是一个用 @Injectable() 装饰器注释的类

可以通过 constructor 注入依赖关系

对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给 Nest运行时系统

控制器应处理 HTTP 请求并将更复杂的任务委托给 providers。Providers 是纯粹的 JavaScript 类，在其类声明之前带有 @Injectable()装饰器


### nest-cli
```shell
$ nest g service service_name
```


### 依赖注入
*Service 是通过 *Controller 类构造函数注入的


### 作用域
Provider 通常具有与应用程序生命周期同步的生命周期（“作用域”）。在启动应用程序时，必须解析每个依赖项，因此必须实例化每个提供程序。同样，当应用程序关闭时，每个 provider 都将被销毁


### 可选 Provider
有时，您可能需要解决一些依赖项

类可能依赖于一个配置对象，但如果没有传递，则应使用默认值。这时，关联变为可选的， provider 不会因为缺少配置导致错误

要指示 provider 是可选的请在 constructor 的参数中使用 @Optional() 装饰器
```typescript
import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  constructor(
    @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T
  ) {}
}
```


### 基于属性的注入
在某些非常特殊的情况下，可能会用到基于属性的注入

如果顶级类依赖于一个或多个 providers，那么通过从构造函数中调用子类中的 super() 来传递它们就会非常烦人了。因此，为了避免出现这种情况，可以在属性上使用 @Inject() 装饰器
```typescript
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
```
如果类没有扩展其他提供者，应该总是使用基于构造函数的注入


### 注册 Provider
在 Nest 中注册该服务，以便它可以执行注入。 为此，需要用到 *.module.ts，将服务添加到 @Module() 装饰器的 providers 数组中



