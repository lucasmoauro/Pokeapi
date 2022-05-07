import {
	LinearProgress,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";

export const PokemonStats = (pokemonStats) => {
	return (
		<List>
			{pokemonStats.stats.map((poke, index) => {
				return (
					<ListItem key={index}>
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

									<Typography
										variant="span"
										component="span"
										sx={{
											display: "flex",
											justifyContent: "flex-end",
											width: "100%",
										}}
									>
										{poke.base_stat}/100
									</Typography>
								</>
							}
						/>
					</ListItem>
				);
			})}
		</List>
	);
};
