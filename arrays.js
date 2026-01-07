//arrays in js
const demoArray = [10, 20, "DEVI", "NAGI"];
console.log(demoArray);
//literal syntax
const p_names = ["redmi", "realme", "samsung", "apple"];
console.log(p_names);
//object syntax
let prices = new Array(20000, 40000, 50000, 30000);
//to get values
console.log(p_names[2]);
let products = p_names.forEach((value) => {
  console.log(value);
});
//to add =push,slice
p_names.push("1+");
console.log(p_names);
p_names.unshift("poko");
console.log(p_names);
p_names.splice(2, 0, "moto", "oppo");
console.log(p_names);
//to remove=pop,split,splice
p_names.splice(4, 1);
console.log(p_names);
//sort
console.log(p_names.sort());

console.log(prices.sort());
console.log(p_names.reverse());
//update
p_names[2] = "MOTO PRO";
console.log(p_names);
//concate
let p_names1 = ["Redmi", "Nokia"];
console.log(p_names.concat(p_names1));
//spread operator
let productNames = [...p_names, ...p_names1];
console.log(productNames);
//array advanced methods

let offerprice=prices.map((val)=>)
return val-2000;
console.log(offerPrice)