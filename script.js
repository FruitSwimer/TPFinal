let currentQuestion = 0;
const questions = document.querySelectorAll('.question-container');
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

function checkAnswers() {
    console.log(questions.value);
}

showQuestion(currentQuestion);




var modal = document.getElementById('myModal');
var btn = document.querySelector('.start-button');
var description = document.getElementById('description')
// var startQuizBtn = document.getElementById('startQuizBtn');
var span = document.querySelector('.close');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



var form = document.getElementsByTagName("form")[0];
var response = document.getElementById("response");
var error = document.querySelector(".error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (response.value != "<mark>") {
        console.log(response.value);
        // S'il est invalide, on affiche un message d'erreur personnalisé
        error.innerHTML =
          "Mauvaise réponse, retourne lire ton cours";
        error.className = "error active";
    }
    else {
        window.location.href = "qcm.html";
    }
    },
    false,
)


