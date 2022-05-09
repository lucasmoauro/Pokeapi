import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/ListAlt";
import DeleteIcon from "@mui/icons-material/Delete";

import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemon } from "../../redux/slices/pokemonTeamSlice";
import { toastAlert } from "../ToastAlert/ToastAlert";

export const Sidebar = () => {
	const pokemonTeam = useSelector((state) => state.pokemonTeam);
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setIsOpen({ ...isOpen, [anchor]: open });
	};

	const handleRemove = (pokemon) => {
		dispatch(deletePokemon(pokemon));
		toastAlert("Pokemon eliminado!", "error");
	};

	return (
		<Box>
			<Button
				onClick={toggleDrawer("right", true)}
				sx={{
					position: "fixed",
					right: "0",
					top: "50%",
					transform: "translate(6%, -50%)",
				}}
			>
				<Paper
					elevation={1}
					color="primary"
					sx={{
						padding: ".25rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ListIcon
						sx={{
							width: "2rem",
							height: "2rem",
						}}
					/>
				</Paper>
			</Button>

			<Drawer
				anchor={"right"}
				open={isOpen["right"]}
				onClose={toggleDrawer("right", false)}
			>
				<Box
					sx={{
						width: 250,
					}}
				>
					<Box
						sx={{
							marginY: "1rem",
						}}
					>
						<Typography
							variant="h4"
							component="h1"
							sx={{
								textAlign: "center",
							}}
						>
							Equipo
						</Typography>
					</Box>
					<Divider />
					<Box>
						<List>
							{pokemonTeam?.map((pokemon, index) => {
								return (
									<ListItem key={index}>
										<ListItemAvatar>
											<Avatar
												src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
													pokemon.url?.split("/")[6]
												}.png`}
												alt={pokemon.name}
											/>
										</ListItemAvatar>
										<ListItemText primary={pokemon.name} />

										<Button onClick={() => handleRemove(pokemon.name)}>
											<DeleteIcon />
										</Button>
									</ListItem>
								);
							})}
						</List>
					</Box>
				</Box>
			</Drawer>
		</Box>
	);
};
