
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import PokemonPage from "./pages/PokemonPage";
import MovesPage from "./pages/MovesPage";
import ItemsPage from "./pages/ItemsPage";
import TypesPage from "./pages/TypesPage";

function App() {
  

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      {/* HEADER */}
      <div className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Pokemon Dashboard</h1>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        <Sidebar />

        <Routes>
          <Route path="/" element={<PokemonPage />} />
          <Route path="/moves" element={<MovesPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/types" element={<TypesPage />} />
        </Routes>
      </div>

      <div className="bg-black text-white px-4 py-2">Footer</div>
    </div>
  );
}

export default App;
