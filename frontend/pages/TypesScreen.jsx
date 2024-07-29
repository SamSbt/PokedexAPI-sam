import { Container, Row } from "react-bootstrap";
import Header from "../components/header/header";
import Tag from "../components/tag/tag";
import { useEffect, useState } from "react";

const TypesScreen = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "http://pokedexapi-sam.loc/types";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				// console.log("API response:", result);
				// const lastCreatedPokemons = result
				// 	.sort((a, b) => {
				// 		return new Date(b.created_at) - new Date(a.created_at);
				// 	})
				// 	.slice(0, 12);
				// console.log(lastCreatedPokemons);
				// setData(lastCreatedPokemons || []);
			} catch (error) {
				console.log("Fetch error:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const tagbutton = data.map((types) => (
		<Col
			xs={12}
			sm={6}
			md={4}
			lg={3}
			xl={3}
			xxl={2}
			key={types.Id_types}
			className="d-flex justify-content-evenly"
		>
			<Tag types={types} name={types.Id_types} />
		</Col>
	));

	return (
		<>
			<Container fluid className="px-5">
				<Header />

				{loading && (
					<p className="col-12 text-center mt-5">Chargement des données...</p>
				)}
				{data.length > 0 ? (
					<Row className="">{tagbutton}</Row>
				) : (
					!loading && (
						<p className="col-12 text-center mt-5">Aucun tag trouvé.</p>
					)
				)}
			</Container>
		</>
	);
};

export default TypesScreen;
