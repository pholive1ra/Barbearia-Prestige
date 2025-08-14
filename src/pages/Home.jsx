import HeroSlider from "../components/HeroSlider";
import Services from "../components/Servicos/Services";
import Planos from "../components/Planos/Planos";
import Navbar from "../components/Navbar";
import PrestigeApp from "../components/DownloadApp/PrestigeApp";
//import AvaliacaoList from "../components/AvaliacaoList";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Services />
      <Planos />
      <PrestigeApp />
      {/*<AvaliacaoList />*/}
    </>
  );
}

export default Home;
