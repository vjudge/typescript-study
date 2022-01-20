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


### before* & after* 作用域问题
* 顶级的before* 会比 describe 中的before* 执行的更早
* 正常情况下，Jest 会按照 test 出现的顺序依次运行所有测试，等待每一个测试完成并整理好


### describe
* describe(name, fn)
* describe.each(table)(name, fn, timeout)
* describe.only(name, fn)
* describe.only.each(table)(name, fn)
* describe.skip(name, fn)
* describe.skip.each(table)(name, fn)


### test
* test(name, fn, timeout)
* test.concurrent(name, fn, timeout)
* test.concurrent.each(table)(name, fn, timeout)
* test.concurrent.only.each(table)(name, fn): 只运行这一个描述块中的test用例，其他的 describe 会被忽略
* test.concurrent.skip.each(table)(name, fn)
* test.each(table)(name, fn, timeout)
* test.only(name, fn, timeout)
* test.only.each(table)(name, fn)
* test.skip(name, fn) : 不想运行特定的描述块。常用于代替注释掉用例
* test.skip.each(table)(name, fn)
* test.todo(name)






