//high order function that takes a function as a parameter
function Greeting(name, sayGoodbye) {
  console.log("hello " + name + "Welcome to high order function ");
  sayGoodbye();
}
function sayGoodbye() {
  console.log("good bye !!!");
}
Greeting("clara", sayGoodbye);

//HOF that returns a function

const button = document.createElement("button");
button.textContent = "Click";

function addlogging(message) {
    return function (event) {   
        console.log(message + " " + event + " " + "clicked" + " "+ new Date()) ;
    };
};
  
button.addEventListener("click", addLogging("Hello from HOF that returns a function"));

