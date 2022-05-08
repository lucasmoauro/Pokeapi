import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { PokemonCard } from "../Card/PokemonCard";

const Team = () => {
	const pokemonTeam = useSelector((state) => state.pokemonTeam);

	return (
		<Container
			maxWidth="xl"
			sx={{
				marginTop: "1rem",
			}}
		>
			<Grid container spacing={2}>
				{pokemonTeam.map((pokemon, index) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={3} sx={{
							marginBottom: "1rem"
						}} key={index}>
							<PokemonCard pokemon={pokemon} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default Team;
