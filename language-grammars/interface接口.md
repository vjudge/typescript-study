# interface (接口)
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法

接口不能转换为 JavaScript。 它只是 TypeScript 的一部分

### 定义
```typescript
interface interface_name { }
```


### 实例
```typescript
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: () => string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{ return "Hi there" } 
} 
```


### 可索引的类型
```typescript
interface arr1 {
    [index:number]:string
}

interface arr2 {
    [index:string]:number
}
```


### 接口继承
接口继承就是说接口可以通过其他接口来扩展自己。
Typescript 允许接口继承多个接口。
继承使用关键字 extends。
```typescript
Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
```


### 只读属性
一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性
```typescript
// 赋值后，x 和 y 再也不能被改变了
interface Point {
    readonly x: number;
    readonly y: number;
}
```
判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用 readonly


### 接口表示函数类型
```typescript
// 只有参数列表和返回值类型的函数定义, 参数列表里的每个参数都需要名字和类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// 函数的参数要求对应位置上的参数类型是兼容的
// 如果不想指定类型，TypeScript 的类型系统会推断出参数类型
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```


### 额外属性检查
TypeScript 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。
如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误

绕开额外检查
* 最简单: 使用类型断言
* 最佳: 添加字符串索引签名(前提是能够确定对象可能具有某些做为特殊用途使用的额外属性)
* 将这个对象赋值给一个另一个变量



