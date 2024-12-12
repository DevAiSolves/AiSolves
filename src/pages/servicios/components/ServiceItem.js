"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceItem = void 0;
var signo_suma_png_1 = require("../../../assets/signo-suma.png");
var ServiceItem = function (_a) {
    var item = _a.item;
    return (<div className="flex items-center justify-start gap-4 pl-4 w-[40%] cursor-pointer bg-primary/20 h-auto border border-primary rounded-md duration-300 p-4" style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 80% 100%, 0% 100%)",
        }} onClick={function () {
            item.setIsDescriptionActive(function (prev) { return !prev; });
        }}>
    {item.isDescriptionActive ? null : <img src={item.img} alt={item.title}/>}

    <p className="text-white">
      {item.isDescriptionActive ? item.description : item.title}
    </p>
    <img src={signo_suma_png_1.default} alt={"Simbolo de suma"}/>
  </div>);
};
exports.ServiceItem = ServiceItem;
