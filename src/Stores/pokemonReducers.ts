interface PokemonType {
  payload: object;
  type: string;
}

const INITIAL_STATE = {
  pokemon: null,
  catchedPokemons: [],
};

export default function tagsListReducers(
  state = INITIAL_STATE,
  action: PokemonType
) {
  switch (action.type) {
    case "POKEMON_DATA_GET_WILD_POKEMON":
      return { ...state, pokemon: action.payload };
    case "POKEMON_DATA_GET_CATCHED_POKEMON":
      return { ...state, pokemon: action.payload };
    case "POKEMON_UPDATE_POKEMON":
      sessionStorage.setItem("pokemons", JSON.stringify(state.catchedPokemons));
      return {
        ...state,
      };
    case "POKEMON_LIST_SET_POKEMON":
      sessionStorage.setItem(
        "pokemons",
        JSON.stringify([...state.catchedPokemons, action.payload])
      );
      return {
        ...state,
        catchedPokemons: [...state.catchedPokemons, action.payload],
      };
    case "POKEMON_LIST_GET_POKEMON":
      return {
        ...state,
        catchedPokemons: action.payload,
      };
    case "POKEMON_LIST_REMOVE_POKEMON":
      const pokemonsFiltered = state.catchedPokemons.filter(
        (i) => i !== action.payload
      );
      sessionStorage.setItem("pokemons", JSON.stringify(pokemonsFiltered));
      return {
        ...state,
        catchedPokemons: pokemonsFiltered,
      };
    case "POKEMON_DATA_CLEAR_POKEMON":
      return { ...state, pokemon: null };
    default:
      return state;
  }
}
