import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TestComponent } from "components";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <TestComponent />
      </div>
    </div>
  );
};

export default App;
