function calc(expr: string): number {
  if (expr.trim() === "") {
    return 0
  }
  const expression = expr.split(" ");
  if (expression.length === 1) return +expression[0];
  switch (expression[expression.length - 1]) {
    case "+":
      return +expression[0] + +expression[1];
    case "-":
      return +expression[0] - +expression[1];
    case "/":
      return +expression[0] / +expression[1];
    case "*":
      return +expression[0] * +expression[1];
  }
  return 0;
}
