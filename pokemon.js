async function run() {
    const title = document.querySelector("h1");
    const searchBar = document.querySelector("input");
    const loading = document.querySelector(".loading");
    const container = document.querySelector(".pokemon-container");

    title.style.display = "none";
    searchBar.style.display = "none";
    container.style.display = "none";
    loading.style.display = "block";

    const data = await fetch("https://pokeapi.co/api/v2/pokemon");
    const detailData = await data.json();

    await new Promise((exit) => setTimeout(exit, 1000));

    title.style.display = "block";
    searchBar.style.display = "block";
    container.style.display = "flex";
    loading.style.display = "none";

    let poke = detailData.results;

    async function Render(poke) {
        container.innerHTML = "";
        for (let i = 0; i < poke.length; i++) {
            const pokemon = poke[i];
            NAME = pokemon.name;
            URL = pokemon.url;
            const pokeData = await fetch(URL);
            const pokeDetail = await pokeData.json();
            IMG = pokeDetail.sprites.other.home.front_default;
            types = pokeDetail.types.map((pokeType) => pokeType.type.name);

            const child = document.createElement("div");
            child.classList.add("pokemon-card");
            const pokemon_each = document.createElement("p");
            pokemon_each.innerText = `#${i + 1}`;
            const poke_img = document.createElement("img");
            poke_img.src = IMG;
            poke_img.alt = NAME;
            const pokemon_name = document.createElement("p");
            pokemon_name.classList.add("name");
            pokemon_name.innerText = NAME;
            child.appendChild(pokemon_each);
            child.appendChild(poke_img);
            child.appendChild(pokemon_name);
            for (type of types) {
                const newType = document.createElement("div");
                newType.classList.add("type", type);
                newType.innerText = type;
                child.appendChild(newType);
            }
            container.appendChild(child);
        }
    }
    Render(poke);
    searchBar.addEventListener("input", () => {
        const searchInput = searchBar.value.toLowerCase();
        const res = poke.filter((pokemon) => {
            return pokemon.name.includes(searchInput);
        });
        Render(res);
    });
};
run();


// const poke_name = [
//     "Bulbasaur",
//     "Ivysaur",
//     "Venusaur",
//     "Charmander",
//     "Charmeleon",
//     "Charizard",
// ];
// const poke_type = [
//     ["Grass", "Poison"],
//     ["Grass", "Poison"],
//     ["Grass", "Poison"],
//     ["Fire"],
//     ["Fire"],
//     ["Fire", "Flying"],
// ];

// async function loadPokemon () {
//     const container = document.querySelector(".pokemon-container");
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon');
//     const products = await res.json();

//     const HTML = products.map((item) => {

//     })
// }

// function show_pokemon() {
//     for (each in poke_name) {
//         let d_each = Number(each) + 1;
//         const child = document.createElement("div");
//         child.classList.add("pokemon-card");
//         const pokemon_each = document.createElement("p");
//         pokemon_each.innerText = `#${d_each}`;
//         const poke_img = document.createElement("img");
//         poke_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${d_each}.png`;
//         poke_img.alt = poke_name[each];
//         const pokemon_name = document.createElement("div");
//         pokemon_name.classList.add("name");
//         child.appendChild(pokemon_each);
//         child.appendChild(poke_img);
//         child.appendChild(pokemon_name);
//         for (type of poke_type[each]) {
//             const newType = document.createElement("div");
//             newType.classList.add("type", type);
//             newType.innerText = type;
//             child.appendChild(newType);
//         }
//         container.appendChild(child);
//     }
// }
