import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSlider from "./components/HeroSlider";
import Agendamento from "./pages/Agendamento"; // nova página
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSlider />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
