const poke_name = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
];
const poke_type = [
    ["Grass", "Poison"],
    ["Grass", "Poison"],
    ["Grass", "Poison"],
    ["Fire"],
    ["Fire"],
    ["Fire", "Flying"],
];
const container = document.querySelector(".pokemon-container");

function card_content(index) {
    let d_index = Number(index) + 1;
    const child = document.createElement("div");
    child.classList.add("pokemon-card");
    const pokemon_index = document.createElement("p");
    pokemon_index.innerText = `#${d_index}`;
    const poke_img = document.createElement("img");
    poke_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d_index}.png`;
    poke_img.alt = poke_name[index];
    const pokemon_name = document.createElement("div");
    pokemon_name.classList.add("name");
    child.appendChild(pokemon_index);
    child.appendChild(poke_img);
    child.appendChild(pokemon_name);
    for (type of poke_type[index]) {
        const newType = document.createElement("div");
        newType.classList.add("type", type);
        newType.innerText = type;
        child.appendChild(newType);
    }
    return child;
}

function show_pokemon() {
    container.innerHTML = ''
    for (index in poke_name) {
        const newItem = card_content(index);
        container.appendChild(newItem);
    }
}
