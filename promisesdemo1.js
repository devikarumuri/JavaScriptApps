//bubble game
const bubbleScore = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  if (num >= 5) {
    resolve("High score");
  } else {
    reject("low score");
  }
});
//to call promise
bubbleScore
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
