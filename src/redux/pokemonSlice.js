import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonAsync = createAsyncThunk(
	"pokemon/getPokemonAsync",
	async (query) => {
		const pokemon = await axios.get(
			`${process.env.REACT_APP_POKEAPI}/${query}`
		);

		if (pokemon.status === 200) {
			return pokemon.data;
		}
	}
);

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {},
	extraReducers: {
		[getPokemonAsync.fulfilled]: (state, action) => {
			return action.payload;
		},
	},
});

export default pokemonSlice.reducer;
