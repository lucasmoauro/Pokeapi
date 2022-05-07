import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { PokemonCard } from "../Card/PokemonCard";
import { Search } from "./Search";

export const SearchPokemons = () => {
	const pokemon = useSelector((state) => state.pokemon);


	return (
		<Container maxWidth="xl">
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "1rem",
				}}
			>
				<Search />
			</Box>
			{Object.keys(pokemon).length === 0 ? null : (
				<Box
					sx={{
						width: "25%",
						margin: "auto",
					}}
				>
					<PokemonCard pokemon={pokemon} />
				</Box>
			)}
		</Container>
	);
};
