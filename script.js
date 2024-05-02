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
    const quiz = document.getElementById("quiz");
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
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<img src="images/${answer}.jpg" alt="${answer}" style="max-width: 100%;">`;
}

// Display the first question initially
displayQuestion(currentQuestion);
