import "@fontsource/cinzel-decorative";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Agendamento from "./pages/Agendamento";
import Home from "./pages/Home"; // << Adiciona isso

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/inicio" element={<Home />} />{" "}
          {/* Agora usa a Home que tem Hero + Services */}
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
