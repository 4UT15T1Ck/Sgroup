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

function show_pokemon() {
    container.innerHTML = "";
    for (each in poke_name) {
        let d_each = Number(each) + 1;
        const child = document.createElement("div");
        child.classList.add("pokemon-card");
        const pokemon_each = document.createElement("p");
        pokemon_each.innerText = `#${d_each}`;
        const poke_img = document.createElement("img");
        poke_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d_each}.png`;
        poke_img.alt = poke_name[each];
        const pokemon_name = document.createElement("div");
        pokemon_name.classList.add("name");
        child.appendChild(pokemon_each);
        child.appendChild(poke_img);
        child.appendChild(pokemon_name);
        for (type of poke_type[each]) {
            const newType = document.createElement("div");
            newType.classList.add("type", type);
            newType.innerText = type;
            child.appendChild(newType);
        }
        container.appendChild(child);
    }
}
