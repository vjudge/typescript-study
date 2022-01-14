// 函数
function add (x: number, y: number): number {
    return x + y;
};
console.log(add(1, 2));

// 可选参数
function fullName (firstName: string, lastName?: string): string {
    let result = firstName
    if (lastName) {
        result += ' ' + lastName;
    }
    return result
}

console.log(fullName('Tom'))
console.log(fullName('Tom', 'Sr.'))


// 默认参数
function fullName2 (firstName: string, lastName: string = 'Mr.'): string {
    let result = firstName
    if (lastName) {
        result += ' ' + lastName;
    }
    return result
}

console.log(fullName2('Tom'))
console.log(fullName2('Tom', 'Sr.'))


// 剩余参数
function add2 (x: number, ...other: number[]): number {
    let sum = x
    for (const item of other) {
       sum += item 
    }
    return sum
}

console.log(add2(1))
console.log(add2(2, 3, 4, 5))


// 重载
function sum (x: number, y: number): number;
function sum (x: string, y: string): string;
function sum (x, y): any {
    if (typeof x == 'number') {
        return x + y;
    }
    return x + ' ' + y;
}
console.log(sum(1, 2));
console.log(sum('Hello', 'World'));


// 比较两个函数
let a = (x: number) => 0;
let b = (x: number, y: number) => 0;
// a能否赋值给b: x的每个参数必须能在y里找到对应类型的参数
// x的每个参数在y中都能找到对应的参数，所以允许赋值
console.log(b = a); // [Function: a]
// Type '(x: number, y: number) => number' is not assignable to type '(x: number) => number'.
// console.log(a = b);


let c = () => ({ x: 1 })
let d = () => ({ x: 2, y: 3 })
console.log(c = d); // [Function: d]
//  Type '() => { x: number; }' is not assignable to type '() => { x: number; y: number; }'.
//  Property 'y' is missing in type '{ x: number; }' but required in type '{ x: number; y: number; }'.
// console.log(d = c)
