function sum(a: number, b: number): number {
    return a + b
}

function printMsg (msg, prefix = 'before') {
    console.log(`${prefix}${msg}`)
}

// beforeEach + afterEach
beforeEach(() => {
    printMsg('Each');
})

afterEach(() => {
    printMsg('Each', 'after');
})

test('each', () => {
    expect(sum(1, 2)).toBe(3);
})







