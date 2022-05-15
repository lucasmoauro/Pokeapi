import { createSlice } from "@reduxjs/toolkit";

export const pokemonTeamSlice = createSlice({
	name: "pokemonTeam",
	initialState: [],
	reducers: {
		addPokemon: (state, action) => {
			const pokemonTeam = [];
			pokemonTeam.push(JSON.stringify(action.payload));

			state.push(action.payload);
			localStorage.setItem("pokemonTeam", JSON.stringify(state));
		},
		deletePokemon: (state, action) => {
			localStorage.setItem(
				"pokemonTeam",
				JSON.stringify(
					state.filter((pokemon) => pokemon.name !== action.payload)
				)
			);
			return state.filter((pokemon) => pokemon.name !== action.payload);
		},
		savedPokemon: (state, { payload }) => {
			state.push(...payload);
		},
	},
});

export const { addPokemon, deletePokemon, savedPokemon } =
	pokemonTeamSlice.actions;

export default pokemonTeamSlice.reducer;
