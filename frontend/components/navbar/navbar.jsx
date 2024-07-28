import { Button, Container, Form, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


import "./navbar.scss";
import { useState } from "react";



function NavbarTop() {
	const [activeLink, setActiveLink] = useState("/");

const handleNavLinkClick = (e) => {
	e.preventDefault();
	console.log("href=" + e.target.href);
	const url = new URL(e.target.href);
	console.log("path=" + url.pathname);
	setActiveLink(url.pathname);
}

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
								onClick={handleNavLinkClick}
							>
								Accueil
							</Nav.Link>
							<Nav.Link
								className={"me-2" + (activeLink == "/create" ? " active" : "")}
								as={Link}
								to="/create"
								onClick={handleNavLinkClick}
							>
								Création
							</Nav.Link>
							<Nav.Link
								className={"me-2" + (activeLink == "/types" ? " active" : "")}
								as={Link}
								to="/types"
								onClick={handleNavLinkClick}
							>
								Types
							</Nav.Link>
							{/* <NavDropdown title="Types" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/1.1">Combat</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.2">Dragon</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.3">Eau</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.4">Electrik</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.5">Feu</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.6">Glace</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.7">Insecte</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.8">Normal</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.9">Plante</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.10">Poison</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.11">Psy</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.12">Roche</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.13">Sol</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.14">Spectre</NavDropdown.Item>
								<NavDropdown.Item href="#action/1.15">Vol</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>

						<Form className="d-flex formSearch" role="search" id="searchForm">
							<input
								className="form-control me-2"
								type="search"
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
