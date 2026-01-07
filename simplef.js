'''// Basic simple function
function App() {
  const name = "Dharani";
  const age = 26;
  console.log(`My name is ${name} and my age is ${age}`);
}
// arrow function
const Devi = () => {
  const name = "Gowtham";
  const age = 26;
  console.log(`My name is. ${name} and my age is ${age}`);
};

//
// Inline or Anonymous
() => {
  console.log("Hello");
};

const nums = [1, 2, 3, 4];

function double(n) {
  return n * 2;
}

const result = nums.map(double);

console.log(result);

// () => ({}); this is return objects
const result = nums.map((n) => ({
  val: n,
  sq: n * n,
}));

console.log(result);

// output
[
  { val: 1, sq: 1 },
  { val: 2, sq: 4 },
  { val: 3, sq: 9 },
];'''
