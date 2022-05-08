import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { PokemonCard } from "../Card/PokemonCard";
import { Search } from "./Search";

const SearchPokemons = () => {
	const pokemon = useSelector((state) => state.pokemon);

	return (
		<Container maxWidth="xl">
			<Box
				sx={{
					marginTop: "1rem",
				}}
			>
				<Search />
			</Box>
			{Object.keys(pokemon).length === 0 ? null : (
				<Grid container>
					<Grid item xs={12} sm={6} md={3} sx={{
						margin: "auto"
					}}>
							<PokemonCard pokemon={pokemon} />
					</Grid>
				</Grid>
			)}
		</Container>
	);
};

export default SearchPokemons;
