import AiSolves from "../assets/AiSolves.png";
import SimpleButton from "./buttons/SimpleButton";

export const Footer = () => {
  return (
    <footer className="relative flex-wrap mt-10 w-full flex justify-center items-center space-x-8 text-xs">
      <>
        <p className="absolute left-0 text-primary">
          {"<< HAZ SCROLL Y DESCUBRE >>"}
        </p>
        <img src={AiSolves} alt="AiSolves" className="max-w-xs max-h-10" />
        {["Servicios", "Portfolio", "Nosotros", "Whitepaper", "Mi Cuenta"].map(
          (item) => (
            <SimpleButton text={item} onClick={() => {}} key={item} />
          )
        )}
      </>
    </footer>
  );
};

export default Footer;
