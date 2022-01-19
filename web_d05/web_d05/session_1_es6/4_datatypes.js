// Primitive DataType
let x = 1;
let y = "string";
let z = false;
let a = null;
let b = undefined;

x = 1;
y = x;
x = 2;
console.log(y);

// container - Reference Datatype
const obj = {};
const newObj = obj;

obj.name = "MindX";
console.log(newObj);

const spreaded = { ...obj };
obj.date = "2021-07-10";
console.log(spreaded, obj);
