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
	const page = useSelector((state) => state.pokemonPagination);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPokemonListAsync(page));
	}, [page]); //eslint-disable-line

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
