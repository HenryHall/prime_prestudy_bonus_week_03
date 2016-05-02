function clicked() {
  var alpha = Number(prompt("Enter a number that you would like to evaluate!"));
  document.getElementById('enteredNumber').innerHTML = alpha;
  document.getElementById('firstFunction').innerHTML = first(alpha);
  document.getElementById('secondFunction').innerHTML = second(alpha);
  document.getElementById('thirdFunction').innerHTML = third(alpha);
  document.getElementById('allFunction').innerHTML = first(second(third(alpha)));
  return;
}

function first(a) {
  a = a * a;
  return a;
}

function second(b) {
  b = (b + 10) / 4;
  return b;
}

function third(c) {
  for (i = c; i != 1; i--) {
    c = c * (i-1);
  }
  return c;
}