import React from "react";

//only for index.js we need react dom to hook the elemnt whefre whole app is contained

import ReactDOM from "react-dom";

//whole react application is under div root in the index.hljs-template-variable

import App from "./App"; //its the main componenet

ReactDOM.render( < App / > , document.getElementById("root")); //1st param-comp we want to render-APP,2nd comp- elemnt we want to hook up to