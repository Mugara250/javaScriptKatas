function countBits(n: number): number {
    return n.toString(2).split("").filter(num => num === '1').length;
}