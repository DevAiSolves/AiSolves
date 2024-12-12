"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var Back_png_1 = require("../assets/Back.png");
var Header = function (_a) {
    var onClick = _a.onClick;
    return (<header className="flex w-full ">
      <button onClick={onClick} className=" text-primary hover:text-pink-700 transition duration-200">
        <img src={Back_png_1.default} alt="back button"/>
      </button>
    </header>);
};
exports.Header = Header;
