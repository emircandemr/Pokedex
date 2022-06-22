
const pokeSearch = document.querySelector(".poke-search");
const pokeButton = document.querySelector(".poke-button");
const pokeContainer = document.querySelector(".container");

const pokeCount = 151;

const pokeColors = {
    fire: "rgba(253, 223, 223, 0.48)",
    grass: "rgba(222, 253, 224, 0.48)",
    electric: "rgba(252, 247, 222, 0.48)",
    water: "rgba(222, 243, 253, 0.48)",
    ground: "rgba(244, 231, 218, 0.48)",
    rock: "rgba(213, 213, 212, 0.48)",
    fairy: "rgba(252, 234, 255, 0.48)",
    poison: "rgba(214, 179, 255, 0.48)",
    bug: "rgba(248, 213, 163, 0.48)",
    dragon: "rgba(151, 179, 230, 0.48)",
    psychic: "rgba(234, 237, 161, 0.48)",
    flying: "rgba(245, 245, 245, 0.48)",
    fighting: "rgba(230, 224, 212, 0.48)",
    normal: "rgba(245, 245, 245, 0.48)",
    ice: "rgba(224, 245, 255, 0.48)",
}


const getPokemon = async (id) => {

    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let response = await fetch(url);
    let data = await response.json();
    createPokemon(data)
}


const pokeFunc = async () => {

    for( let i = 1 ; i<= pokeCount ; i++){
       await getPokemon(i)
    }

}

const createPokemon = (pokemon) => {

    const pokeName = pokemon.name.toUpperCase();
    const id = pokemon.id.toString().padStart(3,"0");
    const type = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
    const color = pokeColors[type.toLowerCase()]

    let tempHTML = 
    `
    <div class="cardBox" style="background:${color}">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${pokeName}">
        <h4 class="poke-name">${pokeName}</h4>
        <p class="poke-id">#${id}</p>
        <p class="poke-type">Type : ${type}</p>
    </div>
    `

    pokeContainer.innerHTML += tempHTML

}
pokeFunc();

pokeSearch.addEventListener("input",function(e){
    const search = pokeSearch.value.toLowerCase();
    const pokeNames = document.querySelectorAll(".poke-name");

    pokeNames.forEach(element => {
        element.parentElement.style.display = "flex"
    
        if(!element.innerHTML.toLowerCase().includes(search)){
        element.parentElement.style.display = "none"

        }
    });

})

