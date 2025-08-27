function matrixfy(str: string) {
    if (str.length === 0) return "name must be at least one letter";
    if (str.length === 1) return [[str[0]]];
    if (str.length === 2) return [[str[0], str[1]], [".", "."]];
    const strSplit = str.split("");
    const size = Math.ceil(Math.sqrt(str.length));
   const result: string[][] = [];
    for (let i = 0; i < size; i++) {
        const nested: string[] = [];
        for (let j = 0; j < size; j++) {
            let char: string = strSplit.shift() || ".";
            nested.push(char);
        }
        result.push(nested);
    }
    return result;
}