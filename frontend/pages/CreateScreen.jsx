import { Container, Form, Button, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const CreateScreen = () => {
	const [formData, setFormData] = useState({
		name: "",
		sound: "",
		description: "",
		height: "",
		weight: "",
		types: [],
	});
	const [allTypes, setAllTypes] = useState([]);

useEffect(() => {
	const fetchData = async () => {
		try {
			const response = await fetch("http://pokedexapi-sam.loc/types");
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			setAllTypes(data);
		} catch (error) {
			console.error("Error fetching types:", error);
		}
	};

	fetchData();
}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSelectChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			types: {
				...formData.types,
				[name]: value,
			},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
	};

	return (
		<>
			<Container className="d-flex justify-content-center">
				<Row className="createFormStyle rounded-2 bg-dark my-3 p-3">
					<Form
						className="mx-auto"
						method=""
						onSubmit={handleSubmit}
						noValidate
					>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Importer une photo :</Form.Label>
							<Form.Control type="file" />
						</Form.Group>

						<Form.Group controlId="formName">
							<Form.Label>Nom :</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Entrez le nom du Pokémon"
								className="input-width"
							/>
						</Form.Group>

						<Form.Group className="mt-3" controlId="formSound">
							<Form.Label>Cri :</Form.Label>
							<Form.Control
								type="text"
								name="sound"
								value={formData.sound}
								onChange={handleChange}
								placeholder="Entrez le cri du Pokémon"
								className="input-width"
							/>
						</Form.Group>

						<Form.Group as={Row} controlId="formTypes">
							<Form.Label className="mt-4">
								Type(s) du Pokémon (1 ou 2 maximum) :
							</Form.Label>
							<Row>
								<Col md={6}>
									<Form.Group controlId="formType1">
										<Form.Label>Type 1 :</Form.Label>
										<Form.Control
											as="select"
											name="type1"
											value={formData.types.type1 || ""}
											onChange={handleSelectChange}
										>
											<option value="">Sélectionnez le type</option>
											{allTypes.map((type) => (
												<option key={type.id} value={type.id}>
													{type.name}
												</option>
											))}
										</Form.Control>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group controlId="formType2">
										<Form.Label>Type 2 :</Form.Label>
										<Form.Control
											as="select"
											name="type2"
											value={formData.types.type2 || ""}
											onChange={handleSelectChange}
										>
											<option value="">Sélectionnez le type</option>
											{allTypes.map((type) => (
												<option key={type.id} value={type.id}>
													{type.name}
												</option>
											))}
										</Form.Control>
									</Form.Group>
								</Col>
							</Row>
						</Form.Group>

						<Form.Group className="mt-3" controlId="formDescription">
							<Form.Label>Description :</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="description"
								value={formData.description}
								onChange={handleChange}
								placeholder="Entrez la description du Pokémon"
								className="input-width"
							/>
						</Form.Group>

						<Form.Group className="mt-3" controlId="formHeight">
							<Form.Label>Taille :</Form.Label>
							<Form.Control
								type="number"
								name="height"
								value={formData.height}
								onChange={handleChange}
								placeholder="Entrez la taille du Pokémon (ex. : 10.2)"
								className="input-width"
							/>
						</Form.Group>

						<Form.Group className="mt-3" controlId="formWeight">
							<Form.Label column>Poids :</Form.Label>
							<Form.Control
								type="number"
								name="weight"
								value={formData.weight}
								onChange={handleChange}
								placeholder="Entrez le poids du Pokémon (ex. : 51.6)"
								className="input-width"
							/>
						</Form.Group>

						<div className="text-center">
							<Button
								className="mt-4 mx-2 btn btn-outline-light bg-dark"
								type="submit"
							>
								Soumettre
							</Button>
							<Button
								className="mt-4 mx-2 btn btn-outline-light bg-dark"
								type="reset"
							>
								Réinitialiser
							</Button>
						</div>
					</Form>
				</Row>
			</Container>
		</>
	);
};

export default CreateScreen;
