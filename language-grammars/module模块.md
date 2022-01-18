# module (模块)
TypeScript 模块的设计理念是可以更换的组织代码

两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的

模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖


### export 模块导出
任何声明都能够通过添加export关键字来导出
```typescript
// 文件名 : SomeInterface.ts 
export interface SomeInterface { 
   ...
}
```


### import 模块导入
```typescript
import { someInterfaceRef } from "./SomeInterface";
import { someInterfaceRef as newRef } from "./SomeInterface";
import * as someRef from "./SomeInterface"
```


### 默认导出
每个模块都可以有一个default导出

一个模块只能够有一个default导出。 需要使用一种特殊的导入形式来导入default导出
```typescript
// 导出: JQuery.d.ts
declare let $: JQuery;
export default $;

// 导入
import $ from "JQuery";
```


### CommonJS和AMD
TypeScript模块支持export =语法以支持传统的CommonJS和AMD的工作流模型

export = 语法定义一个模块的导出对象
```typescript
// 导入一个使用了export = 的模块时
import module = require("module")
```



### 外部模块
要想描述非TypeScript编写的类库的类型，我们需要声明类库所暴露出的API。通常是在.d.ts文件里定义的

可以使用顶级的export声明来为每个模块都定义一个.d.ts文件，但最好还是写在一个大的.d.ts文件里

```typescript
// 声明
declare module "module";
declare module "*!text" { // 通配符，后缀 ("json!*" 前缀)
    export default content;
}
// 加载模块
/// <reference> node.d.ts
import module = require("module");
import * as module from "module"
```


### 模块导出
* 尽可能地在顶层导出
* 如果仅导出单个 class 或 function，使用 export default
* 如果要导出多个对象，把它们放在顶层里导出
* 明确地列出导入的名字
* 使用命名空间导入模式当你要导出大量内容的时候
* 使用重新导出进行扩展
* 模块里不要使用命名空间
  * 模块具有其自己的作用域，并且只有导出的声明才会在模块外部可见。命名空间在使用模块时几乎没什么价值
  * 使用命名空间是为了提供逻辑分组和避免命名冲突。 模块文件本身已经是一个逻辑分组，并且它的名字是由导入这个模块的代码指定，所以没有必要为导出的对象增加额外的模块层

