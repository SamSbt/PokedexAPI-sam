import { Container, Image } from "react-bootstrap";

const Header = () => {
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
			</Container>
		</>
	);
};

export default Header;
