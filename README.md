# @luncheon/truncated-binary-code

A [truncated binary coding](https://en.wikipedia.org/wiki/Truncated_binary_encoding) implementation.

```ts
import assert from "node:assert/strict";
import { decodeTruncatedBinary, encodeTruncatedBinary } from "@luncheon/truncated-binary-code";

assert.deepEqual(encodeTruncatedBinary(0, 10), [0, 0, 0]);
assert.deepEqual(encodeTruncatedBinary(1, 10), [0, 0, 1]);
assert.deepEqual(encodeTruncatedBinary(2, 10), [0, 1, 0]);
assert.deepEqual(encodeTruncatedBinary(3, 10), [0, 1, 1]);
assert.deepEqual(encodeTruncatedBinary(4, 10), [1, 0, 0]);
assert.deepEqual(encodeTruncatedBinary(5, 10), [1, 0, 1]);
assert.deepEqual(encodeTruncatedBinary(6, 10), [1, 1, 0, 0]);
assert.deepEqual(encodeTruncatedBinary(7, 10), [1, 1, 0, 1]);
assert.deepEqual(encodeTruncatedBinary(8, 10), [1, 1, 1, 0]);
assert.deepEqual(encodeTruncatedBinary(9, 10), [1, 1, 1, 1]);

assert.equal(decodeTruncatedBinary([1, 0, 1], 10), 5);
```

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/**golomb-code**](https://www.npmjs.com/package/@luncheon/golomb-code): A [Golomb coding](https://en.wikipedia.org/wiki/Golomb_coding) implementation.
- [@luncheon/**exponential-golomb-code**](https://www.npmjs.com/package/@luncheon/exponential-golomb-code): An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.
- [@luncheon/**fibonacci-code**](https://www.npmjs.com/package/@luncheon/fibonacci-code): A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.
- [@luncheon/**parity-step-code**](https://www.npmjs.com/package/@luncheon/parity-step-code): A Universal Coding of Integers (UCI) inspired by [Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture).
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native [varint](https://en.wikipedia.org/wiki/Variable-length_quantity) codec supporting arbitrary chunk sizes and zigzag encoding.
