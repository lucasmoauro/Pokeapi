import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar/Navbar";
import { AppRouter } from "./router/AppRouter";
import { getPokemonListAsync } from "./redux/slices/pokemonListSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import { savedPokemon } from "./redux/slices/pokemonTeamSlice";

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#84aff3",
		},
		secondary: {
			main: "#e290f4",
		},
		mode: "dark",
		background: {
			default: "#201f24",
			paper: "#1c2124",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				text: {
					color: "#fff",
				},
			},
		},
	},
});

function App() {
	const page = useSelector((state) => state.pokemonPagination);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemonListAsync(page));
	}, [page]); //eslint-disable-line

	useEffect(() => {
		if (!localStorage.getItem("pokemonTeam")) {
			return;
		} else {
			dispatch(savedPokemon(JSON.parse(localStorage.getItem("pokemonTeam"))));
		}
	}, []); //eslint-disable-line

	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Navbar />
				<AppRouter />
				<Sidebar />
				<Toaster />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
