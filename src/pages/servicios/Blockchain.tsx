import backgroundVideo2 from "../../assets/background-video-2.mp4";
import back from "../../assets/Back.png";
import tokenizacionActivos from "../../assets/tokenizacion-activos.png";
import creacionToken from "../../assets/creacion-token.png";
import smartDapps from "../../assets/smart-dapps.png";
import staking from "../../assets/staking.png";
import asesoria from "../../assets/asesoria.png";
import marketplace from "../../assets/marketplace.png";
import nft from "../../assets/coleccion-nft.png";

import Footer from "../../components/Footer";
import { ServiceItem } from "./components/ServiceItem";
import { useState } from "react";

export const Blockchain: React.FC = () => {
  const handleBackClick = () => {
    console.log("Botón de regreso presionado");
  };

  const [isTokenizationActive, setIsTokenizationActive] = useState(false);
  const [isTokenCreationActive, setIsTokencreationActive] = useState(false);
  const [isSmartDappsActive, setIsSmartDappsActive] = useState(false);
  const [isStakingActive, setIsStakingActive] = useState(false);
  const [isAsesoriaActive, setIsAsesoriaActive] = useState(false);
  const [isNftActive, setIsNftActive] = useState(false);
  const [isMarketplaceActive, setIsMarketplaceActive] = useState(false);

  const blockchainServices = [
    {
      title: "Tokenización de activos",
      description: "Tokenizá tus activos con nosotros",
      img: tokenizacionActivos,
      isDescriptionActive: isTokenizationActive,
      setIsDescriptionActive: setIsTokenizationActive,
    },
    {
      title: "Creación de Token",
      description:
        "Tu propio token ERC-20 para tu proyecto, con los tokenomics que prefieras",

      img: creacionToken,
      isDescriptionActive: isTokenCreationActive,
      setIsDescriptionActive: setIsTokencreationActive,
    },
    {
      title: "Smart DAPPS y contratos",
      description:
        "Desarrollamos Smart Contracts y DAPPS que cumplan con los requisitos de tu proyecto",
      img: smartDapps,
      isDescriptionActive: isSmartDappsActive,
      setIsDescriptionActive: setIsSmartDappsActive,
    },
    {
      title: "Staking",
      description:
        "La posibikidad de ofrecer una recompensa a los holders de tu Token o NFTs",

      img: staking,
      isDescriptionActive: isStakingActive,
      setIsDescriptionActive: setIsStakingActive,
    },
    {
      title: "Asesoría",
      description:
        "Desde el desarrollo de tu proyecto hasta aspectos legales y contables, te respaldamos en cada etapa",

      img: asesoria,
      isDescriptionActive: isAsesoriaActive,
      setIsDescriptionActive: setIsAsesoriaActive,
    },
    {
      title: "Colección NFT Completa",
      description: "Creá tu colección NFT con nosotros",

      img: nft,
      isDescriptionActive: isNftActive,
      setIsDescriptionActive: setIsNftActive,
    },
    {
      title: "Marketplace",
      description:
        "Tu propio marketplace como Opensea o un mercado secundario para tus NFTs",

      img: marketplace,
      isDescriptionActive: isMarketplaceActive,
      setIsDescriptionActive: setIsMarketplaceActive,
    },
  ];

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
          <div className="flex flex-wrap justify-evenly items-center overflow-hidden mx-auto snap-x scrollbar-hide w-1/2 h-auto gap-4">
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
