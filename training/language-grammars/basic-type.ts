// Any 类型
// 任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况:
// 1. 变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查
let x: any = 5;
x = 'Hi';
x = false;
// 2. 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
let y: any = 1;
x.ifItExists();
x.toFixed();
// 3. 定义存储各种类型数据的数组时
let arr: any[] = [1, '2', true];
arr[1] = 100;


### Number
console.log("====== Number ======");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);


// | 多种类型
let z: number | null | undefined;
z = 2;
z = null;


// never 类型
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// 意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）


// 变量声明
var score: number = 2;
var score2: string;
var score3 = 4;
var score4;





