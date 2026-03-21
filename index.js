const encodeBinary = (x, length) => {
  const a = [];
  while (length--) a.push(x & (1 << length) ? 1 : 0)
  return a
}
const encodeBigBinary = (x, length) => {
  const a = [];
  while (length--) a.push(x & (1n << length) ? 1 : 0)
  return a
}

export const encodeTruncatedBinary = (x, upperBound) => {
  if (x < 0 || x >= upperBound) throw RangeError("encodeTruncatedBinary: x must be in range [0, upperBound).");
  if (upperBound > 0x3fffffff) {
    x = BigInt(x);
    upperBound = BigInt(upperBound);
    const b = BigInt(upperBound.toString(2).length);
    const u = (1n << b) - upperBound;
    return x < u ? encodeBigBinary(x, b - 1n) : encodeBigBinary(x + u, b);
  } else {
    const b = 32 - Math.clz32(upperBound);
    const u = (1 << b) - upperBound;
    return x < u ? encodeBinary(x, b - 1) : encodeBinary(x + u, b);
  }
};

export const decodeTruncatedBinary = (bitSequence, upperBound) => {
  const bitIterator = Iterator.from(bitSequence);
  const next = () => {
    const it = bitIterator.next();
    if (it.done) throw RangeError("decodeTruncatedBinary: invalid code.");
    return it.value ? 1 : 0;
  };
  if (upperBound > 0x3fffffff) {
    upperBound = BigInt(upperBound);
    const b = BigInt(upperBound.toString(2).length);
    const u = (1n << b) - upperBound;
    let x = 0n;
    for (let i = 1; i < b; i++) x = (x << 1n) | BigInt(next());
    return Number(x < u ? x : ((x << 1n) | BigInt(next())) - u);
  } else {
    const b = 32 - Math.clz32(upperBound);
    const u = (1 << b) - upperBound;
    let x = 0;
    for (let i = 1; i < b; i++) x = (x << 1) | next();
    return x < u ? x : ((x << 1) | next()) - u;
  }
};
