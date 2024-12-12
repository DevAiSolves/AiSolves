"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
require("./index.css");
var Eventos_1 = require("./pages/events/Eventos");
var Equipo_1 = require("./pages/equipo/Equipo");
var Home_1 = require("./pages/home/Home");
var Blockchain_1 = require("./pages/servicios/Blockchain");
var Marketing_1 = require("./pages/servicios/Marketing");
var Servicios_1 = require("./pages/servicios/Servicios");
var Dashboard_1 = require("./pages/dashboard/Dashboard");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        {/* Ruta principal */}
        <react_router_dom_1.Route path="/" element={<Home_1.Home />}/>

        {/* Ruta para About */}
        <react_router_dom_1.Route path="/events" element={<Eventos_1.Eventos />}/>
        <react_router_dom_1.Route path="/team" element={<Equipo_1.Equipo />}/>
        <react_router_dom_1.Route path="/dashboard" element={<Dashboard_1.Dasboard />}/>

        {/* Rutas anidadas dentro de Dashboard */}
        <react_router_dom_1.Route path="/services" element={<Servicios_1.Servicios />}/>
        <react_router_dom_1.Route path="/services/blockchain" element={<Blockchain_1.Blockchain />}/>
        <react_router_dom_1.Route path="/services/marketing" element={<Marketing_1.Marketing />}/>
        <react_router_dom_1.Route path="/services/marketing" element={<Marketing_1.Marketing />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
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
exports.default = App;
