import GooglePlay from "../../assets/img/DownloadApp/GooglePlay.png";
import AppStore from "../../assets/img/DownloadApp/AppStore.png";
import Phone from "../../assets/img/DownloadApp/Phone.png";

function StoreButton({ href, img, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Download via ${alt}`}
    >
      <img
        src={img}
        alt={alt}
        className="h-12 hover:scale-105 hover:brightness-110 transition-all duration-300"
      />
    </a>
  );
}

const content = {
  title: "A experiência Prestige está disponível no seu celular!",
  description:
    "Com o app da Barbearia Prestige, você agenda com facilidade, escolhe seu barbeiro favorito e ainda recebe lembretes. Tudo no seu tempo, do seu jeito.",
};

function PrestigeApp() {
  return (
    <section className="bg-gradient-to-br from-zinc-950 to-black shadow-xl border border-[#e53945] text-white mt-16 transition-all duration-700 animate-fade-in py-16 px-6 rounded-md max-w-5xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-6 mx-auto md:mx-0 rounded-full"></div>
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            {content.description}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <StoreButton href="#" img={AppStore} alt="App Store" />
            <StoreButton href="#" img={GooglePlay} alt="Google Play" />
          </div>
        </div>

        {/* Imagem do app */}
        <div>
          <img
            src={Phone}
            alt="Aplicativo Prestige"
            loading="lazy"
            className="w-[360px] md:w-[440px] -mt-6 mx-auto mb-6 md:mb-0 drop-shadow-[0_0_40px_rgba(229,57,69,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}

export default PrestigeApp;
