// Callback hell - Flying V

// setTimeout(() => {
//   console.log("world");
//   setTimeout(() => {
//     console.log("mindX");
//     setTimeout(() => {
//       console.log("this");
//       setTimeout(() => {
//         console.log("is");
//         setTimeout(() => {
//           console.log("Web d05");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

delay(1000)
  .then(() => {
    console.log("hello");
    return delay(1000);
  })
  .then(() => {
    console.log("world");
    return delay(1000);
  })
  .then(() => {
    console.log("this");
    return delay(1000);
  });

// delay(1000)
//   .then(() => delay(1000))
//   .then(() => delay(1000));

const sayHello = async () => {
  await delay(4000);
  console.log("hello");
  await delay(1000);
  console.log("world");
  await delay(1000);
};

sayHello();
