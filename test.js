import assert from "node:assert/strict";
import { it } from "node:test";
import { decodeTruncatedBinary, encodeTruncatedBinary } from "./index.js";

// https://en.wikipedia.org/wiki/Truncated_binary_encoding
it("encode", () => {
  assert.deepEqual(encodeTruncatedBinary(0, 5), [0, 0]);
  assert.deepEqual(encodeTruncatedBinary(1, 5), [0, 1]);
  assert.deepEqual(encodeTruncatedBinary(2, 5), [1, 0]);
  assert.deepEqual(encodeTruncatedBinary(3, 5), [1, 1, 0]);
  assert.deepEqual(encodeTruncatedBinary(4, 5), [1, 1, 1]);

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

  assert.deepEqual(encodeTruncatedBinary(0, 7), [0, 0]);
  assert.deepEqual(encodeTruncatedBinary(1, 7), [0, 1, 0]);
  assert.deepEqual(encodeTruncatedBinary(2, 7), [0, 1, 1]);
  assert.deepEqual(encodeTruncatedBinary(3, 7), [1, 0, 0]);
  assert.deepEqual(encodeTruncatedBinary(4, 7), [1, 0, 1]);
  assert.deepEqual(encodeTruncatedBinary(5, 7), [1, 1, 0]);
  assert.deepEqual(encodeTruncatedBinary(6, 7), [1, 1, 1]);
});

it("decode", () => {
  assert.equal(decodeTruncatedBinary(encodeTruncatedBinary(0x3ffffffe, 0x3fffffff), 0x3fffffff), 0x3ffffffe);
  assert.equal(decodeTruncatedBinary(encodeTruncatedBinary(0x3fffffff, 0x40000000), 0x40000000), 0x3fffffff);
  for (let i = 0; i < 10000; i++) {
    const upperBound = Math.round(Math.random() ** 8 * (Number.MAX_SAFE_INTEGER - 2)) + 2;
    for (let j = 0; j < 100; j++) {
      const x = Math.floor(Math.random() * upperBound);
      assert.equal(decodeTruncatedBinary(encodeTruncatedBinary(x, upperBound), upperBound), x);
    }
  }
});
