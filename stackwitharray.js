	
let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

let poppedElement = stack.pop();
console.log("removed element",poppedElement);

let topElement = stack[stack.length - 1];
console.log("topelement",topElement);

let isEmpty = stack.length === 0;
console.log(isEmpty);