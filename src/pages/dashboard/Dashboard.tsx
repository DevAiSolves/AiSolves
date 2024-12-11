import { useNavigate } from "react-router-dom";
import backgroundVideo from "../../assets/background-video.mp4";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

export const Dasboard: React.FC = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/events");
  };

  return (
    <>
      <div className="relative h-screen w-screen flex overflow-hidden bg-background p-16">
        <video
          autoPlay
          loop
          muted
          className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative text-white flex flex-col justify-between">
          <Header onClick={handleBackClick} />

          <main className="w-screen flex flex-grow items-center ">
            {/* <div className="w-full h-full bg-orange-100"> */}
            {/* <div className="min-h-screen bg-black text-white flex items-center justify-center"> */}
            <div className="w-4/5 bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 shadow-lg">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
                {/* <div className="text-lg">
                      <span className="text-primary">Referido:</span> 12345678
                    </div> */}
                <button className="bg-primary/85 hover:bg-primary text-white py-2 px-4 rounded-md">
                  Ver eventos
                </button>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Card */}
                <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <p className="mb-4">
                    <strong>Gmail:</strong> 📧
                  </p>
                  <p className="mb-4">
                    <strong>Wallet:</strong> 💼
                  </p>
                  <p className="mb-4">
                    <strong>USDT:</strong> 🪙
                  </p>
                  <p>
                    <strong>Twitter:</strong> ❌
                  </p>
                </div>

                {/* Right Card */}
                <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <div className="mb-4">
                    <p>
                      <strong>AiSolves Token:</strong> 10000
                    </p>
                  </div>
                  <div className="mb-4">
                    <p>
                      <strong>NFTs:</strong> 1
                      {/* cantidad de eventos comprados */}
                    </p>
                  </div>
                  {/* <div className="mb-4">
                        <p>
                          <strong>Stake Time Remind:</strong>
                        </p>
                      </div> */}
                  {/* <div className="flex gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
                          EARN COCAYS
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
                          STAKE
                        </button>
                      </div> */}
                  <div className="flex gap-4 mt-4">
                    <button className="bg-primary/85 hover:bg-primary text-white py-2 px-4 rounded-md">
                      VIP
                    </button>
                    <button className="bg-primary/85 hover:bg-primary text-white py-2 px-4 rounded-md">
                      MAP
                    </button>
                  </div>
                </div>
              </div>

              {/* Donations Table */}
              <div className="bg-gray-800 rounded-lg p-4 shadow-md mt-6">
                <h2 className="text-center text-lg font-bold mb-4">
                  Mis eventos
                </h2>
                <table className="w-full text-sm text-left text-gray-400">
                  <thead className="text-xs text-gray-300 uppercase bg-gray-700">
                    <tr>
                      <th className="py-2 px-4">Fecha</th>
                      <th className="py-2 px-4">Hash</th>
                      <th className="py-2 px-4">Cantidad</th>
                      <th className="py-2 px-4">Wallet</th>
                      <th className="py-2 px-4">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-800 border-b border-gray-700">
                      <td className="py-2 px-4">18/2/2024</td>
                      <td className="py-2 px-4">0x4gasd...</td>
                      <td className="py-2 px-4">$10</td>
                      <td className="py-2 px-4">0x4gasd...</td>
                      <td className="py-2 px-4">
                        <span className="flex gap-2">
                          <button>🔗</button>
                          <button>📄</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};
