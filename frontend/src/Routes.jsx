import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage />}/>
        {/* <Route path="/search" element={<SearchScreen />} />
        <Route path="/cookbook" element={<CookbookScreen />} />
        <Route path="/planner" element={<MenusScreen />} />
        <Route path="/groceries" element={<GroceriesScreen />} /> */}
    </Routes>
    </>
    );
};

export default Routing;