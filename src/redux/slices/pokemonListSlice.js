import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonListAsync = createAsyncThunk(
	"pokemon/getPokemonListAsync",
	async (page) => {
		if (page === 1) {
			const pokemonList = await axios.get(`${process.env.REACT_APP_POKEAPI}`);

			if (pokemonList.status === 200) {
				return pokemonList.data.results;
			}
		} else if (page === 2) {
			const pokemonList = await axios.get(
				`${process.env.REACT_APP_POKEAPI}?offset=20&limit=20`
			);
			if (pokemonList.status === 200) {
				return pokemonList.data.results;
			}
		} else {
			const pokemonList = await axios.get(
				`${process.env.REACT_APP_POKEAPI}?offset=${page * 20}&limit=20`
			);
			if (pokemonList.status === 200) {
				return pokemonList.data.results;
			}
		}
	}
);

export const pokemonListSlice = createSlice({
	name: "pokemonList",
	initialState: [],
	extraReducers: {
		[getPokemonListAsync.fulfilled]: (state, action) => {
			state.splice(0, state.length, ...action.payload);
		},
	},
});

export default pokemonListSlice.reducer;
