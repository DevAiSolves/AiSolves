import backgroundVideo2 from "../../assets/background-video-2.mp4";
import web3AndBlockchain from "../../assets/web3&blockchain.mp4";
import esteticaDigital from "../../assets/estetica-digital.mp4";
import mktDigital from "../../assets/mkt-digital.mp4";
import back from "../../assets/Back.png";
import SimpleButton from "../../components/buttons/SimpleButton";

const services = [
  {
    title: "WEB3 & BLOCKCHAIN",
    description: "Token Descripción...",
    background: web3AndBlockchain,
  },
  {
    title: "ESTÉTICA DIGITAL",
    description: "NFT Descripción...",
    background: esteticaDigital,
  },
  {
    title: "MKT DIGITAL",
    description: "Aleatory Descripción...",
    background: mktDigital,
  },
];

export const Servicios: React.FC = () => {
  const handleBackClick = () => {
    console.log("Botón de regreso presionado");
  };

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-background p-16">
      <video
        autoPlay
        loop
        muted
        className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={backgroundVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative text-white flex flex-col">
        {/* Botón de regreso */}
        <header className="flex w-full ">
          <button
            onClick={handleBackClick}
            className=" text-primary hover:text-pink-700 transition duration-200"
          >
            <img src={back} alt="back button" />
          </button>
        </header>

        <main className="w-screen flex items-center flex-grow">
          <div className="absolute transform -translate-y-1/2 left-0 top-1/2  text-primary text-3xl font-bold w-1/4">
            CONOCE MÁS SOBRE NUESTROS SERVICIOS
          </div>

          {/* Carrusel de tarjetas de servicios */}
          <div className="flex overflow-hidden mx-auto snap-x scrollbar-hide">
            {services.map((client, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-96 border-2 bg-black border-primary rounded-lg  m-4 overflow-hidden"
              >
                {/* Backgorund */}
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                >
                  <source src={client.background} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Content */}

                <div className="flex flex-col justify-evenly relative h-full z-10">
                  <header className="text-primary text-xs p-2 z-10 relative">
                    {client.title} {">>>>>>>>>"}
                  </header>

                  <div className="h-0.5 w-full bg-primary" />

                  <div className="text-primary text-4xl font-bold mb-4 h-full flex flex-col justify-center p-2">
                    {client.title}
                  </div>

                  <button className="absolute bottom-4 left-4 text-primary font-medium border-primary hover:text-pink-700 transition border py-1 px-6 rounded-full text-xs">
                    VER MÁS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Navegación inferior */}
        <footer className="mt-10 w-full flex justify-center space-x-8 text-xs">
          {[
            "Servicios",
            "Portfolio",
            "Nosotros",
            "Whitepaper",
            "Mi Cuenta",
          ].map((item) => (
            <SimpleButton text={item} onClick={() => {}} key={item} />
          ))}
        </footer>
      </div>
    </div>
  );
};
