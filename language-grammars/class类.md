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


### static
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用


### 访问控制修饰符
TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限:
* public(默认) : 公有，可以在任何地方被访问
* protected : 受保护，可以被其自身以及其子类访问
* private : 私有，只能被其定义所在的类访问


### 类和接口
类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用


