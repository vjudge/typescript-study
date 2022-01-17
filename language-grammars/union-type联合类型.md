# Union Types (联合类型)
联合类型表示一个值可以是几种类型之一

联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值

注: 只能赋值指定的类型，如果赋值其它类型就会报错


### 语法格式
```typescript
var param:type1|type2|type3

var val:string|number;
var arr:number[]|string[]; 
```


### 共有成员
如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
```typescript

```


