# 测试异步代码


### 错误示例
```typescript
// testAsync 执行结束，此测试就在调用回调函数前结束了，异步代码不会被执行
test('async code', () => {
    function callback (data) {
        expect(data).toEqual('abc');
        console.log('success!')
    }
    function testAsync (callback) {
        callback('abc')
    }
    testAsync(callback);
})
```


### done()
```typescript
// Jest会等done回调函数执行结束后，结束测试
// 若 done() 函数从未被调用，测试用例会执行失败(显示超时错误)
test('async code', (done) => {
    function callback (data) {
        try {
            expect(data).toEqual('abc');
            console.log('success!')
            done();
        } catch (err) {
            done(err);
        }
    }
    function testAsync (callback) {
        callback('abc')
    }
    testAsync(callback);
})
```


### Promise
```typescript
test('testAsync', () => {
    function callback (data) {
        return data;
    }
    function testAsync (callback) {
        return new Promise((resolve, reject) => {
            return resolve(callback('abc'))
        })
    }
    // 验证一定数量的断言被调用
    expect.assertions(1);
    return testAsync().then((data) => {
        expect(data).toEqual('abc');
        console.log('success3!')
    })

    // return expect(testAsync()).resolves.toBe('abc');
    // return expect(testAsync()).rejects.toMatch('error');
})
```


### async / await
```typescript
test('async-await', async () => {
    function callback (data) {
        return data
    }
    async function testAsync(callback) {
        return callback('abc');
    }
    const data = await testAsync(callback);
    expect(data).toEqual('abc');
    console.log('success4!');
})
```











