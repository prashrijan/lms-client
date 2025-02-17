import { useState } from "react";
import { conf } from "./conf/conf";
import "./App.css";

function App() {
    console.log(conf);
    return <>{conf.reactAppUrl}</>;
}

export default App;
