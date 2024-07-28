import { Container, Image, Row, Col } from "react-bootstrap";
import Cards from "../components/cards/cards";
import { useEffect, useState } from "react";

const Homepage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "http://pokedex-api.loc/pokemon";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				// console.log("API response:", result);
				const lastCreatedPokemons = result
					.sort((a, b) => {
						return new Date(b.created_at) - new Date(a.created_at);
					})
					.slice(0, 12);
				// console.log(lastCreatedPokemons);
				setData(lastCreatedPokemons || []);
			} catch (error) {
				console.log("Fetch error:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const cardDescription = data.map((pokemon) => (
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
				types={pokemon.types || []}
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
			<Container fluid className="px-5">
				<div className="mt-5 d-flex flex-column justify-content-center align-items-center w-100">
					<Image
						alt="Image du pokedex"
						src="/src/assets/img/pokedexlogo.png"
						width="100"
						className="mb-2"
					/>
					<h1 className="mt-3 text-center">Attrapez les touuuuus</h1>
				</div>

				{loading && (
					<p className="col-12 text-center mt-5">Chargement des données...</p>
				)}
				{data.length > 0 ? (
					<Row className="mt-5 justify-content-center">{cardDescription}</Row>
				) : (
					!loading && (
						<p className="col-12 text-center mt-5">Aucun Pokémon trouvé.</p>
					)
				)}
			</Container>
		</>
	);
};

export default Homepage;
