import back from "../assets/Back.png";

interface HeaderProps {
  onClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <header className="flex w-full ">
      <button
        onClick={onClick}
        className=" text-primary hover:text-pink-700 transition duration-200"
      >
        <img src={back} alt="back button" />
      </button>
    </header>
  );
};
