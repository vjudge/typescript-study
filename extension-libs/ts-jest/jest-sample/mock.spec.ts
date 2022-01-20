function forEach(items, callback): void {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

// 定义 mock 函数
const mockCallback = jest.fn((x) => (x + 10000));
forEach([11, 22, 33], mockCallback);

test('mockCallback', () => {
    // mockCallback 被调用了 3 次
    expect(mockCallback.mock.calls.length).toBe(3);

// 第 1 次调用的返回值是 10011
    expect(mockCallback.mock.results[0].value).toBe(10011)

// 第 1 次调用的第 1 个参数是 11
    expect(mockCallback.mock.calls[0][0]).toBe(11);

// 第 2 次调用的第 1 个参数是 11
    expect(mockCallback.mock.calls[2][0]).toBe(22);

// 第 3 次调用的第 1 个参数是 33
    expect(mockCallback.mock.calls[0][0]).toBe(33);
})






