import backgroundVideo2 from "../../assets/background-video-2.mp4";
import aleatory from "../../assets/aleatory-background-video.mp4";
import cocay from "../../assets/cocay-token-background-video.mov";
import zamina from "../../assets/zamina-nft-background-video.mov";
import back from "../../assets/Back.png";
import SimpleButton from "../../components/buttons/SimpleButton";

export const Clientes: React.FC = () => {
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
      <div className="relative h-screen w-screen overflow-hidden bg-background p-8">
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={backgroundVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative min-h-screen text-white flex flex-col">
          {/* Botón de regreso */}
          <header className="flex w-full ">
            <button
              onClick={handleBackClick}
              className=" text-primary hover:text-pink-700 transition duration-200"
            >
              <img src={back} alt="back button" />
            </button>
          </header>

          <main className="w-full flex items-center">
            {/* Información del cliente */}
            <div className="text-left text-primary text-4xl font-bold w-1/4">
              CONOCE ACERCA DE NUESTROS CLIENTES
            </div>

            {/* Carrusel de tarjetas de clientes */}
            <div className="flex overflow-hidden mx-auto snap-x scrollbar-hide mt-32 ml-16">
              {clients.map((client, index) => (
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
                  <header className="text-primary text-xs p-2">
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
            ].map((item, index) => (
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
