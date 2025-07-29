import { motion } from "framer-motion";
import CardsService from "./CardsService";

function Services() {
  return (
    <motion.div
      className="text-center mt-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
        O que oferecemos?
      </h2>

      <div className="bg-[#e53945] w-32 h-[2px] mx-auto mt-5"></div>
      <CardsService />
    </motion.div>
  );
}

export default Services;
