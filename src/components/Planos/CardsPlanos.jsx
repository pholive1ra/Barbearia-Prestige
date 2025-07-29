import { IoMdCut } from "react-icons/io"; //Cabelo sempre alinhado (icon)
import { FaPercentage } from "react-icons/fa"; //Descontos exclusivos (icon)
import { MdOutlineEmojiPeople } from "react-icons/md"; //Imagem pessoal impecável (icon)
import { FaGift } from "react-icons/fa6"; //Presentes exclusivos (icon)

const PlanosCards = [
  { title: "Cabelo sempre alinhado", icon: IoMdCut },
  {
    title: "Descontos exclusivos",
    icon: FaPercentage,
  },
  {
    title: "Imagem pessoal impecável",
    icon: MdOutlineEmojiPeople,
  },
  {
    title: "Presentes exclusivos",
    icon: FaGift,
  },
];

function CardsPlanos() {
  return <div className="mt-10 mb-20"></div>;
}
