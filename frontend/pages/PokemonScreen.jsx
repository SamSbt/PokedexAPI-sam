import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../components/cards/cards";
import { useEffect, useState } from "react";

const PokemonScreen = () => {
	const { id } = useParams(); // pr récupérer l'id depuis l'url avec react router
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `http://pokedexapi-sam.loc/pokemon/${id}`;
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				// console.log("réponse API:", result);
				setData(result);
			} catch (error) {
				console.log("Fetch error:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

// fonctions des boutons
const handleEdit = () => {
	console.log("Vous voulez modifier la carte.");
};

const handleDelete = () => {
	console.log("Vous voulez supprimer la carte.");
};

	return (
		<>
			<Container fluid className="px-5">
				{loading ? (
					<p className="col-12 text-center mt-5">Chargement des données...</p>
				) : data ? (
					<Row className="mt-5 justify-content-center">
						<Col
							xs={12}
							sm={6}
							md={4}
							lg={3}
							xl={3}
							xxl={2}
							className="d-flex flex-column align-items-center w-100"
						>
							<Cards
								pokemon={data}
								size="large"
								name={data.name}
								id={data.Id_pokemon}
								imageSrc={data.img_src}
								types={data.types || []}
								sound={data.sound}
								height={data.height}
								weight={data.weight}
								summary={data.summary}
								showStatus={false}
								createdAt={data.created_at}
								updatedAt={data.updated_at}
							/>
							<Row>
								<Button
									className="m-2 btn btn-outline-light bg-dark"
									onClick={handleEdit}
								>
									Modifier
								</Button>
								<Button
									className="m-2 btn btn-outline-light bg-dark"
									onClick={handleDelete}
								>
									Supprimer
								</Button>
							</Row>
						</Col>
					</Row>
				) : (
					<p className="col-12 text-center mt-5">Aucune donnée trouvée.</p>
				)}
			</Container>
		</>
	);
};

export default PokemonScreen;
