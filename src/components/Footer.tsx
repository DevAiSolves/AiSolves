import { useNavigate } from "react-router-dom";
import AiSolves from "../assets/AiSolves.png";
import SimpleButton from "./buttons/SimpleButton";

export const Footer = () => {
  const navigate = useNavigate();

  const navigateToServices = () => {
    navigate("/services");
  };
  const navigateToPortfolio = () => {
    navigate("/clients");
  };
  const navigateToAboutUs = () => {
    navigate("/team");
  };
  const navigateToWhitepaper = () => {
    navigate("/");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const buttons = [
    {
      text: "Servicios",
      onClick: navigateToServices,
    },
    {
      text: "Eventos",
      onClick: navigateToPortfolio,
    },
    {
      text: "Nosotros",
      onClick: navigateToAboutUs,
    },
    {
      text: "Whitepaper",
      onClick: navigateToWhitepaper,
    },
  ];

  return (
    <footer className="relative flex-wrap mt-10 w-full flex justify-center items-center space-x-8 text-xs">
      <p className="absolute left-0 text-primary">
        {"<< HAZ SCROLL Y DESCUBRE >>"}
      </p>
      <img src={AiSolves} alt="AiSolves" className="max-w-xs max-h-10" />
      {buttons.map((item) => (
        <SimpleButton text={item.text} onClick={item.onClick} key={item.text} />
      ))}
      <SimpleButton
        text={"Dashboard"}
        onClick={navigateToDashboard}
        alwaysShadow={true}
      />
    </footer>
  );
};

export default Footer;
