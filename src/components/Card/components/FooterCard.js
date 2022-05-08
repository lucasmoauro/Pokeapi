import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
	addPokemon,
	deletePokemon,
} from "../../../redux/slices/pokemonTeamSlice";

export const FooterCard = ({ name, pokemon }) => {
	const location = useLocation();

	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(deletePokemon(name));
	};

	const handleAdd = () => {
		dispatch(addPokemon(pokemon));
	};

	return (
		<Box
			sx={{
				paddingBottom: "1rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "1rem",
			}}
		>
			{location.pathname === "/buscar" || location.pathname === "/pokemons" ? (
				<Box
					sx={{
						display: "inherit",
						width: "80%",
						justifyContent: "space-around",
					}}
				>
					<Button variant="contained" onClick={handleAdd}>
						Agregar
					</Button>
					<Link
						to={`/pokemon/${name}`}
						style={{
							textDecoration: "none",
						}}
					>
						<Button
							variant="outlined"
							sx={{
								padding: "5px 25px",
							}}
							color="primary"
						>
							Mas...
						</Button>
					</Link>
				</Box>
			) : (
				<Button variant="outlined" onClick={handleRemove}>
					Remove
				</Button>
			)}
		</Box>
	);
};
