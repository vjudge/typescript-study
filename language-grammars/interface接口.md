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


### 接口和数组
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


### 额外属性检查







