// foreach - simple loop
const arr = [1, 2, 3, 4, 5];
const foreach = arr.forEach((item) => {
  console.log(item);
});
// item == arr[i]

// map - transformation
const map = arr.map((item) => {
  if (item % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
});
console.log(map);
console.log(arr);

// filter
const evenNumbers = arr.filter((item) => {
  return item % 2 === 0;
});
console.log("even numbers: ", evenNumbers);

// concat & rest operator
arr.push(6);
console.log("push", arr);
const concatedArr = arr.concat(6);
console.log("concat", concatedArr);
const restedArr = [6, ...arr];
console.log("rest", restedArr);

// Spread Operator
const obj = {
  name: "mindx",
};
const newObj = {
  ...obj,
  date: new Date(),
  name: "Web D05",
};
console.log(newObj);
