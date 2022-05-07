import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonListAsync = createAsyncThunk(
	"pokemon/getPokemonListAsync",
	async () => {
		const pokemonList = await axios.get(process.env.REACT_APP_POKEAPI);

		if (pokemonList.status === 200) {
			return pokemonList.data.results;
		}
	}
);

export const pokemonListSlice = createSlice({
	name: "pokemonList",
	initialState: [],
	extraReducers: {
		[getPokemonListAsync.fulfilled]: (state, action) => {
			 state.push(...action.payload);
		},
	},
});

export default pokemonListSlice.reducer;
