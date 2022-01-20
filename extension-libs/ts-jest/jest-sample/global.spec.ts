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
    console.log('[1] expect: beforeEach & afterEach');
})

test('each', () => {
    expect(sum(1, 2)).toBe(3);
    console.log('[2] expect: beforeEach & afterEach');
})


// beforeAll + afterAll
beforeAll(() => {
    printMsg('All');
})

afterAll(() => {
    printMsg('All', 'after');
})


describe('describe', () => {
    // beforeEach + afterEach
    beforeEach(() => {
        printMsg('Each', '[describe]: before');
    })

    afterEach(() => {
        printMsg('Each', '[describe]: after');
    })

    test('each', () => {
        expect(sum(1, 2)).toBe(3);
        console.log('[describe:1] expect: beforeEach & afterEach');
    })

    test('each', () => {
        expect(sum(1, 2)).toBe(3);
        console.log('[describe:2] expect: beforeEach & afterEach');
    })

// beforeAll + afterAll
    beforeAll(() => {
        printMsg('All', '[describe]: before');
    })

    afterAll(() => {
        printMsg('All', '[describe]: after');
    })
})

describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    test(`[1] returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });

    test(`[1] returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`[1] returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected);
    });
});


describe.skip.each([
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3},
])('.add($a, $b)', ({a, b, expected}) => {
    test(`[2] returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });

    test(`[2] returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`[2] returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected);
    });
});


describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({a, b, expected}) => {
    test(`[3] returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });

    test(`[3] returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`[3] returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected);
    });
});

// 只运行这一个描述块中的test用例，其他的 describe 会被忽略
describe.only('only-1', () => {
    test('is true', () => {
        expect(true).toBeTruthy();
        console.log('true')
    });

    test('is false', () => {
        expect(false).toBeFalsy();
        console.log('false')
    });
});


describe.only.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    test(`[only.each] returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });
});


test.concurrent.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', async (a, b, expected) => {
    expect(a + b).toBe(expected);
});


test.concurrent.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', async ({a, b, expected}) => {
    expect(a + b).toBe(expected);
});





