// Write a program that checks if a number is positive, negative, or zero and prints the appropriate message.
const checkNum = (num) => {
  if (num > 0) {
    console.log(`${num} is postive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log(`${num} is zero`);
  }
  // return;
};
// console.log(checkNum(0));

// if-else if Ladder:
// Create a grading system:

// Score 90 and above: Grade A
// Score 75 to 89: Grade B
// Score 60 to 74: Grade C
// Below 60: Grade F

const gradingSystem = (name, num) => {
  if (num >= 90) {
    console.log(`congrats ${name} you have an A`);
  } else if (num >= 75 && num <= 89) {
    console.log(`well-done ${name} you have an B`);
  } else if (num >= 60 && num <= 74) {
    console.log(`good  ${name} you have an c`);
  } else {
    console.log(
      `${name} you have an f, you failed please study hard next time`
    );
  }
};
// console.log(gradingSystem("clara", 59));

// Write a program to print the name of a day based on the number input
// (1 for Monday, 2 for Tuesday, etc.). Include a default case for invalid inputs.
const day = (d) => {
  switch (d) {
    case 1:
      console.log("Today is Monday");
      break;
    case 2:
      console.log("Today is Tuesday");
      break;
    case 3:
      console.log("Today is Wednesday");
      break;
    case 4:
      console.log("Today is Thursday");
      break;
    case 5:
      console.log("Today is Friday");
      break;
    case 6:
      console.log("Today is Saturday");
      break;
    case 7:
      console.log("Today is sunday");
      break;
    default:
      console.log("Please enter a number between 1 - 7");
      break;
  }
};

// console.log(day(10));

// Write a program that calculates the sum of all even numbers between 1 and 20.
const sumEven = () => {
  let sum = 0;
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumEven());

//write a program that contuniously ask user to input a number until they input a negative number
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askNumber = () => {
  readline.question("please enter a number", (input) => {
    userInput = Number(input);
    if (isNaN(userInput)) {
      console.log("please enter a number");
      askNumber();
    } else if (userInput > 0) {
      console.log(userInput, "is greater than 0");
      askNumber();
    } else if (userInput == 0) {
      console.log(userInput, "is equal to zero");
      askNumber();
    } else {
      console.log("existing ........");
      readline.close();
    }
  });
};
// askNumber()

// Write a program that prints numbers from 1 to 10 using a do-while loop.
const doWhile = () => {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
};
// doWhile()

// Write a program that iterates through an array of
// fruits (["apple", "banana", "cherry"]) and prints each fruit. using for..of loop

const fruitsIterable = () => {
  const fruits = ["apple", "banana", "cherry"];
  for (fruit of fruits) {
    console.log(fruit);
  }
};
// fruitsIterable()

// Create an object representing a car
//  ({brand: "Toyota", model: "Corolla", year: 2022})
// and print each property and its value   using for..in loop
const carObject = () => {
  carProperties = { brand: "Toyota", model: "Corolla", year: 2022 };
  for (carProperty in carProperties) {
    // console.log("the car's" + " " + carProperty + " " + "is" + " " + carProperties[carProperty]  )
    console.log(`the car's ${carProperty} is ${carProperties[carProperty]}`);
  }
};
// carObject()

// break Statement:
// Write a program that loops through numbers 1 to 10
// and stops the loop when it encounters the number 7.

const breakProgram = () => {
  for (let i = 1; i <= 10; i++) {
    if (i < 7) {
      console.log(i);
    } else if (i === 7) {
      break;
    }
  }
};
// breakProgram()

// continue Statement:
// Write a program that loops through numbers 1 to 10
// and skips printing the number 5.

const continueProgram = () => {
  for (let i = 1; i <= 10; i++) {
    if ( i !== 5 ){
      console.log(i)
    } else if (i === 5){
      continue;
    }
  }
};
continueProgram()
