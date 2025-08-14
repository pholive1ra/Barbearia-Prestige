import CardsPlanos from "./CardsPlanos";
import Button from "../Button";

function Planos() {
  return (
    <div className="text-center mt-5 px-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
        Benefícios de ter um plano
      </h2>
      <div className="bg-[#e53945] w-32 h-[2px] mx-auto mt-5"></div>
      <CardsPlanos />
      <Button text="Quero benefícios" />
    </div>
  );
}

export default Planos;
