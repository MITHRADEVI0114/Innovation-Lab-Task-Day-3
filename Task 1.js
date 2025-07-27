function greet(name) {
 console.log("Hi " + name);
}
greet("Mithra");

function add(a, b) {
 console.log("Total = " + (a + b));
}
add(5, 3);

function addition(...args) {
 let sum = 0;
 for(const num of args) {
  sum += num;
 }
 console.log("Sum = " + sum);
}
addition(1, 2, 3); 
addition(4, 5);   
