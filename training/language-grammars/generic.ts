// 泛型
function identity<T>(arg: T): T {
    // 必须把参数当做是任意或所有类型
    // error TS2339: Property 'length' does not exist on type 'T'.
    // console.log(arg.length);
    return arg;
}
console.log(identity<string>('vjudge'));
// 利用类型推论: 编译器会根据传入的参数自动地确定T的类型
console.log(identity("vjudge"));


// 修复上边报错
function identity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
function identity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

// 泛型接口
interface identityFn<T> {
    (arg: T): T;
}
let num: identityFn<number> = identity
let str: identityFn<string> = identity


// 泛型类
class SumClass<T> {
    zval: T;
    add: (x: T, y: T) => T;
}
let sumClass1 = new SumClass<string>();
sumClass1.zval = 'vjudge';
sumClass1.add = function (x, y) { return x + ' ' + y };
console.log(sumClass1.add('Hi', 'test'));
let sumClass2 = new SumClass<number>();
sumClass2.add = function (x, y) { return x + y }
console.log(sumClass2.add(1, 2))


// 泛型约束
interface LengthParam {
    length: number;
}
function lengthFn<T extends LengthParam>(arg: T): T {
    console.log(arg.length);
    return arg;
}


// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(obj, 'a'));
console.log(getProperty(obj, 'd'));


// 在泛型里使用类类型
function create<T>(c: {new(): T;}): T {
    return new c();
}


class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!







