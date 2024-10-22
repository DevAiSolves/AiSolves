import signoSuma from "../../../assets/signo-suma.png";

interface ServiceItemProps {
  item: {
    title: string;
    description: string;
    img: string;
    isDescriptionActive: boolean;
    setIsDescriptionActive: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => (
  <div
    className="flex items-center justify-start gap-4 pl-4 w-[40%] cursor-pointer bg-primary/20 h-auto border border-primary rounded-md duration-300 p-4"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 50%, 80% 100%, 0% 100%)",
    }}
    onClick={() => {
      item.setIsDescriptionActive((prev) => !prev);
    }}
  >
    {item.isDescriptionActive ? null : <img src={item.img} alt={item.title} />}

    <p className="text-white">
      {item.isDescriptionActive ? item.description : item.title}
    </p>
    <img src={signoSuma} alt={"Simbolo de suma"} />
  </div>
);
