//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";
//render your react application
let counter = 0;
setInterval(()=>{
   ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter seconds={counter} />) 
   counter++
  },1000)

console.log("hola mundo");
console.log((22 / 10) % 10);