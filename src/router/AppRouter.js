import { Navigate, Route, Routes } from "react-router-dom";
import { Pokemons, PokemonView, SearchPokemons, Team } from "../components";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/equipo" element={<Team />} />
			<Route path="/pokemons" element={<Pokemons />} />
			<Route path="/buscar" element={<SearchPokemons />} />
			<Route path="/pokemon/:pokemon" element={<PokemonView />} />
			<Route path="/" element={<Navigate to="/equipo" />} />
		</Routes>
	);
};
