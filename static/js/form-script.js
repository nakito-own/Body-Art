// Ваш JavaScript код здесь

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var showFormButton = document.getElementById("showFormButton");
    var closeButton = document.getElementsByClassName("close")[0];

    showFormButton.onclick = function() {
        modal.style.display = "block";
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Добавляем обработчик событий для тапа на мобильных устройствах
    modal.addEventListener('touchstart', function(event) {
        if (event.target === modal) {
        modal.style.display = "none";
        }
    });

    // Получаем форму по ее ID
    var form = document.querySelector('form');

    // Добавляем обработчик события отправки формы
    form.addEventListener('submit', function(event) {
        // Отменяем стандартное поведение формы (перезагрузку страницы)
        event.preventDefault();

        // Создаем новый объект FormData, чтобы собрать данные формы
        var formData = new FormData(form);

        // Создаем новый объект XMLHttpRequest для отправки данных на сервер
        var xhr = new XMLHttpRequest();

        // Открываем соединение с сервером
        xhr.open('POST', '/submit-form', true);

        // Добавляем обработчик события загрузки данных
        xhr.onload = function() {
            // Проверяем статус ответа от сервера
            if (xhr.status === 200) {
                // Если запрос успешен, можно выполнить какие-то действия
                console.log('Форма успешно отправлена!');
            } else {
                // Если произошла ошибка, можно выполнить какие-то действия
                console.error('Произошла ошибка при отправке формы.');
            }
        };

        // Отправляем данные формы на сервер
        xhr.send(formData);
    });
});
