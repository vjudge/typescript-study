# namespace (命名空间)
目的是解决重名问题

TypeScript 中命名空间使用 namespace 来定义


### 语法格式
```typescript
namespace NameSpaceName { 
   export interface InterfaceName {}  
   export class ClassName {}  
}
```


### 在另一个命名空间引用语法格式为
```typescript
/// <reference path = "NameSpaceName.ts" />
```


### 在另一个命名空间调用语法格式为
```typescript
NameSpaceName.ClassName
```


### 嵌套命名空间
```typescript
namespace namespace_name1 { 
    export namespace namespace_name2 {
        export class class_name {    } 
    } 
}
```




