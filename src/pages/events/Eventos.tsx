import backgroundVideo2 from "../../assets/background-video-2.mp4";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import dayOne from "../../assets/events/day-1.png";
import dayTwo from "../../assets/events/day-2.png";
import dayThree from "../../assets/events/day-3.png";
import dayFour from "../../assets/events/day-4.png";
import flayer from "../../assets/events/flayer.png";
import nftEvent from "../../assets/events/nftEvent.mp4";

export const Eventos: React.FC = () => {
  const handleBackClick = () => {
    console.log("Botón de regreso presionado");
  };

  const events = [
    {
      title: "AiSolves",
      description: "",
      background: nftEvent,
    },
    {
      title: "DAY ONE",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",
      background: dayOne,
    },
    {
      title: "DAY TWO",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",
      background: dayTwo,
    },
    {
      title: "DAY THREE",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",

      background: dayThree,
    },
    {
      title: "DAY FOUR",
      description:
        "Access for one day to all activities, taalks, meetups, live performances, music, DJ sets, dining options, holistic activities, and the Crypto Academy. Access to al three stages",

      background: dayFour,
    },
    {
      title: "TULUM CRYPTO FEST",
      description: "",
      background: flayer,
    },
  ];

  return (
    <>
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
          <Header onClick={handleBackClick} />

          <main className="w-full flex items-center flex-grow">
            {/* Información del cliente */}
            {/* <div className="absolute transform -translate-y-1/2 left-0 top-1/2  text-primary text-3xl font-bold w-1/4">
              CONOCE ACERCA DE NUESTROS CLIENTES
            </div> */}

            {/* Carrusel de tarjetas de clientes */}
            <div className="flex  mx-auto snap-x scrollbar-hide wrap">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-52 h-96 border-2 bg-black border-primary rounded-lg m-4 flex flex-col overflow-hidden"
                >
                  {/* Background */}

                  {/* Fondo de video solo para una tarjeta específica */}
                  {index === 0 && (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    >
                      <source src={event.background} type="video/mp4" />
                    </video>
                  )}

                  <img
                    src={event.background}
                    alt={event.title}
                    className="object-cover h-full"
                  />

                  {/* Buttons Container */}
                  <div className="flex w-full justify-evenly p-4 top-0 absolute bg-black/30 shadow-lg shadow-black/20">
                    <button className="text-white font-medium border-primary hover:text-pink-700 transition border py-1 px-4 rounded-full text-xs bg-primary">
                      BUY
                    </button>

                    <button className="text-white font-medium border-primary hover:text-pink-700 transition border py-1 px-4 rounded-full text-xs bg-primary">
                      VERIFY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Navegación inferior */}

          <Footer />
        </div>
      </div>
    </>
  );
};
