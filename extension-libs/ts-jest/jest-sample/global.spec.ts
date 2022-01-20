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



