<script setup>
import { ref, computed, onMounted } from "vue";

const loading = ref(true);
const search = ref("");
const pokemonList = ref([]);

const filteredPokemon = computed(() => {
    return pokemonList.value.filter((pokemon) => pokemon.name.toLowerCase().includes(search.value.toLowerCase().trim()));
});

onMounted(async () => {
    const rawData = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await rawData.json();

    const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
            name: pokemon.name,
            image: details.sprites.other.home.front_default,
            types: details.types.map((t) => t.type.name),
        };
    });

    pokemonList.value = await Promise.all(promises);
    setTimeout(() => {
        loading.value = false;
    }, 1000);
});
</script>

<template>
    <div>
      <p v-if="loading" class="loading">Loading Pokemons...</p>
      <div v-else>
        <h1>Pokemon API</h1>
        <input v-model="search" type="text" class="search-bar" placeholder="Search some Pokemon..." />
        <div class="pokemon-container">
            <div v-for="(pokemon, index) in filteredPokemon" :key="pokemon.name" class="pokemon-card">
                <p>#{{ index + 1 }}</p>
                <img :src="pokemon.image" :alt="pokemon.name" />
                <p class="name">{{ pokemon.name }}</p>
                <div v-for="type in pokemon.types" :key="type" :class="['type', type]">
                    {{ type }}
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f8f8f8;
    text-align: center;
    color: rgb(19, 18, 18);

}

h1 {
    font-weight: 300;
    margin-top: 40px;
    color: #413f73;
}

.loading {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    font-weight: 100;
    color: #413f73;
}

.search-bar {
    margin: 20px auto;
    width: 40%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 300;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.search-bar:focus {
    border: 2px solid rgb(152, 164, 220);
    outline: none;
}

.pokemon-container {
    display: flex;
    margin: 20px 20px;
    flex-wrap: wrap;
    justify-self: center;
    justify-content: center;
    gap: 10px;
    width: 80%;
}

.pokemon-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 150px;
    text-align: center;
    transition: 0.2s;
}

.pokemon-card:hover {
    transform: translateY(-10px);
}

img {
    width: 130px;
    height: 130px;
}

.name {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
}

.type {
    display: inline-block;
    margin: 5px 5px;
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    color: rgb(19, 18, 18);
}

.grass {
    background-color: #78c850;
}

.poison {
    background-color: #a040a0;
}

.fire {
    background-color: #f08030;
}

.flying {
    background-color: #a890f0;
}

.water {
    background-color: lightblue;
}

.bug {
    background-color: lightgreen;
}

.normal {
    background-color: lightgray;
}
</style>
