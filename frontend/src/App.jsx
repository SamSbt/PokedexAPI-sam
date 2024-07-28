import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";

import NavbarTop from "../components/navbar/navbar";
import Routing from "./Routes";

import "./assets/styles/App.scss";
import Footer from "../components/footer/footer";

function App() {
	return (
		<>
			<Container fluid className="g-0">
				<div className="wrapper">
					<NavbarTop />
					{/* header si besoin */}
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
