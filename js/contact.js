document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            showSuccessMessage();
        } else {
            showErrorMessage();
        }
    };

    xhr.send(data);
});

function showSuccessMessage() {
    var successMessage = document.createElement("p");
    successMessage.innerText = "Enviado exitosamente";
    successMessage.classList.add("success-message");
    document.getElementById("contact-form").appendChild(successMessage);
    setTimeout(function() {
        successMessage.remove();
    }, 3000);
}

function showErrorMessage() {
    var errorMessage = document.createElement("p");
    errorMessage.innerText = "Error al enviar el mensaje";
    errorMessage.classList.add("error-message");
    document.getElementById("contact-form").appendChild(errorMessage);
    setTimeout(function() {
        errorMessage.remove();
    }, 3000);
}
