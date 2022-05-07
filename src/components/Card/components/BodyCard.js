import { Box } from "@mui/material";
import React from "react";
import { PokemonStats } from "../PokemonStats";

export const BodyCard = ({ stats }) => {
	return (
		<Box
			sx={{
				height: "auto",
				width: "100%",
			}}
		>
			{stats && <PokemonStats stats={stats} />}
		</Box>
	);
};
