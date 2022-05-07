import { lazy } from "react";

export const Team = lazy(() => import("../components/Team/Team"));
export const Pokemons = lazy(() => import("../components/Pokemons/Pokemons"));
export const SearchPokemons = lazy(() =>
	import("../components/Search/SearchPokemons")
);
export const PokemonView = lazy(() => import("../components/PokemonView/PokemonView"));
