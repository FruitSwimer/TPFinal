let currentQuestion = 0;
var questions = document.querySelectorAll('.question-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

function showQuestion(questionNumber) {
    questions.forEach(question => {
        question.classList.add('question-hidden');
    });

    questions[questionNumber].classList.remove('question-hidden');

    if (questionNumber === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }

    if (questionNumber === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

var questionsData = [
    { name: 'question1', correctAnswer: 'Tim Berners-Lee' },
    { name: 'question2', correctAnswer: '1989' },
    { name: 'question3', correctAnswer: 'HyperText Markup Language' },
    { name: 'question4', correctAnswer: '1990' },
    { name: 'question5', correctAnswer: '1994' },
];

function checkAnswers() {
    var correctAnswers = 0;

    questionsData.forEach(question => {
        var radioButtons = document.querySelectorAll(`input[type=radio][name=${question.name}]`);

        radioButtons.forEach(radioButton => {
            if (radioButton.checked && radioButton.value === question.correctAnswer) {
                correctAnswers++;
            }
        });
    });

    console.log('Nombre de réponses correctes : ' + correctAnswers);
}

showQuestion(currentQuestion)

