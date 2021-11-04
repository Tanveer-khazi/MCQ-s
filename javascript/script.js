const quizDB = [{
        questions: "1: Set of all subsets of set is called",
        a: "power sets",
        b: "Subset",
        c: "Super set",
        d: "Infinite set",
        ans: "ans1"
    },
    {
        questions: "2: the equations involving radical expressions of the variable are called ",
        a: " reciprocal equations",
        b: "radical equations",
        c: "quadratic equations",
        d: "exponential equations",
        ans: "ans2"
    },
    {
        questions: "3: The set {1, -1} is closed w.r.t ",
        a: "Addition",
        b: "Subtraction",
        c: "Division",
        d: "none",
        ans: "ans2"
    },
    {
        questions: "4: Any matrix A has only one row, then it is called ",
        a: "row matrix",
        b: "column matrix",
        c: "Squre matrix",
        d: "rectangular matrix",
        ans: "ans2"
    },
    {
        questions: "5: The ge0metrical plane on which coordinate sysytem has been specified is called",
        a: "Coordinate plane or real plane",
        b: "argand diagram",
        c: "Cartesian plane",
        d: "Real Line",
        ans: "ans1"
    },
    // {
    //     questions: "done with your assesemnet"
    // }
];

const questions = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
    const questionList = quizDB[questionCount];

    questions.innerText = questionList.questions;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestions();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestions();
    } else {

        showScore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length} 😀<h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }



});