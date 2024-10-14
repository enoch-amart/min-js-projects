const input = document.getElementById("input");

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  value === reverse ? alert("It's a palidrome") : alert("It's not a palidrome");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
