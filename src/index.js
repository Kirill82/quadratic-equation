module.exports = function solveEquation(equation) {
  // your implementation
  var a = +equation.split(' * x^2')[0];
  var b = equation.split(' * x^2 ')[1].split(' * x ')[0];
  if (b.indexOf('-') != -1) {
      b = -b.split(' ')[1];
  } else {
      b = +b.split(' ')[1];
  }
  var c = equation.split(' * x^2 ')[1].split(' * x ')[1];
  if (c.indexOf('-') != -1) {
      c = -c.split(' ')[1];
  } else {
      c = +c.split(' ')[1];
  }

  var x = [];
  x[0] = Math.round((-1 * b - Math.sqrt(b * b - 4 * a * c))/ (2 * a));
  x[1] = Math.round((-1 * b + Math.sqrt(b * b - 4 * a * c))/ (2 * a));
  x.sort((a, b) => a - b);

  return x;

}
