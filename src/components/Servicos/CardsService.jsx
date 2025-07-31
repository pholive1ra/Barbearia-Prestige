import { Link } from "react-router-dom";

import corte from "../../assets/img/Servicos/corte.jpg";
import barba from "../../assets/img/Servicos/barba.jpg";
import hidratacao from "../../assets/img/Servicos/hidratacao.jpg";
import maquina from "../../assets/img/Servicos/maquina.jpg";

// 1. Lista de cards
const cards = [
  {
    title: "Corte",
    description:
      "Corte moderno e personalizado, com atenção aos detalhes para realçar seu estilo e valorizar sua imagem.",
    image: corte,
  },
  {
    title: "Barba",
    description:
      "Design de barba com precisão, alinhamento impecável e toalha quente para um acabamento limpo e elegante.",
    image: barba,
  },
  {
    title: "Máquina",
    description:
      "Corte prático e uniforme com máquina, ideal para quem busca agilidade sem abrir mão da qualidade.",
    image: maquina,
  },
  {
    title: "Hidratação",
    description:
      "Tratamento profundo que nutre e revitaliza os fios, deixando seu cabelo mais macio, brilhante e saudável.",
    image: hidratacao,
  },
];

//2. Card individual (Aqui será feito a estilização do card em si, nao irá mexer com grid nem nada de posicionamento do geral)
function Card({ title, description, image }) {
  return (
    <Link to="/agendamento">
      <div className="relative rounded-md hover:shadow-xl hover:scale-105 duration-300 ease-in-out mt-10 mb-20 overflow-hidden border border-neutral-700 hover:border-red-500 transition group h-80 w-full cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full loading=lazy h-45 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay vermelho */}
        <div className="absolute inset-0 bg-[#e53945] hover:border-transparent bg-opacity-70 opacity-0 hover:border-2 group-hover:opacity-50 transition-opacity duration-300"></div>

        <div className="w-full inset-0 h-60 bg-opacity-30 object-cover relative z-10">
          <h3 className="font-serif text-2xl font-bold mt-2 text-white">
            {title}
          </h3>
          <p className=" mt-5 text-gray-300 text-sm text-left leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

//3. Aqui vai ficar a renderização de todos cards, ja que a estilizaçao dele ja esta feita, so ira renderizar e por grid cols
function CardsService() {
  return (
    <div className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default CardsService;
