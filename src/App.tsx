import backgroundVideo from "./assets/background-video.mp4";
import SimpleButton from "./components/buttons/SimpleButton";
import "./index.css";
import { Clientes } from "./pages/clientes/Clientes";
import { Equipo } from "./pages/equipo/Equipo";
import { Home } from "./pages/home/Home";
import { Blockchain } from "./pages/servicios/Blockchain";
import { Marketing } from "./pages/servicios/Marketing";
import { Servicios } from "./pages/servicios/Servicios";

function App() {
  return (
    // <Clientes />
    // <Equipo />
    // <Home />
    // <Servicios />
    // <Blockchain />
    <Marketing />

    //   <div className="relative h-screen w-screen overflow-hidden bg-background">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className="absolute opacity-50 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
    //   >
    //     <source src={backgroundVideo} type="video/mp4"  />
    //     Your browser does not support the video tag.
    //   </video>

    //   <div className="relative z-10 flex items-center justify-center h-full w-full">
    //     <div className="text-white text-center h-60 justify-evenly items-center flex flex-col">
    //       <h1 className="text-2xl text-textColor md:text-4xl font-bold mb-4">AiSolves</h1>
    //       <h2 className="text-lg md:text-xl text-textColor">REVOLUCIONANDO LA AUTOMATIZACIÓN</h2>
    //       <SimpleButton text='Vamos' onClick={()=>{}}/>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
