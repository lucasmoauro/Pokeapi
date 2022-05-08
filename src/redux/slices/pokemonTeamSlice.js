import { createSlice } from "@reduxjs/toolkit";

export const pokemonTeamSlice = createSlice({
	name: "pokemonTeam",
	initialState: [],
	reducers: {
		addPokemon: (state, action) => {
			state.push(action.payload);
		},
		deletePokemon: (state, action) => {
			return state.filter((pokemon) => pokemon.name !== action.payload);
		},
	},
});

export const { addPokemon, deletePokemon } = pokemonTeamSlice.actions;

export default pokemonTeamSlice.reducer;
