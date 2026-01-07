//call method
const productinfo = {
  pdetails: function (rating, price) {
    return this.pid + " " + this.pname + " " + rating + " " + price;
  },
};
const product = {
  pid: 1001,
  pname: "Redmi",
};
console.log(productinfo.pdetails.call(product, 4, 30000));
