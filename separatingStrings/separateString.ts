function sepStr(str) {
    const strSplit = str.split(" ");
    const result: string[][] = [];
    let longest = strSplit[0];
    for (let i = 1; i < strSplit.length; i++) {
        if (longest.length < strSplit[i].length) {
            longest = strSplit[i]
        }
    }
    let char = 0;
    while (result.length !== longest.length) {
        const sequence: string[] = [];
        for (let i = 0; i < strSplit.length; i++) {
            strSplit[i][char] !== undefined ? sequence.push(strSplit[i][char]) : sequence.push("");
        }
        result.push(sequence);
        char++;
    }
    return result;
}