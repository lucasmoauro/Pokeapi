import { Box, Container, Grid, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { PokemonCard } from "../Card/PokemonCard";

const Pokemons = () => {
	const pokemonList = useSelector((state) => state.pokemonList);

	return (
		<Container maxWidth="xl" sx={{}}>
			<Grid container spacing={2}>
				{pokemonList.map((pokemon, index) => {
					return (
						<Grid item xs={3} key={index}>
							<PokemonCard pokemon={pokemon} />
						</Grid>
					);
				})}
			</Grid>
			<Box
				sx={{
					marginY: "2rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Pagination count={10} color="primary" />
			</Box>
		</Container>
	);
};

export default Pokemons;