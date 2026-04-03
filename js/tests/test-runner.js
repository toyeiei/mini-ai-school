// Minimal serial test runner with async support
const passed = { value: 0 };
const failed = { value: 0 };
const errors = { value: [] };
const testQueue = [];
let currentDescribeName = '';

const TestRunner = {
    describe(name, fn) {
        currentDescribeName = name;
        console.log(`\n${name}`);
        fn();
        currentDescribeName = '';
    },

    it(name, fn) {
        testQueue.push({ name, describe: currentDescribeName, fn });
    },

    async runAll() {
        for (const test of testQueue) {
            try {
                const result = test.fn();
                if (result && typeof result.then === 'function') {
                    await result;
                }
                passed.value++;
                console.log(`  [PASS] ${test.name}`);
            } catch (e) {
                failed.value++;
                errors.value.push({ name: test.name, error: e });
                console.log(`  [FAIL] ${test.name} — ${e.message}`);
            }
        }
        const total = passed.value + failed.value;
        const pct = total > 0 ? ((passed.value / total) * 100).toFixed(1) : 0;
        console.log(`\n${'='.repeat(50)}`);
        console.log(`Results: ${passed.value}/${total} passed (${pct}%)`);
        if (errors.value.length) {
            console.log('\nFailures:');
            errors.value.forEach(e => console.log(`  - ${e.name}: ${e.error.message}`));
        }
        console.log(`${'='.repeat(50)}`);
        return failed.value === 0;
    }
};

function assert(condition, message) {
    if (!condition) throw new Error(message || 'Assertion failed');
}

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Expected "${expected}" but got "${actual}"`);
    }
}

function assertIncludes(str, substring, message) {
    if (typeof str !== 'string') {
        throw new Error(message || `Expected a string but got ${typeof str}: ${str}`);
    }
    if (!str.includes(substring)) {
        throw new Error(message || `Expected string to include "${substring}"`);
    }
}

module.exports = { TestRunner, assert, assertEqual, assertIncludes };
