import "@fontsource/cinzel-decorative";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Agendamento from "./pages/Agendamento";
import Home from "./pages/Home"; // << Adiciona isso
import BotaoAgendar from "./components/BotaoAgendar";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          {/* Agora usa a <Home/> que tem Navbar + Hero + Services */}
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
        <BotaoAgendar />
      </Router>
    </div>
  );
}

export default App;
