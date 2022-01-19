sayHello();

function sayHello() {
  console.log("Hello Saigon");
}

const sayHelloAnonymous = function () {
  console.log("Hello Saigon from anonymous function");
};
sayHelloAnonymous();

const sayHelloArrow = () => {
  console.log("Hello Saigon from arrow function");
};
sayHelloArrow();
