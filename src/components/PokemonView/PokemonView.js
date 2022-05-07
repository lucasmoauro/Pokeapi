import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonAsync } from "../../redux/slices/pokemonSlice";
import { PokemonCard } from "../Card/PokemonCard";

const PokemonView = () => {
	const { pokemon } = useParams();
	const dispatch = useDispatch();

	const pokemonName = useSelector((state) => state.pokemon);

	useEffect(() => {
		dispatch(getPokemonAsync(pokemon));
	}, []); //eslint-disable-line

	return (
		<Container maxWidth="xl" sx={{}}>
			<Grid container>
				<Grid
					item
					xs={4}
					sx={{
						marginX: "auto",
					}}
				>
					<PokemonCard pokemon={pokemonName} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default PokemonView;