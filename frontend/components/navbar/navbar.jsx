import {
	Button,
	Container,
	Form,
	Image,
	Nav,
	Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./navbar.scss";

function NavbarTop() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState(location.pathname);

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	return (
		<>
			<Navbar expand="lg" bg="dark" variant="dark" data-bs-theme="dark">
				<Container fluid className="px-5">
					<Navbar.Brand
						className="d-flex align-items-center logoAnimation"
						as={Link}
						to="/"
					>
						<Image
							alt="Logo"
							src="/src/assets/img/dev-freak_logo.png"
							width="40"
							className="d-inline-block align-top"
						/>{" "}
						<span className="ms-2 special-elite-regular fs-2">DevFreak</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								className={"me-2" + (activeLink == "/" ? " active" : "")}
								as={Link}
								to="/"
								
							>
								Accueil
							</Nav.Link>
							<Nav.Link
								className={"me-2" + (activeLink == "/create" ? " active" : "")}
								as={Link}
								to="/create"
								
							>
								Création
							</Nav.Link>
							<Nav.Link
								className={"me-2" + (activeLink == "/types" ? " active" : "")}
								as={Link}
								to="/types"
								
							>
								Types
							</Nav.Link>
						</Nav>

						<Form className="d-flex form-search" role="search" id="searchForm">
							<input
								className="form-control me-2"
								type="search"
								name="inputsearch"
								placeholder="Rechercher un pokémon"
								aria-label="Search"
							/>
							<Button className="btn btn-outline-light bg-dark" type="submit">
								Rechercher
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarTop;
