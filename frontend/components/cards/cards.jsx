import PropTypes from "prop-types";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./cards.scss";

function Cards(props) {
	const {
		pokemon,
		to,
		types = [],
		showSound = true,
		showSummary = true,
		showHeight = true,
		showWeight = true,
		showTypes = true,
		showStatus = true,
		showCreatedAt = true,
		showUpdatedAt = true,
	} = props;
	return (
		<>
			<Card
				as={Link}
				to={props.to}
				className="text-decoration-none mb-4 cardStyle bg-dark text-light"
				style={{ width: "15rem" }}
			>
				<div className="d-flex justify-content-center m-3">
					<Card.Img
						variant="top"
						src={pokemon.img_src || "/src/assets/img/dev-freak_logo.png"}
						alt={"Image du Pokemon " + pokemon.name}
					/>
				</div>
				<Card.Body>
					<Card.Title>Nom : {pokemon.name}</Card.Title>
					<Card.Subtitle className="mb-3 text-light poppins-light">
						Id: {pokemon.Id_pokemon}
					</Card.Subtitle>
					<hr />
					{showSound && <Card.Text>Cri : {pokemon.sound}</Card.Text>}
					{showSummary && (
						<Card.Text>Description : {pokemon.summary}</Card.Text>
					)}
					{showHeight && <Card.Text>Taille : {pokemon.height}</Card.Text>}
					{showWeight && <Card.Text>Poids : {pokemon.weight}</Card.Text>}
					{showTypes && (
						<Card.Text>Type(s) : {types.join(", ")}</Card.Text>
					)}
					{showStatus && (
						<Card.Text>{pokemon.is_deleted ? "Deleted" : "Active"}</Card.Text>
					)}
					{showCreatedAt && (
						<Card.Text>Création du {pokemon.created_at}</Card.Text>
					)}
					{showUpdatedAt && (
						<Card.Text>Mis à jour le {pokemon.updated_at}</Card.Text>
					)}
				</Card.Body>
			</Card>
		</>
	);
}

Cards.propTypes = {
	pokemon: PropTypes.shape({
		Id_pokemon: PropTypes.number.isRequired,
		name: PropTypes.string,
		sound: PropTypes.string,
		height: PropTypes.number.isRequired,
		weight: PropTypes.number,
		summary: PropTypes.string,
		img_src: PropTypes.string,
		is_deleted: PropTypes.bool,
		created_at: PropTypes.string,
		updated_at: PropTypes.string,
	}).isRequired,
	types: PropTypes.arrayOf(PropTypes.string), // Ajout de types ici pour valider la prop types
	showSound: PropTypes.bool,
	showSummary: PropTypes.bool,
	showHeight: PropTypes.bool,
	showWeight: PropTypes.bool,
	showTypes: PropTypes.bool,
	showStatus: PropTypes.bool,
	showCreatedAt: PropTypes.bool,
	showUpdatedAt: PropTypes.bool,
};

export default Cards;
