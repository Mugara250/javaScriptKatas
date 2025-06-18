function countBits(n) {
    return n.toString(2).split("").filter(function (num) { return num === '1'; }).length;
}
console.log(countBits(1234));