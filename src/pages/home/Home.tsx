import backgroundVideo from "../../assets/background-video.mp4";
import SimpleButton from "../../components/buttons/SimpleButton";
import AiSolves from "../../assets/AiSolves.png";
import gmail from "../../assets/logos/gmail.webp";
import x from "../../assets/logos/x.webp";
import instagram from "../../assets/logos/instagram.png";
import github from "../../assets/logos/github.webp";
import gitbook from "../../assets/logos/gitbook.webp";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToServices = () => navigate("/services");
  const goToEvents = () => navigate("/clients");
  const goToWhitePaper = () => navigate("/");
  const goToAboutUs = () => navigate("/team");

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  const toggleLoginModal = () => setIsLoginModalOpen((prev) => !prev);

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
          {/* Modal login */}
          {isLoginModalOpen ? (
            <div className="absolute z-10 w-1/2 h-4/6 bg-black/50 flex justify-evenly items-center flex-col rounded-xl border border-primary/70">
              <img src={AiSolves} alt="AiSolves" className="max-w-sm h-20" />

              <div className="flex flex-col justify-center gap-1 w-1/2">
                <label htmlFor="userName" className="mr-auto">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="w-full bg-white text-primary px-1 font-medium rounded-md outline-none border-2 h-8 border-primary/80 focus:border-primary transition "
                />
              </div>

              <div className="flex flex-col justify-center gap-1 w-1/2">
                <label htmlFor="nickname" className="mr-auto">
                  Nickname
                </label>
                <input
                  type="text"
                  id="nickname"
                  className="w-full bg-white text-primary px-1 font-medium rounded-md outline-none border-2 h-8 border-primary/80 focus:border-primary transition "
                />
              </div>

              <button className="rounded-md w-1/3 bg-primary/85 text-white font-medium py-1 px-6 hover:bg-primary transition">
                Connect Wallet
              </button>
              <button className="flex items-center gap-2 justify-center rounded-lg w-1/3 bg-primary/85 text-white font-medium py-1 px-6 hover:bg-primary transition">
                Log In with Gmail
                <img src={gmail} alt="Gmail logo" className="h-3 " />
              </button>
            </div>
          ) : null}

          {/* Logo en la parte superior izquierda */}
          <div className="absolute top-8 left-8">
            <img src={AiSolves} alt="AiSolves" className="h-14" />
          </div>

          {/* Botones alrededor del cerebro */}
          <div className="relative w-9/12 h-4/6 flex flex-col">
            {/* Servicios */}
            <div className="w-fit  top-0 left-0 absolute ">
              <SimpleButton
                text="Servicios"
                onClick={goToServices}
                showLine={true}
              />
            </div>

            <div className="w-fit bottom-0 left-0 absolute ">
              <SimpleButton text="Eventos" onClick={goToEvents} />
            </div>

            <div className="w-fit  top-0 right-0 absolute ">
              <SimpleButton text="Whitepaper" onClick={goToWhitePaper} />
            </div>

            <div className="w-fit  bottom-0 right-0 absolute ">
              <SimpleButton text="Nosotros" onClick={goToAboutUs} />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between relative">
          <div className="flex gap-6">
            <img src={x} alt="X" className="h-8" />
            <img src={instagram} alt="Instagram" className="h-8" />
            <img src={github} alt="GitHub" className="h-8" />
            <img src={gitbook} alt="GitBook" className="h-8" />
          </div>

          {/* Botón Log In */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <SimpleButton
              text="Log In"
              onClick={toggleLoginModal}
              alwaysShadow={true}
            />
          </div>

          <SimpleButton text="Smart contract" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};
