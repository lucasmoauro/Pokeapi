import { Container, Grid } from "@mui/material";
import { PokemonCard } from "../Card/PokemonCard";

export const Team = () => {
	return (
		<Container maxWidth="xl" sx={{
			marginTop: "1rem"
		}}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					{/* <PokemonCard /> */}
				</Grid>
				<Grid item xs={3}>
					{/* <PokemonCard /> */}
				</Grid>
				<Grid item xs={3}>
					{/* <PokemonCard /> */}
				</Grid>
				<Grid item xs={3}>
					{/* <PokemonCard /> */}
				</Grid>
			</Grid>
		</Container>
	);
};
