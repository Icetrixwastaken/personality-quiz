let currentQuestion = 0;
const questions = [
    {
        question: "Which do you prefer?",
        options: ["Working hard", "Having fun"],
    },
    {
        question: "What do you enjoy most?",
        options: ["Making people laugh", "Being supportive"],
    },
    {
        question: "What's your approach to challenges?",
        options: ["Face them head-on", "Find smart solutions"],
    },
    // Add more questions as needed
];

function startQuiz() {
    currentQuestion = 0;
    displayQuestion(currentQuestion);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").innerHTML = "";
}

function nextQuestion(answer) {
    if (currentQuestion < questions.length) {
        currentQuestion++;
        if (currentQuestion === questions.length) {
            showResult(answer);
        } else {
            displayQuestion(currentQuestion);
        }
    }
}

function displayQuestion(index) {
    const questionDiv = document.getElementById("question");
    const optionsDiv = document.getElementById("options");

    questionDiv.innerText = questions[index].question;

    optionsDiv.innerHTML = "";
    for (const option of questions[index].options) {
        const button = document.createElement("button");
        button.innerText = option;
        button.setAttribute("onclick", `nextQuestion('${option.toLowerCase()}')`);
        optionsDiv.appendChild(button);
    }
}

function showResult(answer) {
    document.getElementById("quiz").style.display = "none";
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Your personality:</h2><img src="images/${answer}.jpg" alt="${answer}" style="max-width: 100%;">`;
}

// Start the quiz when the page loads
startQuiz();
displayQuestion(currentQuestion);
