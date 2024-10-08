import { Button, Col, Container, Row } from "react-bootstrap";
import Contact from "../contact/contact";
import { useState } from "react";

function Footer() {
  const [showContact, setShowContact] = useState(false);

	const handleShowContact = () => setShowContact(true);
	const handleCloseContact = () => setShowContact(false);
  
	return (
		<>
			<footer className="bg-dark mt-4">
				<Container fluid className="px-5">
					<Row>
						<Col md={3}></Col>
						<Col>
							<Row className="justify-content-center">
								<Col md={6} className="text-center">
									<ul className="list-inline mb-0 mt-2">
										<li className="list-inline-item">
											<a
												href="https://www.facebook.com/PokemonOfficielFR/?brand_redir=230809307041021&locale=fr_FR"
												className="text-light"
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="bi bi-facebook"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a
												href="https://x.com/pokemonfr?lang=fr"
												className="text-light"
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="bi bi-twitter-x"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a
												href="https://www.instagram.com/pokemon.fra/"
												className="text-light"
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="bi bi-instagram"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a
												href="https://www.linkedin.com/company/pokemon/"
												className="text-light"
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="bi bi-linkedin"></i>
											</a>
										</li>
									</ul>
								</Col>
							</Row>
							<Row className="mt-2">
								<Col className="text-center mb-1">
									<p className="mb-0">
										&copy; 2024 DevFreak. Tous droits reservés.
									</p>
								</Col>
							</Row>
						</Col>
						<Col md={3} className="d-flex justify-content-end">
							<Button
								className="my-3 p-2 btn btn-outline-light bg-dark"
								onClick={handleShowContact}
							>
								Contact
							</Button>
						</Col>
					</Row>
				</Container>
			</footer>
			<Contact show={showContact} handleClose={handleCloseContact} />
		</>
	);
}

export default Footer;