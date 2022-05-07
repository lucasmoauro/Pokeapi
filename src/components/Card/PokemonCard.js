import { Avatar, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { PokemonStats } from "./PokemonStats";
import { Link, useLocation } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
	const location = useLocation();

	console.log(location);
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
			<Box
				variant="card"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContents: "center",
					paddingTop: "1rem",
				}}
			>
				<Avatar
					src={
						pokemon.sprites?.other["official-artwork"].front_default ||
						`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
							pokemon.url?.split("/")[6]
						}.png`
					}
					sx={{ width: 150, height: 150, margin: "auto" }}
				/>
				<Typography variant="h5" component="h1">
					{"" || pokemon.name}
				</Typography>
			</Box>
			{location.pathname === "/buscar" ||
			location.pathname === "/pokemons" ? null : (
				<Box
					sx={{
						height: "auto",
						width: "100%",
					}}
				>
					<PokemonStats stats={pokemon.stats} />
				</Box>
			)}
			<Box
				sx={{
					paddingBottom: "1rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "1rem"
				}}
			>
				{location.pathname === "/buscar" ||
				location.pathname === "/pokemons" ? (
					<Box
						sx={{
							display: "inherit",
							width: "80%",
							justifyContent: "space-around",
						}}
					>
						<Button variant="contained">Agregar</Button>
						<Link
							to={`/pokemon/${pokemon.name}`}
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
					<Button variant="outlined">Remove</Button>
				)}
			</Box>
		</Paper>
	);
};
