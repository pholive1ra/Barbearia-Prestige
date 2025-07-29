import { Link } from "react-router-dom";

function BotaoAgendar() {
  return (
    <Link
      to="/agendamento"
      className="fixed bottom-6 right-6 bg-[#e53945] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-red-600 transition-colors flex items-center gap-2"
      style={{ zIndex: 1000 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10m-11 4h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z"
        />
      </svg>
      Agendar
    </Link>
  );
}

export default BotaoAgendar;
