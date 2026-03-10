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

for (let i = 0; i < 100; i++) {
  const upperBound = Math.round(Math.random() * (Number.MAX_SAFE_INTEGER - 2)) + 2;
  for (let j = 0; j < 100; j++) {
    const x = Math.floor(Math.random() * upperBound);
    assert.equal(decodeTruncatedBinary(encodeTruncatedBinary(x, upperBound), upperBound), x);
  }
}
```

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/exponential-golomb-code](https://www.npmjs.com/package/@luncheon/exponential-golomb-code): An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.
- [@luncheon/fibonacci-code](https://www.npmjs.com/package/@luncheon/fibonacci-code): A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.
- [@luncheon/varint](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native varint codec supporting arbitrary chunk sizes and zigzag encoding.
