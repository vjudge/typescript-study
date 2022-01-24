# Custom Provider (自定义提供者)


### 依赖注入
依赖注入是一种控制反转（IoC）技术，您可以将依赖的实例化委派给 IoC 容器


### 标准 Provider
```typescript
// 完整语法
// 简写表示法只是为了简化最常见的用例，其中令牌用于请求同名类的实例
providers: [
  {
    provide: UserService,
    useClass: UserService,
  },
];
```


### useValue (值 Provider)
useValue 语法可以注入常量值、将外部库放入 Nest 容器或使用模拟对象替换


### 非类提供者
```typescript
import { connection } from './connection';
// 字符串值令牌('CONNECTION')与从外部文件导入的已存在的连接对象相关联
@Module({
  providers: [
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class AppModule {}

// @Inject() 装饰器: 只接受一个参数令牌
@Injectable()
export class CatsRepository {
    constructor(@Inject('CONNECTION') connection: Connection) {}
}
```


### useClass (类提供者)
useClass 语法允许您动态确定令牌应解析为的类


### useFactory (工厂提供者)
useFactory 语法允许动态创建提供程序。实工厂函数的返回实际的 provider

一个简单的工厂可能不依赖于任何其他的提供者

更复杂的工厂可以自己注入它需要的其他提供者来计算结果
* 工厂函数可以接受(可选)参数
* inject 属性接受一个提供者数组，在实例化过程中，Nest 将解析该数组并将其作为参数传递给工厂函数
```typescript
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory],
})
export class AppModule {}
```


### useExisting (别名提供者)
useExisting 语法允许为现有的提供程序创建别名，将创建两种访问同一提供者的方法
```typescript
@Module({
  providers: [
      LoggerService,
      {
          provide: 'AliasedLoggerService',
          useExisting: LoggerService,
      }
  ],
})
```


### 非服务提供者
提供者可以提供任何值
```typescript
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

// 方法一: 使用令牌
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
// 方法二: 完整的提供程序对象
@Module({
    providers: [connectionFactory],
    exports: [connectionFactory],
})
```
















