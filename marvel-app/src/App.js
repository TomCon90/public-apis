import "./App.css";
import Header from "./components/title";
import { useState } from "react";
import SelectCharacter from "./components/selectCharacter";
import DisplayStoryboard from "./components/displayStoryboard";

function App() {
  return (
    <div className="App">
      <Header />
      <SelectCharacter />
      <DisplayStoryboard />
    </div>
  );
}

export default App;
