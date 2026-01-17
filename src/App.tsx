import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div className="min-h-screen bg-[#3b3f44] text-white font-sans">
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route />
        </Routes>
      </main>
    </div>
  );
};

export default App;
