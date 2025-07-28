import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <>
      <body className="bg-[#000000]">
        <Navbar />
        <HeroSlider />
      </body>
    </>
  );
}

export default App;
