const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeUsuario = document.getElementById("nome").value;

    alert("Cadastro realizado com sucesso!\nBem-vindo(a), " + nomeUsuario + "!");

    window.location.href = "inicio.html";
});

function abrirMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}

 const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });