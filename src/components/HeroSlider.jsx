import slide01 from "../assets/slide01.jpg";
import slide02 from "../assets/slide02.jpg";
import slide03 from "../assets/slide03.jpg";

import { useState } from "react";

const slides = [
  {
    title: "Seu Visual Merece Todo o Prestige",
    description:
      "Na Barbearia Prestige, seu corte reflete o respeito e o prestígio que você merece.",
    image: slide01,
  },
  {
    title: "Muito Além do Corte: Uma Experiência Completa",
    description:
      "Venha relaxar, renovar seu visual e sair daqui pronto para qualquer ocasião. Corte, barba, hidratação e mais.",
    image: slide02,
  },
  {
    title: "Agende Seu Horário Sem Complicação",
    description:
      "Evite filas! Agende online e seja atendido na hora marcada com toda a praticidade.",
    image: slide03,
  },
];

function HeroSlider() {
  const [slideAtual, setSlideAtual] = useState(0);

  const nextSlide = () => {
    setSlideAtual((prev) => (prev + 1) % slides.length);
    {
      /*Proximo slide*/
    }
  };
  const prevSlide = () => {
    setSlideAtual((prev) => (prev - 1 + slides.length) % slides.length);
    {
      /*Anterior slide*/
    }
  };

  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Imagem de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${slides[slideAtual].image})` }}
        >
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        {/* Conteúdo do slide */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            {slides[slideAtual].title}
          </h2>
          <p className="text-lg mb-6">{slides[slideAtual].description}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition">
            Saiba Mais
          </button>
        </div>
        {/* Indicadores de slide (bolinhas) */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-6 h-2 rounded-full ${
                i === slideAtual ? "bg-red-600" : "bg-white/40"
              } transition`}
              onClick={() => setSlideAtual(i)}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSlider;
