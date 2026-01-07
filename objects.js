// // // //objects in js
// // // const movieInfo = {
// // //   moviename: "akanda2",
// // //   heroname: "bhalayya",
// // //   directorname: "boyapati",
// // // };
// // // //how to get
// // // console.log(movieInfo.directorname);
// // // console.log(movieInfo["heroname"]);
// // // for (let info in movieInfo) {
// // //   console.log(movieInfo[info]);
// // // }
// // // //ES 6+ new features
// // // //object.keys
// // // Object.keys(movieInfo).forEach((key) => {
// // //   console.log(key);
// // // });
// // // //to get only values
// // // //object.values
// // // Object.values(movieInfo).forEach((val) => {
// // //   console.log(val);
// // // });
// // // //to get key and values
// // // //object.entries
// // // Object.entries(movieInfo).forEach((entry) => {
// // //   console.log(entry[0] + " " + entry[1]);
// // // });
// // // //for of
// // // for (let [info, infovalue] of Object.entries(movieInfo)) {
// // //   console.log(info + " " + infovalue);
// // // }
// // // //nested object
// // const myObj = {
// //   name: "John",
// //   age: 30,
// //   cars: [
// //     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
// //     { name: "BMW", models: ["320", "X3", "X5"] },
// //     { name: "Fiat", models: ["500", "Panda"] },
// //   ],
// // };
// // console.log(myObj.cars[0].models);
// // //cart object
// // const placeorder = {
// //   products: [
// //     { pid: 1234, pname: "drone", price: 10000 },
// //     { pid: 2345, pname: "ac", price: 30000 },
// //   ],
//   shippingaddress: {
//     area: "vadlamudi",
//     street: "vignan",
//     pincode: 522213,
//   },
//   userInfo: {
//     uid: 1001,
//     uname: "devi",
//   },
// };
// console.log(placeorder.userInfo.uname);
