const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeUsuario = document.getElementById("nome").value;

    alert("Cadastro realizado com sucesso!\nBem-vindo(a), " + nomeUsuario + "!");

    window.location.href = "inicio.html";
});