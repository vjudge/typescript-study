// done
test('async code', (done) => {
    function callback (data) {
        try {
            expect(data).toEqual('abc');
            console.log('success2!')
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

// Promise
test('testAsync', () => {
    function callback (data) {
        return data;
    }
    function testAsync (callback) {
        return new Promise((resolve, reject) => {
            return resolve(callback('abc'))
        })
    }
    expect.assertions(1);
    return testAsync(callback).then((data) => {
        expect(data).toEqual('abc');
        console.log('success3!')
    })
})

// async / await
test('async-await', async () => {
    function callback (data) {
        return data
    }
    async function testAsync(callback) {
        return callback('abc');
    }
    const data = await testAsync(callback);
    expect.assertions(2);
    expect(data).toEqual('abc');
    expect(data).not.toEqual('123')
    console.log('success4!');
})

// 错误示例
test('async code', () => {
    function callback (data) {
        expect(data).toEqual('abc');
        console.log('success1!')
    }
    function testAsync (callback) {
        callback('abc')
    }
    testAsync(callback);
})

