import { Col, Container, Row } from "react-bootstrap";
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
				setData(result || {});
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
			key={types.Id_types}
			className="d-flex justify-content-center align-items-center my-3"
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
					<Row className="m-4">{tagbutton}</Row>
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
