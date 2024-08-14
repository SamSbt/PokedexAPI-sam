import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import CreateScreen from "../pages/CreateScreen";
import TypesScreen from "../pages/TypesScreen";
import PokemonScreen from "../pages/PokemonScreen";

const Routing = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/create" element={<CreateScreen />} />
				<Route path="/types" element={<TypesScreen />} />
				<Route path="/pokemon/:id" element={<PokemonScreen />} />
			</Routes>
		</>
	);
};

export default Routing;
