const getBtn = document.getElementById('myget-btn');


const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/");

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    xhr.send();
};


getBtn.addEventListener('click', getData);



const pokemon = ['name: rattata, resource_uri: api/v1/pokemon/19/', 'name: charmander, resource_uri: api/v1/pokemon/4/', 'name: charmeleon, resource_uri: api/v1/pokemon/5/', 'name: wartortle, resource_uri: api/v1/pokemon/8/', 'name blastoise, resource_uri: api/v1/pokemon/9/', 'name: caterpie, resource_uri: api/v1/pokemon/10/', 'name: metapod, resource_uri: api/v1/pokemon/11/', 'name: butterfree, resource_uri: api/v1/pokemon/12/', 'name: spearow, resource_uri: "api/v1/pokemon/21/'];

const list = document.querySelectorAll(".pokemon-list");
var pokeList = document.getElementById("pokemonList")

for (var i = 0; i < pokemon.length; i++) {
    pokeList.innerHTML += "<li>" + pokemon[i] + "</li>"
}