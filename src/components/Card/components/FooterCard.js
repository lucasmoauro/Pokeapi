import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const FooterCard = (pokemon) => {
	const location = useLocation();

	return (
		<Box
			sx={{
				paddingBottom: "1rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "1rem",
			}}
		>
			{location.pathname === "/buscar" || location.pathname === "/pokemons" ? (
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
	);
};
