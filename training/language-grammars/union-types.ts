// | 联合类型
let z: number | null | undefined;
z = 2;
z = null;


// 共有成员
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
interface Bird {
    flay();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}
function getParam(): Bird | Fish {
}
let intence = getParam();
intence.layEggs(); // ok
// error TS2339: Property 'flay' does not exist on type 'Bird | Fish'.
//  Property 'flay' does not exist on type 'Fish'.
// intence.flay(); // Errors




