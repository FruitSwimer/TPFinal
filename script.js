var modal = document.getElementById('myModal');
var btn = document.querySelector('.start-button');
var description = document.getElementById('description')
// var startQuizBtn = document.getElementById('startQuizBtn');
var span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = 'block';
    description.style.display = "none";
}


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
          "Mauvaise répose, retourne lire ton cours";
        error.className = "error active";
    }
    else {
        window.location.href = "qcm.html";
    }
    },
    false,
);