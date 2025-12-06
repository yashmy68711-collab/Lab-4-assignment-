const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who invented JavaScript?", answer: "brendan eich" },
    { question: "What does HTML stand for?", answer: "hyper text markup language" },
    { question: "What is 20 - 5?", answer: "15" },
    { question: "Which language is used for styling webpages?", answer: "css" },
    { question: "Which gas do plants breathe in?", answer: "carbon dioxide" },
    { question: "What is the largest ocean on Earth?", answer: "pacific ocean" }
];

function runQuiz() {
    let score = 0;

    alert(
        "WELCOME TO THE QUIZ GAME \n\n" +
        "You will answer " + quizQuestions.length + " questions.\n" +
        "Type your answers carefully!\n\n" +
        "Press OK to begin."
    );

    for (let i = 0; i < quizQuestions.length; i++) {

        let userInput = prompt(
            "QUESTION " + (i + 1) + " / " + quizQuestions.length + "\n" +
            "----------------------------------\n" +
            quizQuestions[i].question + "\n\n" +
            "Type your answer below:"
        );

        if (userInput === null) {
            alert("Quiz cancelled. Goodbye!");
            return;
        }

        userInput = userInput.toLowerCase().trim();

        if (userInput === quizQuestions[i].answer) {
            alert("Correct! Good job!");
            score++;
        } else {
            alert(
                "Wrong Answer!\n" +
                "Correct answer was: " + quizQuestions[i].answer
            );
        }
    }

    alert(
        " QUIZ COMPLETED! \n\n" +
        "Your Final Score:\n" +
         score + " / " + quizQuestions.length + " \n\n" +
        "Thanks for playing!"
    );
}

runQuiz();
