import backgroundVideo2 from "../../assets/background-video-2.mp4";
import web3AndBlockchain from "../../assets/web3&blockchain.mp4";
import esteticaDigital from "../../assets/estetica-digital.mp4";
import mktDigital from "../../assets/mkt-digital.mp4";
import back from "../../assets/Back.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

export const Servicios: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const navigateToBlockchain = () => {
    navigate("/services/blockchain");
  };
  const navigateToMarketing = () => {
    navigate("/services/marketing");
  };

  const services = [
    {
      title: "WEB3 & BLOCKCHAIN",
      description: "Token Descripción...",
      background: web3AndBlockchain,
      onClick: navigateToBlockchain,
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
      onClick: navigateToMarketing,
    },
  ];

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
        <Header onClick={handleBackClick} />

        <main className="w-screen flex items-center flex-grow">
          <div className="absolute transform -translate-y-1/2 left-0 top-1/2  text-primary text-3xl font-bold w-1/4">
            CONOCE MÁS SOBRE NUESTROS SERVICIOS
          </div>

          {/* Carrusel de tarjetas de servicios */}
          <div className="flex overflow-hidden mx-auto snap-x scrollbar-hide">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-96 border-2 bg-black border-primary rounded-lg  m-4 overflow-hidden cursor-pointer"
                onClick={service.onClick}
              >
                {/* Backgorund */}
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                >
                  <source src={service.background} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Content */}

                <div className="flex flex-col justify-evenly relative h-full z-10">
                  <header className="text-primary text-xs p-2 z-10 relative">
                    {service.title} {">>>>>>>>>"}
                  </header>

                  <div className="h-0.5 w-full bg-primary" />

                  <div className="text-primary text-4xl font-bold mb-4 h-full flex flex-col justify-center p-2">
                    {service.title}
                  </div>

                  <button className="absolute bottom-4 left-4 text-primary font-medium border-primary hover:text-pink-700 transition border py-1 px-6 rounded-full text-xs">
                    VER MÁS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
