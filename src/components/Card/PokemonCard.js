import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import { HeaderCard } from "./components/HeaderCard";
import { BodyCard } from "./components/BodyCard";
import { FooterCard } from "./components/FooterCard";

export const PokemonCard = ({ pokemon }) => {
	const location = useLocation();

	return (
		<Paper
			elevation={6}
			sx={{
				marginTop: "2rem",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				borderRadius: "1rem",
			}}
		>
			<HeaderCard url={pokemon.url} id={pokemon.id} name={pokemon.name} />

			{location.pathname === "/buscar" ||
			location.pathname === "/pokemons" ? null : (
				<BodyCard stats={pokemon.stats} />
			)}
			<FooterCard name={pokemon.name} pokemon={pokemon} />
		</Paper>
	);
};
