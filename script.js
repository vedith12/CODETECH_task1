#JAVASCRIPT CODE:

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionData.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => selectAnswer(optionElement, option));
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("next-button").style.display = "none";
}

function selectAnswer(optionElement, selectedOption) {
    const questionData = questions[currentQuestionIndex];
    const isCorrect = selectedOption === questionData.answer;

    // Apply styles based on correctness
    if (isCorrect) {
        optionElement.classList.add("correct");
        score++;
    } else {
        optionElement.classList.add("wrong");
        document.querySelectorAll(".option").forEach(opt => {
            if (opt.textContent === questionData.answer) {
                opt.classList.add("correct");
            }
        });
    }

    // Disable further clicks after selecting an answer
    document.querySelectorAll(".option").forEach(opt => opt.style.pointerEvents = "none");
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

loadQuestion();
