let a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
  console.log(character);
});

console.log(" \nPRINT ORDERED NUMBERS");

let b = [99, 42, 17, 8];
b.sort(function(a, b) {return a - b;});
b.forEach((element) => {
  console.log(element);
});