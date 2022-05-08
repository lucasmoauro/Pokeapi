import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice";
import pokemonListReducer from "./slices/pokemonListSlice";
import pokemonTeamReducer from "./slices/pokemonTeamSlice";

export const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
		pokemonList: pokemonListReducer,
		pokemonTeam: pokemonTeamReducer,
	},
});
