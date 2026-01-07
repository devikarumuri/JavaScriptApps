//bind method
const movieinfo = {
  heroname: "Akhil",
  villianname: "vecna",
  moviedetails: function () {
    return this.heroname + " " + this.villianname;
  },
};
const bahubali = {
  heroname: "Prabhas",
  villianname: "Rana",
};

const movieresult = movieinfo.moviedetails.bind(bahubali);
console.log(movieresult());
