for(let x = 0; x <= 9; x++){
    getAPI(x);
    console.log(x)
}

function getAPI(pokemonNum){
    let randomPokemon = Math.floor(Math.random() * 800) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((data) => {
        //console.log(data);
        console.log(pokemonNum);
        document.getElementById(`pokemon-img${pokemonNum}`).style.backgroundImage = `url(${data.sprites.front_default})`;
        //console.log(data.name)
        document.getElementById(`name${pokemonNum}`).innerHTML = data.name;
        document.getElementById(`id${pokemonNum}`).innerHTML = data.id;
        document.getElementById(`Ability${pokemonNum}-1`).innerHTML = data.abilities[0].ability.name;
        //console.log(data.abilities.length);
        if (data.abilities.length >= 2) {
          document.getElementById(`Ability${pokemonNum}-2`).innerHTML =
            data.abilities[1].ability.name;
        } else {
          document.getElementById(`Ability${pokemonNum}-2`).innerHTML = "";
        }

    });
}