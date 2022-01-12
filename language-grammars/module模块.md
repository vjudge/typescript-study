# module (模块)
TypeScript 模块的设计理念是可以更换的组织代码

两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的

模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖


### export 模块导出
```typescript
// 文件名 : SomeInterface.ts 
export interface SomeInterface { 
   ...
}
```


### import 模块导入
```typescript
import someInterfaceRef = require("./SomeInterface");
```













