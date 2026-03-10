export const encodeTruncatedBinary: (x: number, upperBound: number) => (0 | 1)[];
export const decodeTruncatedBinary: (bitSequence: Iterable<number> | Iterator<number>, upperBound: number) => number;
