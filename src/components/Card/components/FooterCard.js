import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	addPokemon,
	deletePokemon,
} from "../../../redux/slices/pokemonTeamSlice";
import { toastAlert } from "../../ToastAlert/ToastAlert";

export const FooterCard = ({ name, pokemon }) => {
	const isInPokemonTeam = useSelector((state) => state.pokemonTeam);

	const params = useParams();

	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(deletePokemon(name));
		toastAlert("Pokemon Eliminado!", "error");
	};

	const handleAdd = () => {
		if (isInPokemonTeam.length < 6) {
			dispatch(addPokemon(pokemon));
			toastAlert("Pokemon Agregado!", "success");
		} else {
			toastAlert("El equipo esta completo!", "error");
			return;
		}
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
			<Box
				sx={{
					display: "inherit",
					width: "80%",
					justifyContent: "space-around",
				}}
			>
				{isInPokemonTeam.some((pokemon) => pokemon.name === name) ? (
					<Button variant="outlined" onClick={handleRemove()}>
						Eliminar
					</Button>
				) : (
					<Button variant="contained" onClick={handleAdd()}>
						Agregar
					</Button>
				)}

				{params.pokemon === undefined ? (
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
							color="secondary"
						>
							Mas...
						</Button>
					</Link>
				) : null}
			</Box>
		</Box>
	);
};
