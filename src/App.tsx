import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

const App = () => {
  return (
    <div className="min-h-screen bg-[#3b3f44] text-white font-sans">
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route />
        </Routes>
      </main>
    </div>
  );
};

export default App;
