import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../contact/contact";
import { useState } from "react";


function Footer() {
  const [showContact, setShowContact] = useState(false);

	const handleShowContact = () => setShowContact(true);
	const handleCloseContact = () => setShowContact(false);
  
	return (
		<>
			<footer className="bg-dark">
				<Container fluid className="px-5">
					<Row>
						<Col md={3}></Col>
						<Col>
							<Row className="justify-content-center">
								<Col md={6} className="text-center">
									<ul className="list-inline mb-0 mt-2">
										<li className="list-inline-item">
											<Link href="#" className="text-light">
												<i className="bi bi-facebook"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link href="#" className="text-light">
												<i className="bi bi-twitter"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link href="#" className="text-light">
												<i className="bi bi-instagram"></i>
											</Link>
										</li>
										<li className="list-inline-item">
											<Link href="#" className="text-light">
												<i className="bi bi-linkedin"></i>
											</Link>
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
							<Link
								as={Button}
								className="nav-link my-3 p-2 border border-1 border-light rounded-2"
								onClick={handleShowContact}
							>
								Contact
							</Link>
						</Col>
					</Row>
				</Container>
			</footer>
			<Contact show={showContact} handleClose={handleCloseContact} />
		</>
	);
}

export default Footer;
