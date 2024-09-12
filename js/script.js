// ! Quiz app;

const quizContainer = document.querySelector(".quiz-container");
const btnNext = document.querySelector(".btn-next");
const btnStart = document.querySelector(".btn-start");
const quiz = {
  questions: [
    "1. What is the correct way to write a JavaScript array?",
    "2. How can you add a comment in JavaScript?",
    "3. Which of the following will write 'Hello World' to the console?",
    "4. How do you find the number with the highest value in an array?",
    "5. What will be the output of the following code?\nconsole.log(5 + '5');",
    "6. Which operator is used to assign a value to a variable?",
    "7. How do you create a function in JavaScript?",
    "8. What is the correct syntax to refer to an external script called 'script.js'?",
    "9. Which of the following is a way to define a variable in JavaScript?",
    "10. What will be the output of the following code?\nlet a = [1, 2, 3];\na.push(4);\nconsole.log(a);",
  ],
  options: [
    [
      "A) var colors = 'red', 'green', 'blue';",
      "B) var colors = (1:'red', 2:'green', 3:'blue');",
      "C) var colors = ['red', 'green', 'blue'];",
      "D) var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');",
    ],
    [
      "A) &lt;!-- This is a comment --&gt;",
      "B) // This is a comment",
      "C) /* This is a comment */",
      "D) Both B and C",
    ],
    [
      "A) console.log('Hello World');",
      "B) document.write('Hello World');",
      "C) alert('Hello World');",
      "D) All of the above",
    ],
    [
      "A) Math.max([1, 2, 3]);",
      "B) Math.max.apply(null, [1, 2, 3]);",
      "C) Math.max([1, 2, 3]);",
      "D) Math.max.array([1, 2, 3]);",
    ],
    ["A) 10", "B) 55", "C) 5 5", "D) Error"],
    ["A) *", "B) -", "C) =", "D) +"],
    [
      "A) function myFunction {}",
      "B) function:myFunction {}",
      "C) function myFunction() {}",
      "D) create myFunction() {}",
    ],
    [
      "A) &lt;script name='script.js'&gt;&lt;/script&gt;",
      "B) &lt;script href='script.js'&gt;&lt;/script&gt;",
      "C) &lt;script src='script.js'&gt;&lt;/script&gt;",
      "D) &lt;script file='script.js'&gt;&lt;/script&gt;",
    ],
    ["A) let", "B) var", "C) const", "D) All of the above"],
    ["A) [1, 2, 3]", "B) [4, 1, 2, 3]", "C) [1, 2, 3, 4]", "D) Error"],
  ],
  answer: [
    "C", // 1. Correct way to write a JavaScript array
    "D", // 2. How to add a comment in JavaScript
    "A", // 3. Writing 'Hello World' to the console
    "B", // 4. Finding the number with the highest value in an array
    "B", // 5. Output of console.log(5 + '5')
    "C", // 6. Operator to assign a value to a variable
    "C", // 7. Correct way to create a function in JavaScript
    "C", // 8. Correct syntax to refer to an external script
    "D", // 9. Ways to define a variable in JavaScript
    "C", // 10. Output of the code with array and push
  ],
  userAnswer: [],
};

const { questions, options, answer, userAnswer } = quiz;
let result = 0;
let count = 0;
quizContainer.classList.add("hidden");
btnNext.classList.add("hidden");
// ! Creating elements
const questionElement = function () {
  // Clear previous content
  quizContainer.innerHTML = "";
  quizContainer.insertAdjacentHTML(
    "afterbegin",
    `<p class="total-question">Question ${count + 1}/${questions.length}</p>
  <div class="questions-box">
    <p class="question-text">
      ${questions[count]}
    </p>
    <ul class="option-list">
      <li class="option">${options[count][0]}</li>
      <li class="option">${options[count][1]}</li>
      <li class="option">${options[count][2]}</li>
      <li class="option">
        ${options[count][3]}
      </li>
    </ul>
    <div class="answer-box">
            <p class="ans-title">Write answer:</p>
            <input type="text" name="" id="" class="answer" />
          </div>
  </div>
  `
  );
};

btnStart.addEventListener("click", function () {
  btnStart.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  btnNext.classList.remove("hidden");
  questionElement();
});

btnNext.addEventListener("click", function () {
  const answerInput = document.querySelector(".answer").value;
  if (count < questions.length - 1) {
    userAnswer.push(answerInput.trim().toUpperCase());

    count += 1;
    questionElement();
  } else {
    userAnswer.push(answerInput.trim().toUpperCase());
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === userAnswer[i]) {
        result += 1;
        console.log(result);
      }
    }
    btnNext.classList.add("hidden");
    quizContainer.innerHTML = `<p class="result">
          Quiz Completed! You got ${result}/${questions.length}.
          Thank you for participating.
        </p>
      `;
  }
});
