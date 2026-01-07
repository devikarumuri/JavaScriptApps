//apply method
const studentinfo = {
  studentdetails: function (qualification, branch) {
    return this.rollno + " " + this.sname + " " + qualification + " " + branch;
  },
};
const student = {
  rollno: 1234,
  sname: "Devi",
};
console.log(studentinfo.studentdetails.apply(student, ["B.Tech", "CSE"]));
