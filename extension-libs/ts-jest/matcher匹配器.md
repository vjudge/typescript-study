# 匹配器


### 精确匹配
* toBe
* toEqual
```typescript
// toBe使用 Object.is来进行精准匹配的测试
test('2 加 2 等于 4', () => {
  expect(2 + 2).toBe(4);
});

// toEqual 递归检查对象或数组的每个字段
test('对象赋值', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});
```


### 真值
代码中的undefined, null, and false有不同含义，若你在测试时不想区分他们，可以用真值判断
* toBeNull
* toBeUndefined
* toBeDefined
* toBeTruthy
* toBeFalsy
```typescript
test('null', () => {
  const n = null;
  // toBeNull 只匹配 null
  expect(n).toBeNull();
  // toBeDefined 与 toBeUndefined 相反
  expect(n).toBeDefined();
  // toBeUndefined 只匹配 undefined
  expect(n).not.toBeUndefined();
  // toBeTruthy 匹配任何 if 语句为真
  expect(n).not.toBeTruthy();
  // toBeFalsy 匹配任何 if 语句为假
  expect(n).toBeFalsy();
});
```


### 数字
* toBeGreaterThan
* toBeGreaterThanOrEqual
* toBeLessThan
* toBeLessThanOrEqual
* toBeCloseTo
```typescript
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('两个浮点数字相加', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
});
```


### 字符串
* toMatch
```typescript
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```


### 数组
* toContain: 检查一个数组或可迭代对象是否包含某个特定项
```typescript
const shoppingList = [ 'diapers', 'kleenex', 'milk' ];
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```


### 例外
* toThrow: 测试某函数在调用时是否抛出了错误。函数需要在expect的包装函数中调用
```typescript
test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
```














