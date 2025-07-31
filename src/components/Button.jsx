function Button({ text }) {
  return (
    <button className="bg-[#e53945] hover:bg-red-700 text-white px-6 py-2 rounded-full transition cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
