import { Box, Container, Grid, Pagination } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonListAsync } from "../../redux/slices/pokemonListSlice";
import { PokemonCard } from "../Card/PokemonCard";

export const Pokemons = () => {
	const dispatch = useDispatch();
	const pokemonList = useSelector((state) => state.pokemonList);

	useEffect(() => {
		dispatch(getPokemonListAsync());
	}, []); //eslint-disable-line

	return (
		<Container
			maxWidth="xl"
			sx={{
			}}
		>
			<Grid container spacing={2}>
				{pokemonList.map((pokemon, index) => {
					return (
						<Grid item xs={3} key={index}>
							<PokemonCard pokemon={pokemon} />
						</Grid>
					);
				})}
			</Grid>
      <Box sx={{
        marginY: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Pagination count={10} color="primary" />
      </Box>
		</Container>
	);
};
