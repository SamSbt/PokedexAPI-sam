import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";

import NavbarTop from "../components/navbar/navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Routing from "./Routes";

function App() {
	return (
		<>
			<Container fluid className="g-0">
				<div className="wrapper">
					<NavbarTop />
					<Header />
					<main>
						<Routing />
					</main>
					<Footer />
				</div>
			</Container>
		</>
	);
}

export default App;
