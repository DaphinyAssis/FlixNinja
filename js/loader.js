// script.js
document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");

    // Simulação de um carregamento de conteúdo
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Ajuste o tempo conforme necessário
});
