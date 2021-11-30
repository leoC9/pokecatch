import { getRandomPokemon } from "../Services/pokémons";

export async function getWildPokemon() {
  const response = await getRandomPokemon();
  return {
    type: "POKEMON_DATA_GET_WILD_POKEMON",
    payload: response,
  };
}

export function getCatchedPokemon(pokemon: object) {
  return {
    type: "POKEMON_DATA_GET_CATCHED_POKEMON",
    payload: pokemon,
  };
}

export function setCatchedPokemon(pokemon: object) {
  return {
    type: "POKEMON_LIST_SET_POKEMON",
    payload: pokemon,
  };
}

export function removePokemon(pokemon: object) {
  clearPokemon();
  return {
    type: "POKEMON_LIST_REMOVE_POKEMON",
    payload: pokemon,
  };
}
export function updatePokemon(pokemon: string) {
  return {
    type: "POKEMON_UPDATE_POKEMON",
    payload: pokemon,
  };
}

export function getPokemons() {
  const pokemons = JSON.parse(sessionStorage.getItem("pokemons") || "[]");
  return {
    type: "POKEMON_LIST_GET_POKEMON",
    payload: pokemons,
  };
}

export function clearPokemon() {
  return {
    type: "POKEMON_DATA_CLEAR_POKEMON",
  };
}
