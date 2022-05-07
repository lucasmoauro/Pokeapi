import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar/Navbar";
import { AppRouter } from "./router/AppRouter";
import { getPokemonListAsync } from "./redux/slices/pokemonListSlice";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
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
const lightTheme = createTheme({
	palette: {
		mode: "light",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				text: {
					color: "#000",
				},
			},
		},
	},
});

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPokemonListAsync());
	}, []); //eslint-disable-line

	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Navbar />
				<AppRouter />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
