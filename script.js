let currentPokemon;



async function loadPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch (url);
    currentPokemon = await response.json();

    console.log('loaded pokemon', currentPokemon);

    renderPokemonInfo();
}


function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('type').innerHTML = currentPokemon['types'][0]['type']['name'];
    document.getElementById('hp').innerHTML = currentPokemon['stats'][0]['base_stat'];
    document.getElementById('attack').innerHTML = currentPokemon['stats'][1]['base_stat'];
    document.getElementById('defense').innerHTML = currentPokemon['stats'][2]['base_stat'];
    document.getElementById('specialAttack').innerHTML = currentPokemon['stats'][3]['base_stat'];
    document.getElementById('specialDefense').innerHTML = currentPokemon['stats'][4]['base_stat'];
    document.getElementById('speed').innerHTML = currentPokemon['stats'][5]['base_stat']
    updateProgressBar();
}

function updateProgressBar(){
    
    document.getElementById('progressBar1').style = `width: ${currentPokemon['stats']['0']['base_stat']}%`;
    document.getElementById('progressBar2').style = `width: ${currentPokemon['stats']['1']['base_stat']}%`;
    document.getElementById('progressBar3').style = `width: ${currentPokemon['stats']['2']['base_stat']}%`;
    document.getElementById('progressBar4').style = `width: ${currentPokemon['stats']['3']['base_stat']}%`;
    document.getElementById('progressBar5').style = `width: ${currentPokemon['stats']['4']['base_stat']}%`;
    document.getElementById('progressBar6').style = `width: ${currentPokemon['stats']['5']['base_stat']}%`;
}