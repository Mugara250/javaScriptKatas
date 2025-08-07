function playPass(s: string, n: number): string {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return s
    .split("")
    .map((char, index) => {
      if (alphabets.includes(char.toLowerCase())) {
        if (alphabets.length - 1 - alphabets.indexOf(char.toLowerCase()) < n) {
          return index % 2 === 0
            ? alphabets[
              n -
              (alphabets.length -
                1 -
                alphabets.indexOf(char.toLowerCase())) -
              1
            ].toUpperCase()
            : alphabets[
            n -
            (alphabets.length -
              1 -
              alphabets.indexOf(char.toLowerCase())) -
            1
            ];
        }
        return index % 2 === 0
          ? alphabets[alphabets.indexOf(char.toLowerCase()) + n].toUpperCase()
          : alphabets[alphabets.indexOf(char.toLowerCase()) + n];
      } else if (char.trim() !== "" && !isNaN(+char)) {
        return String(9 - +char);
      }
      return char;
    })
    .reverse()
    .join("");
}
