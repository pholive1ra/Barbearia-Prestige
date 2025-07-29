import BotaoAgendar from "./BotaoAgendar";
import slide01 from "../assets/img/HeroSlide/slide01.jpg";
import slide02 from "../assets/img/HeroSlide/slide02.jpg";
import slide03 from "../assets/img/HeroSlide/slide03.jpg";

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
  };

  const prevSlide = () => {
    setSlideAtual((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden pt-24">
        {/* Slides em camadas */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                i === slideAtual ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}

          {/* Overlay escuro por cima das imagens */}
          <div className="absolute inset-0 bg-black/70 z-20"></div>
        </div>

        {/* Conteúdo do slide */}
        <div className="relative z-30 flex flex-col items-start justify-center px-5 md:px-10 text-white max-w-2xl pt-18">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {slides[slideAtual].title}
          </h2>
          <p className="text-lg mb-6">{slides[slideAtual].description}</p>
          <button className="bg-[#e53945] hover:bg-red-700 text-white px-6 py-2 rounded-full transition cursor-pointer">
            Ver mais
          </button>
        </div>

        {/* Indicadores de slide */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-6 h-2 rounded-full cursor-pointer ${
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
