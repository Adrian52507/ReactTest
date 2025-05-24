import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="alert alert-primary" role="alert">
      <Message />
    </div>
  );
}

export default App;
