var modal = document.getElementById('myModal');
var btn = document.querySelector('.start-button');
var description = document.getElementById('description')
var startQuizBtn = document.getElementById('startQuizBtn');
var span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = 'block';
    description.style.display = "none";
    console.log("yo")
}


var form = document.getElementsByTagName("form")[0];
var response = document.getElementById("response");
var error = document.querySelector(".error");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    window.location.href = "quiz.html";
})