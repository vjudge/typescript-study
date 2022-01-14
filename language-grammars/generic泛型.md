# generic (泛型)
可以创建泛型接口和泛型类。
无法创建泛型枚举和泛型命名空间


### 泛型
```typescript
function identity<T>(arg: T): T {
    return arg;
}
identity<string>('vjudge')
// 利用类型推论: 编译器会根据传入的参数自动地确定T的类型
identity("vjudge")
```


### 泛型接口
```typescript
interface identityFn<T> {
    (arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let num: identityFn<number> = identity
```


### 泛型类
泛型类指的是实例部分的类型，类的静态属性不能使用泛型类型
```typescript
class SumClass<T> {
    zval: T;
    add: (x: T, y: T) => T;
}
let sumClass = new SumClass<number>();
sumClass.add = function (x, y) { return x + y };
sumClass.add(1, 2);
```


### 泛型约束
```typescript
interface LengthParam {
    length: number;
}
function lengthFn<T extends LengthParam>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```


### 在泛型约束中使用类型参数
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```


### 在泛型里使用类类型
在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
```typescript
function create<T>(c: {new(): T;}): T {
    return new c();
}
```






