const movies = [
    {
        title: "Zootopia",
        capa: "../img/capa/capa_zootopia.jpg",
        link: "../filmes.html/zootopia.html"
    },
    {
        title: "Cada Um Na Sua Casa",
        capa: "../img/capa/capa_cadaumnasuacasa.jpg",
        link: "../filmes.html/cadaumnasuacasa.html"
    },
    {
        title: "O Cão e a Raposa",
        capa: "../img/capa/capa_ocaoearaposa.jpg",
        link: "../filmes.html/ocaoearaposa.html"
    },
    {
        title: "Tá Chovendo Hamburgúer",
        capa: "../img/capa/capa_tachovendohamburguer.jpg",
        link: "../filmes.html/tachovendohamburguer.html"
    },
    {
        title: "Bolt - Supercão",
        capa: "../img/capa/capa_bolt.jpg",
        link: "../filmes.html/bolt.html"
    },
    {
        title: "Shrek",
        capa: "../img/capa/capa_shrek.jpg",
        link: "../filmes.html/shrek.html"
    },
    
    {
        title: "Madagascar 3",
        capa: "../img/capa/capa_madagascar3.jpg",
        link: "../filmes.html/madagascar3.html"
    },
    {
        title: "O Bicho Vai Pegar",
        capa: "../img/capa/capa_obichovaipegar.jpg",
        link: "../filmes.html/obichovaipegar.html"
    },
    {
        title: "Homem-Aranha no Aranha Verso",
        capa: "../img/capa/capa_homemaranha.jpg",
        link: "../filmes.html/homemaranha.html"
    },
    {
        title: "Carros",
        capa: "../img/capa/capa_carros.jpg",
        link: "../filmes.html/carros.html"
    },
    {
        title: "Rio",
        capa: "../img/capa/capa_rio.jpg",
        link: "../filmes.html/rio.html"
    },
    {
        title: "A Familia do Futuro",
        capa: "../img/capa/capa_afamiliadofuturo.jpg",
        link: "../filmes.html/afamiliadofuturo.html"
    },
   
    {
        title: "Operação Big Hero",
        capa: "../img/capa/capa_operacaobighero.jpg"
        ,
        link: "../filmes.html/operacaobighero.html"
    },
    {
        title: "Elementos",
        capa: "../img/capa/capa_elementos.jpg",
        link: "../filmes.html/elementos.html"
    },
    {
        title: "Detona Ralph",
        capa: "../img/capa/capa_detonaralph.jpg",
        link: "../filmes.html/detonaralph.html"
    },  
    
];

function displayCards() {
    const groupcard = document.getElementById("groupCard");
    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("card");

        const capa = document.createElement("img");
        capa.src = movie.capa;
        capa.alt = movie.title;
        capa.classList.add("movie-capa");

        capa.addEventListener("click", function(){
            window.location.href = movie.link;
        });

        const title = document.createElement("p");
        title.textContent = movie.title;
        title.classList.add("movie-title");

        card.appendChild(capa);
        card.appendChild(title);
        groupcard.appendChild(card);
    });
}



window.onload = function() {
    displayCards();
};