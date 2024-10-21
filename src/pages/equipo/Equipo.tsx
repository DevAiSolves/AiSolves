import backgroundVideo from "../../assets/background-video.mp4";
import aleatory from "../../assets/aleatory-background-video.mp4";
import cocay from "../../assets/cocay-token-background-video.mov";
import zamina from "../../assets/zamina-nft-background-video.mov";
import back from "../../assets/Back.png";
import SimpleButton from "../../components/buttons/SimpleButton";

export const Equipo: React.FC = () => {
  const handleBackClick = () => {
    console.log("Botón de regreso presionado");
  };

  const clients = [
    {
      title: "COCAY TOKEN",
      description: "Token Descripción...",
      background: cocay,
    },
    {
      title: "ZAMNA NFT",
      description: "NFT Descripción...",
      background: zamina,
    },
    {
      title: "ALEATORY",
      description: "Aleatory Descripción...",
      background: aleatory,
    },
  ];

  return (
    <>
      <div className="relative h-screen flex overflow-hidden bg-background p-16">
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative text-white flex flex-col justify-between">
          {/* Botón de regreso */}
          <header className="flex w-full ">
            <button
              onClick={handleBackClick}
              className=" text-primary hover:text-pink-700 transition duration-200"
            >
              <img src={back} alt="back button" />
            </button>
          </header>

          <main className="w-screen flex flex-grow items-center ">
            {/* Información del cliente */}
            <div className="absolute transform -translate-y-1/2 left-0 top-1/2  text-primary text-3xl font-bold w-1/4">
              CONOCE MÁS SOBRE NUESTRO EQUIPO
            </div>

            {/* Carrusel de tarjetas de clientes */}
            <div className="flex overflow-hidden snap-x scrollbar-hide gap-6 justify-center w-full">
              {clients.map((e) => (
                <div className="bg-gray-800 rounded-lg p-4 w-60 h-80 text-center border-2 border-primary ">
                  <div className="mb-4">
                    <img
                      src={"imageSrc"}
                      // alt={"name"}
                      className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200"
                    />
                  </div>
                  <div className="text-white text-xl font-semibold">
                    {"name"}
                  </div>
                  <div className="text-gray-400 text-sm">{"title"}</div>
                </div>
              ))}
            </div>
          </main>

          {/* Navegación inferior */}
          <footer className="w-full flex justify-center space-x-8 text-xs">
            {[
              "Servicios",
              "Portfolio",
              "Nosotros",
              "Whitepaper",
              "Mi Cuenta",
            ].map((item) => (
              // <button
              //   key={index}
              //   className="hover:text-pink-500 transition duration-200"
              // >
              //   {item}
              // </button>

              <SimpleButton text={item} onClick={() => {}} key={item} />
            ))}
          </footer>
        </div>
      </div>
    </>
  );
};
