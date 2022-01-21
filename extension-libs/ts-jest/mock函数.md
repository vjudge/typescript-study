# mock


### mock 函数
```typescript
const mockCallback = jest.fn((x) => (x + 10000));
forEach([11, 22, 33], mockCallback);
test('mock', () => {
    // mockCallback 被调用了 3 次
    expect(mockCallback.mock.calls.length).toBe(3);

    // 第 1 次调用的返回值是 10011
    expect(mockCallback.mock.results[0].value).toBe(10011)

    // 第 1 次调用的第 1 个参数是 11
    expect(mockCallback.mock.calls[0][0]).toBe(11);

    // 第 2 次调用的第 1 个参数是 11
    expect(mockCallback.mock.calls[1][0]).toBe(22);
})
```


### .mock 属性
.mock属性，它保存了关于此函数如何被调用、调用时的返回值的信息

.mock 属性还追踪每次调用时 this的值



### mock 函数方法
* mockFn.getMockName()
* mockFn.mock.calls
* mockFn.mock.results
* mockFn.mock.instances
* mockFn.mockClear()
* mockFn.mockReset()
* mockFn.mockRestore()
* mockFn.mockImplementation(fn)
* mockFn.mockImplementationOnce(fn)
* mockFn.mockName(value)
* mockFn.mockReturnThis()
* mockFn.mockReturnValue(value)
* mockFn.mockReturnValueOnce(value)
* mockFn.mockResolvedValue(value)
* mockFn.mockResolvedValueOnce(value)
* mockFn.mockRejectedValue(value)
* mockFn.mockRejectedValueOnce(value)







