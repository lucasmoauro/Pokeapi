import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PokeballSpinner } from "../components/Spinner/PokeballSpinner";
import { Pokemons, PokemonView, SearchPokemons, Team } from "./lazyRoutes";

export const AppRouter = () => {
	return (
		<Suspense fallback={<PokeballSpinner />}>
			<Routes>
				<Route path="/equipo" element={<Team />} />
				<Route path="/pokemons" element={<Pokemons />} />
				<Route path="/buscar" element={<SearchPokemons />} />
				<Route path="/pokemon/:pokemon" element={<PokemonView />} />
				<Route path="/" element={<Navigate to="/pokemons" />} />
			</Routes>
		</Suspense>
	);
};
