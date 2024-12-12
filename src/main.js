"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./index.css");
var react_2 = require("thirdweb/react");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
    <react_2.ThirdwebProvider>
      <App_tsx_1.default />
    </react_2.ThirdwebProvider>
  </react_1.StrictMode>);