//without closer
let counter = 1;
const counterresult = () => {
  let counter = 0; //local variable
  counter += 1;
  return counter;
};
//global varaible
console.log(counterresult());
console.log(counterresult());
console.log(counterresult());
