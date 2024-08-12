import { Col, Container, Row } from "react-bootstrap";
import Tag from "../components/tag/tag";
import Cards from "../components/cards/cards";

import { useEffect, useState } from "react";

const TypesScreen = () => {
	const [types, setTypes] = useState([]);
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState(null); // n'affiche pas au refresh le message "pkmn non trouvé"
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
		const fetchTypes = async () => {
			try {
				const url = "http://pokedexapi-sam.loc/types";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
        // console.log(result);
				setTypes(result || []);
			} catch (error) {
				console.log("Fetch error:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchTypes();
	}, []);

const fetchPokemonsByType = async (typeId) => {
	// console.log(`Fetching pokemons for typeId: ${typeId}`);
	try {
    setLoading(true);
		const url = `http://pokedexapi-sam.loc/types/${typeId}`;
		// console.log(`URL: ${url}`);
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Erreur de réseau");
		}
		const result = await response.json();
		// console.log("Fetched result:", result);
		setPokemons(result || []);
	} catch (error) {
		console.log("Fetch error:", error);
	} finally {
		setLoading(false);
	}
};

	const handleTypeClick = (typeId) => {
    // console.log(`Type clicked: ${typeId}`);
    setActiveId(typeId); // voir le btn actif
    setSelectedType(typeId); // n'affiche pas au refresh le message "pkmn non trouvé"
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
				types={pokemon.types ? pokemon.types.split(',') : []}
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
		<>
			<Container>
				<Row className="m-5 g-3">{tagButton}</Row>
				{loading && (
					<p className="col-12 text-center mt-5">Chargement des données...</p>
				)}
				{!loading && cardDescription.length > 0 ? (
					<Row className="mt-5 justify-content-center">{cardDescription}</Row>
				) : (
					!loading && selectedType && (
						<p className="col-12 text-center mt-5">
							Aucun Pokémon trouvé pour ce type.
						</p>
					)
				)}
			</Container>
		</>
	);
};

export default TypesScreen;
