import {
	Avatar,
	List,
	Paper,
	ListItem,
	ListItemText,
	LinearProgress,
	Typography,
	Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const pokemon = {
	name: "bulbasaur",
	official: {
		front_default:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	stats: [
		{
			base_stat: 45,
			stat: {
				name: "hp",
				url: "https://pokeapi.co/api/v2/stat/1/",
			},
		},
		{
			base_stat: 49,
			stat: {
				name: "attack",
				url: "https://pokeapi.co/api/v2/stat/2/",
			},
		},
		{
			base_stat: 49,
			stat: {
				name: "defense",
				url: "https://pokeapi.co/api/v2/stat/3/",
			},
		},
		{
			base_stat: 65,
			stat: {
				name: "special-attack",
				url: "https://pokeapi.co/api/v2/stat/4/",
			},
		},
		{
			base_stat: 65,
			stat: {
				name: "special-defense",
				url: "https://pokeapi.co/api/v2/stat/5/",
			},
		},
		{
			base_stat: 45,
			stat: {
				name: "speed",
				url: "https://pokeapi.co/api/v2/stat/6/",
			},
		},
	],
};

export const PokemonCard = () => {
	const esta = true;
	return (
		<Paper elevation={3}>
			<Box
				variant="card"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContents: "center",
				}}
			>
				<Avatar
					src={pokemon.official.front_default}
					sx={{ width: 150, height: 150, margin: "auto" }}
				/>
				<Typography variant="h5" component="h1">
					{pokemon.name}
				</Typography>
			</Box>
			<Box
				sx={{
					height: "40%",
					width: "100%",
				}}
			>
				<List>
					{pokemon.stats.map((poke, index) => {
						return (
							<ListItem>
								<ListItemText
									primary={poke.stat.name}
									secondary={
										<>
											<LinearProgress
												variant="determinate"
												value={poke.base_stat}
												sx={{
													marginBottom: ".5rem",
													marginTop: ".25rem",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													justifyContent: "flex-end",
													width: "100%",
												}}
											>
												<Typography variant="span" component="span">
													{poke.base_stat}/100
												</Typography>
											</Box>
										</>
									}
								/>
							</ListItem>
						);
					})}
				</List>
			</Box>
			<Box
				sx={{
					paddingBottom: "1rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{esta ? (
					<Button variant="outlined">Remove</Button>
				) : (
					<Button variant="contained">Add</Button>
				)}
			</Box>
		</Paper>
	);
};
