const movieresult = () => {
  return new Promise((resolve, reject) => {
    let rating = 3;
    if (rating > 4) {
      resolve("Good movie");
    } else {
      reject("Waste of our time");
    }
  });
};
//calling promise with async await
const result = async () => {
  try {
    const res = await movieresult();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
result();
