# class (类)


### 定义
```typescript
class class_name {
    ...
}
```


### 类的继承
TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）
```typescript
class child_class_name extends parent_class_name
```


### 存取器
TypeScript支持通过getters/setters来截取对对象成员的访问。它能帮助你有效的控制对对象成员的访问

只带有get不带有set的存取器自动被推断为readonly
```typescript
class Employee {
    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}
// 存取器要求编译器设置为输出ECMAScript 5或更高
// tsc -t es5 class.ts
```


### static
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用


### 抽象类
抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
```typescript
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```


### 访问控制修饰符
TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限:
* public(默认) : 公有，可以在任何地方被访问
* protected : 受保护，可以被其自身以及其子类访问
* private : 私有，只能被其定义所在的类访问
* readonly: 只读属性必须在声明时或构造函数里被初始化


### 类和接口
类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用



### 类比较
比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内

私有成员会影响兼容性判断。 当类的实例用来检查兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类

