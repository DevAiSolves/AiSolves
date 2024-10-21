import backgroundVideo2 from "../../assets/background-video-2.mp4";
import back from "../../assets/Back.png";
import tokenizacionActivos from "../../assets/tokenizacion-activos.png";
import creacionToken from "../../assets/creacion-token.png";
import smartDapps from "../../assets/smart-dapps.png";
import staking from "../../assets/staking.png";
import asesoria from "../../assets/asesoria.png";
import marketplace from "../../assets/marketplace.png";
import nft from "../../assets/coleccion-nft.png";
import signoSuma from "../../assets/signo-suma.png";
import AiSolves from "../../assets/AiSolves.png";

import SimpleButton from "../../components/buttons/SimpleButton";
import Footer from "../../components/Footer";
import { ServiceItem } from "./components/ServiceItem";

const blockchainServices = [
  {
    title: "Tokenización de activos",
    img: tokenizacionActivos,
  },
  {
    title: "Creación de Token",
    img: creacionToken,
  },
  {
    title: "Smart DAPPS y contratos",
    img: smartDapps,
  },
  {
    title: "Staking",
    img: staking,
  },
  {
    title: "Asesoría",
    img: asesoria,
  },
  {
    title: "Colección NFT Completa",
    img: nft,
  },
  {
    title: "Marketplace",
    img: marketplace,
  },
];

export const Blockchain: React.FC = () => {
  const handleBackClick = () => {
    console.log("Botón de regreso presionado");
  };

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-background p-16">
      <video
        autoPlay
        loop
        muted
        className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={backgroundVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative text-white flex flex-col w-full">
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
            EL PODER DE LA BLOCKCHAIN A TU DISPOSICIÓN
          </div>

          {/* Carrusel de itmes de servicios */}
          <div className="flex flex-wrap justify-evenly items-center overflow-hidden mx-auto snap-x scrollbar-hide w-1/2 h-3/4">
            {blockchainServices.map((item) => (
              <ServiceItem item={item} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
