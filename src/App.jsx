import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <body className="bg-[#f3e9dd]">
        <Navbar />
        <div className="h-0.5 w-full bg-[#e53945] fixed top-20 left-0 z-40"></div>
      </body>
    </>
  );
}

export default App;
