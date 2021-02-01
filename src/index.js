/**Declaración de variables */
let container = document.getElementById('main');
let btnSearch = document.getElementById('btnSearch');
const url = 'https://pokeapi.co/api/v2/pokemon/';

/**Declaración de Eventos */
document.getElementById('link-home').addEventListener('click', (e)=>{
    document.getElementById('home').style.display='block';
    document.getElementById('main').style.display='none';

})
document.getElementById('link-pokedex').addEventListener('click', (e)=>{
    document.getElementById('home').style.display='none';
    document.getElementById('main').style.display='flex';

})


btnSearch.addEventListener('click', getPokemon);


/**Función para leer la información del input y llamar la función para consultar la API */
function getPokemon(){
const cardVisible = document.getElementById('pokemonCard');
cardVisible.style.display= 'flex';
let numberPokemon = document.getElementById('numberPokemon').value;
let urlNew =url.concat(numberPokemon);  //Unir al path de la URL de la API el valor ingresado por el usuario
searchApiPokemon(urlNew);
}           

/**Función para realizar la consulta de la API utilizando FETCH */
function searchApiPokemon(url){
    fetch(url)
    .then(rta=> rta.json())
    .then((data)=>{

        showPokemon(data);
        
    })
    .then((err=>console.log(err)))

}

/**Función para visualizar los datos el pokémon */
function showPokemon(dataPokemon){
    console.log(dataPokemon);
    const card = `
            <div class="container-imgPokemon">
                <img src="${dataPokemon.sprites.front_default}" alt="">
                <div>
                <p>No. ${dataPokemon.id}</p>
                </div>
            </div>
            <div id= "pokemon-details">
                <h3>${dataPokemon.name}</h3>
                <p>Peso:${dataPokemon.weight}</p>
                <p>Altura:${dataPokemon.height} </p>
                <p>Base experience: ${dataPokemon.base_experience}</p>          
            </div>
    `;

    const pokemonCard = document.getElementById('pokemonCard');
    pokemonCard.innerHTML = card

    dataPokemon.types.forEach(element => {
        let type = document.createElement('p');
        type.innerHTML= 'Tipo: ' + element.type.name;
        document.getElementById('pokemon-details').appendChild(type);
        console.log(element.type.name)

    });

    dataPokemon.abilities.forEach(element => {
        let ability = document.createElement('p');
        ability.innerHTML= 'Habilidad: ' + element.ability.name;
        document.getElementById('pokemon-details').appendChild(ability);
        console.log(element.ability.name)

})
}
// name: "bulbasaur"
// imagen  data.sprites.front_default 
// weight: 69
// tipo array 2 elementos data.types
// array 2 elementos data.abilities
// base_experience:
// height: 7

{/* <p>Tipos: ${dataPokemon.name}</p>
<p>Habilidades: ${dataPokemon.name}</p> */}