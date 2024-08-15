import {
	Button,
	Container,
	Form,
	Image,
	Nav,
	Navbar,
	Dropdown,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./navbar.scss";

function NavbarTop() {
	const location = useLocation();
  const navigate = useNavigate();
	const [activeLink, setActiveLink] = useState(location.pathname);
	const [searchTerm, setSearchTerm] = useState(""); // État pour l'input de recherche
	const [pokemonList, setPokemonList] = useState([]); // État pour la liste des Pokémon
	const [filteredPokemon, setFilteredPokemon] = useState([]); // État pour les Pokémon filtrés

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				const url = "http://pokedexapi-sam.loc/pokemon";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				setPokemonList(result || []); // Stocke la liste des Pokémon
			} catch (error) {
				console.log("Fetch error:", error);
			}
		};
		fetchPokemon();
	}, []);

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm); // Met à jour l'état de la recherche

		// Filtre les Pokémon en fonction du texte de recherche
		const filteredItems = pokemonList.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredPokemon(filteredItems); // Met à jour l'état des Pokémon filtrés
	};

const handleSearch = (e) => {
	e.preventDefault(); // Empêche la soumission du formulaire
	navigate("/", { state: { filteredPokemon } }); // Navigue vers la page d'accueil avec les résultats filtrés
};

	// Vérifie si le message "Aucun Pokémon trouvé" doit être affiché
	const noResults = searchTerm.length > 0 && filteredPokemon.length === 0;

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

						<Form
							className="d-flex form-search position-relative"
							role="search"
							id="searchForm"
						>
							<input
								className="form-control me-2"
								type="search"
								name="inputsearch"
								placeholder="Rechercher un pokémon"
								aria-label="Search"
								value={searchTerm}
								onChange={handleInputChange}
							/>
							<Dropdown.Menu show className="position-absolute w-100 border-0">
								{filteredPokemon.length > 0 ? (
									filteredPokemon.map((pokemon) => (
										<Dropdown.Item
											key={pokemon.Id_pokemon}
											href={`/pokemon/${pokemon.Id_pokemon}`}
										>
											{pokemon.name}
										</Dropdown.Item>
									))
								) : noResults ? (
									<Dropdown.Item disabled>Aucun Pokémon trouvé</Dropdown.Item>
								) : null}
							</Dropdown.Menu>
							<Button
								className="btn btn-outline-light bg-dark"
								type="button"
								onClick={handleSearch}
							>
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
