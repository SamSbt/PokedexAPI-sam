import { Col, Container, Row } from "react-bootstrap";
import Tag from "../components/tag/tag";
import { useEffect, useState } from "react";
import Cards from "../components/cards/cards";

const TypesScreen = () => {
	const [types, setTypes] = useState([]); // initialisation avec un tableau vide
	const [pokemons, setPokemons] = useState([]);
	const [loadingPokemons, setLoadingPokemons] = useState(false); // chargement des Pokémon only, pas des tag
	const [selectedType, setSelectedType] = useState(null); // ne pas afficher "Pokémon non trouvé" au refresh
	const [activeId, setActiveId] = useState(null); // border quand btn actif

	useEffect(() => {
		const fetchTypes = async () => {
			try {
				const url = "http://pokedexapi-sam.loc/types";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				setTypes(result || []); 
			} catch (error) {
				console.log("Fetch error:", error);
			}
		};

		fetchTypes();
	}, []);

	const fetchPokemonsByType = async (typeId) => {
		try {
			setLoadingPokemons(true);
			const url = `http://pokedexapi-sam.loc/types/${typeId}`;
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Erreur de réseau");
			}
			const result = await response.json();
			setPokemons(result || []);
		} catch (error) {
			console.log("Fetch error:", error);
		} finally {
			setLoadingPokemons(false);
		}
	};

	const handleTypeClick = (typeId) => {
		setActiveId(typeId); // voir le bouton actif
		setSelectedType(typeId); // ne pas afficher "Pokémon non trouvé" au refresh
		fetchPokemonsByType(typeId);
	};

	const tagButton = types.map((type) => (
		<Col key={type.Id_types}>
			<Tag
				types={type}
				name={type.name}
				onClick={() => handleTypeClick(type.Id_types)}
				isActive={type.Id_types === activeId}
			/>
		</Col>
	));

	const cardDescription = pokemons.map((pokemon) => (
		<Col
			xs={12}
			sm={6}
			md={4}
			lg={3}
			xl={3}
			xxl={2}
			key={pokemon.Id_pokemon}
			className="d-flex justify-content-evenly"
		>
			<Cards
				pokemon={pokemon}
				to={`/pokemon/${pokemon.Id_pokemon}`}
				name={pokemon.name}
				id={pokemon.Id_pokemon}
				imageSrc={pokemon.img_src}
				types={pokemon.types ? pokemon.types.split(",") : []}
				showSound={false}
				showHeight={false}
				showWeight={false}
				showSummary={false}
				showStatus={false}
				showCreatedAt={false}
				showUpdatedAt={false}
			/>
		</Col>
	));

	return (
		<Container>
			<Row className="mx-5 my-3 g-3">{tagButton}</Row>
			{loadingPokemons && (
				<p className="col-12 text-center mt-5">Chargement des Pokémon...</p>
			)}
			{!loadingPokemons && cardDescription.length > 0 ? (
				<Row className="mt-5 justify-content-center">{cardDescription}</Row>
			) : (
				!loadingPokemons &&
				selectedType && (
					<p className="col-12 text-center mt-5">
						Aucun Pokémon trouvé pour ce type.
					</p>
				)
			)}
		</Container>
	);
};

export default TypesScreen;
