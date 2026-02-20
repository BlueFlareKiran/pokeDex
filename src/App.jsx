import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import PokemonPage from "./pages/PokemonPage";
import MovesPage from "./pages/MovesPage";
import ItemsPage from "./pages/ItemsPage";
import TypesPage from "./pages/TypesPage";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <Header />


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
      
      <Footer />
    </div>
  );
}

export default App;
