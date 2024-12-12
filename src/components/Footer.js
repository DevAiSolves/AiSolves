"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_router_dom_1 = require("react-router-dom");
var AiSolves_png_1 = require("../assets/AiSolves.png");
var SimpleButton_1 = require("./buttons/SimpleButton");
var Footer = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var navigateToServices = function () {
        navigate("/services");
    };
    var navigateToPortfolio = function () {
        navigate("/events");
    };
    var navigateToAboutUs = function () {
        navigate("/team");
    };
    var navigateToWhitepaper = function () {
        navigate("/");
    };
    var navigateToDashboard = function () {
        navigate("/dashboard");
    };
    var buttons = [
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
    return (<footer className="relative flex-wrap mt-10 w-full flex justify-center items-center space-x-8 text-xs">
      <p className="absolute left-0 text-primary">
        {"<< HAZ SCROLL Y DESCUBRE >>"}
      </p>
      <img src={AiSolves_png_1.default} alt="AiSolves" className="max-w-xs max-h-10"/>
      {buttons.map(function (item) { return (<SimpleButton_1.default text={item.text} onClick={item.onClick} key={item.text}/>); })}
      <SimpleButton_1.default text={"Dashboard"} onClick={navigateToDashboard} alwaysShadow={true}/>
    </footer>);
};
exports.Footer = Footer;
exports.default = exports.Footer;
