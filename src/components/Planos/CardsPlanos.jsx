import { IoMdCut } from "react-icons/io"; //Cabelo sempre alinhado (icon)
import { FaPercentage, FaExclamation, FaRegStar } from "react-icons/fa"; //Descontos exclusivos (icon)
import { MdOutlineEmojiPeople, MdWorkspacePremium } from "react-icons/md"; //Imagem pessoal impecável (icon)
import { FaGift } from "react-icons/fa6"; //Presentes exclusivos (icon)
import { GiMirrorMirror, GiTicket } from "react-icons/gi";

const PlanosCards = [
  { title: "Cabelo sempre alinhado", icon: IoMdCut },
  { title: "Descontos exclusivos", icon: FaPercentage },
  { title: "Imagem pessoal impecável", icon: MdOutlineEmojiPeople },
  { title: "Presentes exclusivos", icon: FaGift },
  { title: "Produtos premium", icon: MdWorkspacePremium },
  { title: "Consultoria", icon: GiMirrorMirror },
  { title: "Atendimento prioritário", icon: FaExclamation },
  { title: "Programa de fidelidade", icon: FaRegStar },
];

function Card({ title, icon }) {
  return (
    <div className="mt-10 mb-10">
      <div className="relative rounded-md hover:shadow-xl hover:scale-105 duration-300 ease-in-out overflow-hidden border border-neutral-700 hover:border-red-500 transition group h-40 w-60 cursor-pointer flex flex-col items-center justify-center p-6 text-white text-center">
        {/* Ícone centralizado */}
        <div className="text-4xl mb-4">{icon}</div>

        {/* Overlay vermelho */}
        <div className="absolute inset-0 bg-[#e53945] bg-opacity-70 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

        {/* Texto */}
        <div className="relative z-10">
          <p className="text-gray-300 text-xxl leading-relaxed">{title}</p>
        </div>
      </div>
    </div>
  );
}

function CardsPlanos() {
  return (
    <div className="grid gap-4 px-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {PlanosCards.map((card, index) => (
        <Card key={index} icon={<card.icon />} title={card.title} />
      ))}
    </div>
  );
}

export default CardsPlanos;
