import { Button, Grid, InputAdornment, Paper, TextField } from "@mui/material";
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
		<Grid container>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				sx={{
					margin: "auto",
				}}
			>
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
							width: "100%",
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
										<Button variant="text" type="submit">
											<SearchIcon />
											Buscar
										</Button>
									</InputAdornment>
								),
							}}
						/>
					</Paper>
				</form>
			</Grid>
		</Grid>
	);
};
