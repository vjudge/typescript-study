test('expect', () => {
    expect(1 + 2).toBe(3);
})

// declare global {
//     namespace jest {
//         interface Matchers<R> {
//             toBeWithinRange(a: number, b: number): R;
//         }
//     }
// }

test('expect', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
})

test('expect', () => {
    const mock = jest.fn((x) => (x + 10000));
    [1, 2, 3].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.any(Number));
})

describe('arrayContaining', () => {
    const expected = ['Alice', 'Bob'];
    it('matches even if received contains additional elements', () => {
        expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
});

test('expect', () => {
    expect.assertions(3);
    expect.hasAssertions();
    expect(1 + 2).toBe(3);
    expect(2 + 3).toBe(5);
    expect(3 + 4).toBe(7);
})






