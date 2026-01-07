//this keyword=used to represent current object
const employInfo = {
  firstname: "Devi",
  lastname: "Karumuri",
  empdetails: function () {
    return this.firstname + " " + this.lastname;
  },
};
console.log(employInfo.empdetails());
