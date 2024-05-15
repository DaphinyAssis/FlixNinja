const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`}, { duration: 3000, fill: "forwards" });
}

const searchInput = document.getElementById('searchInput');

// Seleciona o ícone de lupa
const searchIcon = document.getElementById('searchIcon');

// Adiciona um evento de clique ao ícone de lupa
searchIcon.addEventListener('click', function() {
    search();
});

// Adiciona um evento de teclado ao input de pesquisa
searchInput.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a tecla Enter
    if (event.key === 'Enter') {
        search();
    }
});

// Função para realizar a pesquisa
function search() {
    // Recupera o valor do campo de pesquisa
    const query = searchInput.value;
    
    // Executa a lógica da pesquisa
    // Aqui você pode fazer o que for necessário com o valor da pesquisa
    
    // Por exemplo, você pode redirecionar para uma página de resultados
    // window.location.href = 'pagina-de-resultados.html?q=' + encodeURIComponent(query);
}