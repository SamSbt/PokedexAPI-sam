import { Container, Row } from "react-bootstrap";
import Header from "../components/header/header";
import Tag from "../components/tag/tag";

// import { useState } from "react";

const TypesScreen = () => {
	// const [data, setData] = useState([]);

	// const nameBadges = data.map((types) =>

	// );

	return (
		<>
			<Container fluid className="px-5">
				<Header />
				<Row className="mt-5 text-center">
					<h4>Ceci est ma page Types.</h4>
				</Row>
				<Row className="">
					<Tag />
				</Row>
			</Container>
		</>
	);
};

export default TypesScreen;
