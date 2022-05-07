import { Avatar, Typography, Box } from "@mui/material";

export const HeaderCard = ({ url, name, id }) => {
	return (
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
					id
						? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
						: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
								url?.split("/")[6]
						  }.png`
				}
				sx={{ width: 150, height: 150, margin: "auto" }}
			/>
			<Typography variant="h5" component="h1">
				{"" || name}
			</Typography>
		</Box>
	);
};
