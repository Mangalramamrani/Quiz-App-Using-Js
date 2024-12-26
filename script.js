const questions = [
    {
        question: "What is the capital of Pakistan?",
        a: "Karachi",
        b: "Lahore",
        c: "Islamabad",
        d: "Peshawar",
        ans: "c", // Correct answer
    },
    {
        question: "Which year did Pakistan gain independence?",
        a: 1945,
        b: 1947,
        c: 1950,
        d: 1946,
        ans: "b", // Correct answer
    },
    {
        question: "Which programming language is known as the language of the web?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        ans: "c", // Correct answer
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Creative Style System",
        c: "Computer Style Sheet",
        d: "Coded Styling System",
        ans: "a", // Correct answer
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        a: "<img>",
        b: "<a>",
        c: "<div>",
        d: "<link>",
        ans: "b", // Correct answer
    }
];


const questionButton = document.getElementById("question");
const answersButtons = document.querySelectorAll(".answer");

let currentQuestion = 0; // Tracks the current question index
let score = 0; // Tracks the user's score

function showQuestion() {
    questionButton.innerText = questions[currentQuestion].question;
    // Map the answer options to the buttons
    const answers = Object.values(questions[currentQuestion]).slice(1, 5); // Get a, b, c, d values
    for (let i = 0; i < answersButtons.length; i++) {
        answersButtons[i].innerText = answers[i];
        answersButtons[i].dataset.answerKey = Object.keys(questions[currentQuestion])[i + 1]; // Store answer key (a, b, c, d)
    }
}
showQuestion();

// Add event listeners for the buttons
answersButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const selectedAnswer = e.target.dataset.answerKey; // Get the key of the selected answer
        const correctAnswer = questions[currentQuestion].ans; // Get the correct answer key

        // Check if the selected answer is correct
        if (selectedAnswer === correctAnswer) {
            score++; // Increment score if correct
        }

        currentQuestion++; // Move to the next question

        if (currentQuestion >= questions.length) {
            alert(`Quiz complete! Your score is: ${score}/${questions.length}`);
            currentQuestion = 0; // Reset to the first question
            score = 0; // Reset the score
        }

        showQuestion();
    });
});
