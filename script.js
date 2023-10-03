var modal = document.getElementById('myModal');
var btn = document.querySelector('.start-button');
var startQuizBtn = document.getElementById('startQuizBtn');
var span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

startQuizBtn.onclick = function() {
    window.location.href = 'qcm.html';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
