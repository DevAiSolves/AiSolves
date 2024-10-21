import signoSuma from "../../../assets/signo-suma.png";

interface ServiceItemProps {
  item: {
    title: string;
    img: string;
  };
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => (
  <div
    className="flex  items-center justify-start gap-4 pl-4 w-[40%] bg-primary/20 h-16 border border-primary rounded-md"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 50%, 80% 100%, 0% 100%)", // Diagonal solo hasta la mitad inferior derecha
    }}
  >
    <img src={item.img} alt={item.title} />
    <p className="text-white">{item.title}</p>
    <img src={signoSuma} alt={"Simbolo de suma"} />
  </div>
);
