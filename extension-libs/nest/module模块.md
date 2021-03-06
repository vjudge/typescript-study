# Module (模块)
模块是具有 @Module() 装饰器的类。

@Module() 装饰器提供了元数据，Nest 用它来组织应用程序结构


### 根模块
根模块是 Nest 开始安排应用程序树的地方

每个 Nest 应用程序至少有一个模块，即根模块 。在大多数情况下，您将拥有多个模块，每个模块都有一组紧密相关的功能


### @Module()
* providers : 由 Nest 注入器实例化的提供者，并且可以至少在整个模块中共享
* controllers : 必须创建的一组控制器
* imports : 导入模块的列表，这些模块导出了此模块中所需提供者
* exports : 由本模块提供并应在其他模块中可用的提供者的子集

默认情况下，该模块封装提供程序。这意味着无法注入既不是当前模块的直接组成部分，也不是从导入的模块导出的提供程序。因此，您可以将从模块导出的提供程序视为模块的公共接口或API


### nest-cli
```shell
$ nest g module module_name
```


### 共享模块
在 Nest 中，默认情况下，模块是单例，可以轻松地在多个模块之间共享同一个提供者实例

每个模块都是一个共享模块，一旦创建就能被任意模块重复使用

假设我们将在几个模块之间共享 *Service 实例，需要把 *Service 放到模块 exports 数组中。
这样每个导入 *Module 的模块都可以访问 *Service ，并且将共享相同的 *Service 实例


### 模块导出
* 模块可以导出他们的内部提供者
* 可以再导出自己导入的模块


### 依赖注入
提供者可以注入到模块(类)中

但是，模块类不能注入到提供者中


### 全局模块
Nest 将提供者封装在模块范围内。无法在其他地方使用模块的提供者而不导入他们

@Global 装饰器使模块成为全局作用域。 全局模块应该只注册一次，最好由根或核心模块注册

使一切全局化并不是一个好的解决方案。 全局模块可用于减少必要模板文件的数量。 imports 数组仍然是使模块 API 透明的最佳方式


### 动态模块
动态模块可以轻松创建可自定义的模块，这些模块可以动态注册和配置提供程序

动态模块返回的属性扩展（而不是覆盖）@Module() 装饰器中定义的基本模块元数据

如果要在全局范围内注册动态模块，请将 global 属性设置为 true



















