const students = [
  { name: "A", marks: 40, attendance: 20 },
  { name: "B", marks: 70, attendance: 30 },
  { name: "C", marks: 90, attendance: 40 },
];

const total = students
  .filter((s) => s.marks >= 50)
  .map((s) => s.marks)
  .reduce((sum, m) => sum + m, 0);

console.log(total);
