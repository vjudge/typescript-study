# Union Types (联合类型)
联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值

注: 只能赋值指定的类型，如果赋值其它类型就会报错


### 语法格式
```typescript
var param:type1|type2|type3

var val:string|number;
var arr:number[]|string[]; 
```
