# GraphQL
GraphQL 是一种用于 API 的强大查询语言，是使用现有数据来完成这些查询的运行时。这是一种优雅的方法，可以解决我们在典型REST APIs 中遇到的许多问题 
* 代码优先: 将仅使用装饰器和 TypeScript 类来生成相应的 GraphQL schema
* 模式优先: 本质是 GraphQL SDL（模式定义语言）。它以一种与语言无关的方式，基本允许您在不同平台之间共享模式文件。此外，Nest 将根据GraphQL 模式（通过类或接口）自动生成 TypeScript 定义，以减少冗余


### 安装
```shell
$ npm i --save @nestjs/graphql graphql-tools graphql apollo-server-express@2.x.x
```















