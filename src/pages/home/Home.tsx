import backgroundVideo from "../../assets/background-video.mp4";
import SimpleButton from "../../components/buttons/SimpleButton";
import AiSolves from "../../assets/AiSolves.png";

import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToServices = () => navigate("/services");
  const goToPortfolio = () => navigate("/clients");
  const goToWhitePaper = () => navigate("/");
  const goToAboutUs = () => navigate("/team");

  return (
    <>
      <div className="relative h-screen flex flex-col items-center  overflow-hidden bg-background p-16">
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Contenido principal */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          {/* Logo en la parte superior izquierda */}
          <div className="absolute top-8 left-8">
            <img src={AiSolves} alt="AiSolves" className="h-14" />
          </div>

          {/* Botones alrededor del cerebro */}
          <div className="relative  w-9/12 h-4/6 flex flex-col">
            {/* Servicios */}

            <div className="w-fit  top-0 left-0 absolute ">
              <SimpleButton
                text="Servicios"
                onClick={goToServices}
                showLine={true}
              />
            </div>

            <div className="w-fit  bottom-0 left-0 absolute ">
              <SimpleButton text="Portafolio" onClick={goToPortfolio} />
            </div>

            <div className="w-fit  top-0 right-0 absolute ">
              <SimpleButton text="Whitepaper" onClick={goToWhitePaper} />
            </div>

            <div className="w-fit  bottom-0 right-0 absolute ">
              <SimpleButton text="Nosotros" onClick={goToAboutUs} />
            </div>
          </div>
        </div>
        {/* Botón Log In */}
        <SimpleButton text="Log In" onClick={() => {}} alwaysShadow={true} />
      </div>
    </>
  );
};
