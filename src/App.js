import React from "react";
import { Navbar } from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

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
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Navbar />
			</ThemeProvider>
		</>
	);
}

export default App;
