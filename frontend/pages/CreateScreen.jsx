import { Container, Row } from "react-bootstrap";
import Header from "../components/header/header";

const CreateScreen = () => {
	return (
		<>
			<Container fluid className="px-5">
				<Header />
				<Row className="mt-5 text-center">
					<h4>Ceci est ma page Create.</h4>
				</Row>
			</Container>
		</>
	);
};

export default CreateScreen;
