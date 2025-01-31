// // PART 1 JS BASICS

// //Objective: Create variables of different data types and print them
// let score = 100;
// let temperature = 36.6;
// let greeting = "Hello, Javascript!";
// let isLearningFun = true;
// console.log(score, temperature, greeting, isLearningFun)

// //Objective: Create an object and an array, then access and modify their elements.
// let student = {
//   name: "Shlok",
//   age: 20,
//   subjects: ["CMPSC 263", "CMPSC 464", "CMPSC 448", "CMPEN 331", "ENGL 202C", "MATH 415"]
// }
// student.isGraduated = false;

// let primeNumbers = [2, 3, 5, 7, 11];
// primeNumbers[1] = 4;
// console.log(primeNumbers[1])
// console.log("Mistake detected")
// primeNumbers[1] = 3;
// console.log(primeNumbers)

// //Objective: Perform operations using different operators and understand their results.
// let a = 10;
// let b = 5;
// let sum = a+b;
// let product = a*b;
// let modulo = a%b;
// console.log(sum, product, modulo)

// let x = 121
// let y = 43
// x == y;
// x === y ;
// x != y ;
// x !== y ;
// x < y;
// x > y ;
// x <= y;
// x >= y;
// console.log(x == y, x === y, x != y, x !== y, x < y, x > y,  x <= y, x >= y)

// let p = true;
// let q = false;

// console.log(p&&q, p||q, !p, !q)

// //Objective: Write conditional statements and loops using control flow operators.
// if (score > 50){
//   console.log("Great job!");
// }else {
//   console.log("Keep trying!");
// }

// for (let i = 0; i < primeNumbers.length; i++) {
//   console.log(primeNumbers[i]);
// }

// while (score > 0) {
//   score --;
// }

// console.log("score =", score)

// //Objective: Understand JS functions
// function eventCountdown(eventDate) {
//   const now = new Date();
//   const event = new Date(eventDate);
//   const timeDiff = event - now;

//   let seconds = Math.floor(timeDiff / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   let days = Math.floor(hours / 24);

//   hours %= 24;
//   minutes %= 60;
//   seconds %= 60;

//   return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
// }

// const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
// console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024

// /* this code is counting down to the number of days, hours, minutes and seconds to the event date which is 31st of Decemeber 2024). 
// "now" gets todays date. "event" gets the events date. "timeDiff" shows the time difference between the two dates in milliseconds.
// To get the number of days, hours, minutes and seconds to the events we are dividing it 24, 60, 60, 1000 respectively and round them down.*/

// function threeWaySwap(a, b, c){
//   let temp = a;
//     a = b;
//     b = c;
//     c = temp; 
//     console.log(a,b,c)
// }
// x = 1;
// y = 2;
// z = 3;
// console.log(threeWaySwap(x,y,z))


// function findLongestWord(sentence) {
//   const words = sentence.split(' '); // words is an array of all the words in the sentence
//   // write your code here
//   console.log(words)
// }

// // Example usage:
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
// // your function should output the correct longest word.



// PART 2: DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const listItem = document.createElement("li");
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";

      // Add event listener to mark tasks as completed
      checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
          taskSpan.style.textDecoration = "line-through";
          taskSpan.style.color = "gray";
        } else {
          taskSpan.style.textDecoration = "none";
          taskSpan.style.color = "black";
        }
      });

      // Append elements
      listItem.appendChild(taskSpan);
      listItem.appendChild(checkBox);
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = "";
  });
});

