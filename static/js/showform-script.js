var modal = document.getElementById("modal");
var showFormButton = document.getElementById("showFormButton");
var closeButton = document.getElementsByClassName("close")[0];

showFormButton.onclick = function() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
        document.body.classList.add("modal-open"); // Добавляем класс для затемнения фона
    }, 10);
}

closeButton.onclick = function() {
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Удаляем класс для затемнения фона
    }, 500); // Длительность анимации
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
            document.body.classList.remove("modal-open"); // Удаляем класс для затемнения фона
        }, 500); // Длительность анимации
    }
}
