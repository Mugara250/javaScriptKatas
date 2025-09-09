function sepStr(str: string) {
    const strSplit = str.split(" ");
    const result: string[][] = [];
    let longest = Math.max(...strSplit.map(word => word.length));
    let char = 0;
    while (result.length !== longest) {
        const sequence: string[] = [];
        for (let i = 0; i < strSplit.length; i++) {
            strSplit[i][char] !== undefined ? sequence.push(strSplit[i][char]) : sequence.push("");
        }
        result.push(sequence);
        char++;
    }
    return result;
}