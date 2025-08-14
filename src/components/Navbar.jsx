import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <>
      <nav className="bg-[#000000] text-white p-4 px-12 h-20 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <img src={Logo} alt="Logo" className="h-20" />

        <button /*Botão mobile menu*/
          className="md:hidden text-2xl hover:scale-105 hover:text-[#e53945] cursor-pointer"
          onClick={() =>
            setopenMenu(!openMenu)
          } /*!openMenu significa diferente de openMenu (false), alterna ao clicar*/
        >
          {openMenu ? "X" : "☰"}
        </button>

        <div className="hidden md:flex gap-6" /*Menu desktop*/>
          <Link to="/inicio">
            <a
              href="#"
              className="hover:text-[#e53945] transition-colors duration-300 font-bold"
            >
              Início
            </a>
          </Link>
          <a
            href="#"
            className="hover:text-[#e53945] transition-colors duration-300 font-bold"
          >
            Serviços
          </a>

          <a
            href="#"
            className="hover:text-[#e53945] transition-colors duration-300 font-bold"
          >
            Planos
          </a>
          <a
            href="#"
            className="hover:text-[#e53945] transition-colors duration-300 font-bold"
          >
            Avaliações
          </a>
        </div>
        <Link to="/agendamento">
          <button className="bg-[#e53945] hover:bg-red-600 cursor-pointer px-4 py-1 rounded font-bold hidden md:flex transition-all duration-300">
            Agendamento
          </button>
        </Link>

        {openMenu && (
          <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[#000000] p-4 flex flex-col items-center gap-4">
            <Link to="/inicio">
              <a
                href="#"
                className="hover:scale-105 hover:text-[#e53945] transition-colors font-bold duration-300 py-2"
              >
                Início
              </a>
            </Link>
            <a
              href="#"
              className="hover:scale-105 hover:text-[#e53945] transition-colors font-bold duration-300 py-2"
            >
              Serviços
            </a>
            <a
              href="#"
              className="hover:scale-105 hover:text-[#e53945] transition-colors font-bold duration-300 py-2"
            >
              Planos
            </a>
            <a
              href="#"
              className="hover:scale-105 hover:text-[#e53945] transition-colors font-bold duration-300 py-2"
            >
              Avaliações
            </a>
            <Link to="/agendamento">
              <button className="bg-[#e53945] hover:bg-red-600 cursor-pointer font-bold px-4 py-1 rounded w-fit">
                Agendamento
              </button>
            </Link>
          </div>
        )}
      </nav>
      <div className="h-1 bg-[#e53945] w-full" />
    </>
  );
}

export default Navbar;
