import { InputAdornment, Paper, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonAsync } from "../../redux/slices/pokemonSlice";

export const Search = () => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input !== "") {
			dispatch(getPokemonAsync(input));
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}
		>
			<Paper
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "40%",
				}}
				elevation={5}
			>
				<TextField
					value={input}
					onChange={(e) => setInput(e.target.value)}
					label="Busque su pokemon por nombre o numero"
					variant="outlined"
					fullWidth
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Paper>
		</form>
	);
};
