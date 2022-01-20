# 全局设定


### beforeEach && afterEach
为多次测试重复设置的工作
```typescript
// 每个测试之前调用方法
beforeEach(() => {
    printMsg('Each');
})

// 每个测试之后调用
afterEach(() => {
    printMsg('Each', 'after');
})

test('each', () => {
    expect(sum(1, 2)).toBe(3);
    console.log('expect: beforeEach & afterEach');
})
```


### beforeAll & afterAll
在文件的开头做一次设置


### 作用域问题
* 顶级的before* 会比 describe 中的before* 执行的更早
* 正常情况下，Jest 会按照 test 出现的顺序依次运行所有测试，等待每一个测试完成并整理好






