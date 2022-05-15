import { Box, Container, Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../redux/slices/pokemonPaginationSlice";
import { PokemonCard } from "../Card/PokemonCard";

const Pokemons = () => {
	const pokemonList = useSelector((state) => state.pokemonList);
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(pagination(page));
	}, [page]); //eslint-disable-line

	return (
		<Container maxWidth="xl">
			<Grid container spacing={2}>
				{pokemonList.map((pokemon, index) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<PokemonCard pokemon={pokemon} />
						</Grid>
					);
				})}
			</Grid>
			<Box
				sx={{
					marginY: "2rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Pagination
					count={56}
					color="primary"
					defaultPage={1}
					defaultValue={1}
					onChange={(e, page) => setPage(page)}
				/>
			</Box>
		</Container>
	);
};

export default Pokemons;
