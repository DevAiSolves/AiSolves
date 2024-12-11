import React, { useState } from "react";
import backgroundVideo2 from "../../assets/background-video-2.mp4";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import dayOne from "../../assets/events/day-1.png";
import dayTwo from "../../assets/events/day-2.png";
import dayThree from "../../assets/events/day-3.png";
import dayFour from "../../assets/events/day-4.png";
import flayer from "../../assets/events/flayer.png";
import nftEvent from "../../assets/events/nftEvent.mp4";
import { useNavigate } from "react-router-dom";

export const Eventos: React.FC = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [quantity, setQuantity] = useState(1);

  const toggleBuyModal = (event: { title: string; description: string }) => {
    setSelectedEvent(event);
    setIsBuyModalOpen((prev) => !prev);
  };

  const events = [
    {
      title: "AiSolves",
      description: "",
      background: nftEvent,
    },
    {
      title: "DAY ONE",
      description:
        "Dailly Pass: $100 per day (4 days). Allows access to all festival venues, including the three stages, market, music sessions, and art exhibitions",
      background: dayOne,
    },
    {
      title: "DAY TWO",
      description:
        "Dailly Pass: $100 per day (4 days). Allows access to all festival venues, including the three stages, market, music sessions, and art exhibitions",
      background: dayTwo,
    },
    {
      title: "DAY THREE",
      description:
        "Dailly Pass: $100 per day (4 days). Allows access to all festival venues, including the three stages, market, music sessions, and art exhibitions",
      background: dayThree,
    },
    {
      title: "DAY FOUR",
      description:
        "Dailly Pass: $100 per day (4 days). Allows access to all festival venues, including the three stages, market, music sessions, and art exhibitions",
      background: dayFour,
    },
    {
      title: "TULUM CRYPTO FEST",
      description:
        "Full Pass (4 days): $350 includes access to all festival venues, including the three stages, market, music sessions, and art exhibitions for all four days",
      background: flayer,
    },
  ];

  return (
    <>
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

          <main className="w-full flex items-center flex-grow">
            <div className="flex mx-auto snap-x scrollbar-hide wrap">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-52 h-96 border-2 bg-black border-primary rounded-lg m-4 flex flex-col overflow-hidden"
                  onClick={() => toggleBuyModal(event)}
                >
                  {index === 0 && (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    >
                      <source src={event.background} type="video/mp4" />
                    </video>
                  )}

                  <img
                    src={event.background}
                    alt={event.title}
                    className="object-cover h-full"
                  />

                  <div className="flex w-full justify-evenly p-4 top-0 absolute bg-black/30 shadow-lg shadow-black/20">
                    <button className="text-white font-medium border-primary hover:text-pink-700 transition border py-1 px-4 rounded-full text-xs bg-primary">
                      BUY
                    </button>

                    <button className="text-white font-medium border-primary hover:text-pink-700 transition border py-1 px-4 rounded-full text-xs bg-primary">
                      VERIFY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {isBuyModalOpen && selectedEvent && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
              <div className="bg-gradient-to-b from-gray-900/60 to-black/60 text-white p-8 rounded-lg max-w-sm border-2 border-primary">
                <h2 className="text-xl font-bold mb-4">
                  {selectedEvent.title}
                </h2>
                <p className="mb-4">{selectedEvent.description}</p>

                {/* Cantidad a Comprar */}
                <div className="flex items-center justify-between my-4">
                  <button
                    className="bg-gray-800 text-white py-2 px-4 rounded-l hover:bg-gray-700"
                    onClick={
                      () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev)) // Evitar números negativos
                    }
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{quantity}</span>
                  <button
                    className="bg-gray-800 text-white py-2 px-4 rounded-r hover:bg-gray-700"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Botones de Acción */}
                <div className="flex justify-between">
                  <button
                    className="bg-primary text-white py-1 px-4 rounded"
                    onClick={() => {
                      console.log(`Compraste ${quantity} entradas`);
                      setIsBuyModalOpen(false);
                    }}
                  >
                    Buy {quantity}
                  </button>

                  <button
                    className="bg-black text-white border py-1 px-4 rounded"
                    onClick={() => {
                      setIsBuyModalOpen(false);
                      setQuantity(1);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
};
