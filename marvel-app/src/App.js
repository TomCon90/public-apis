import "./App.css";
import Header from "./components/title";
import { useState, useEffect } from "react";
import SelectCat from "./components/pickCat";
import DisplayKittyKat from "./components/displayKittyKat";

function App() {
  const [cat, selectCat] = useState("");

  useEffect(() => {
    console.log("fetching data");

    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].url, "<<<< URL");
        selectCat(data[0].url);
      });
  }, []);

  return (
    <div className="App">
      <Header cat={cat} />
      <SelectCat selectCat={selectCat} cat={cat} />
      <DisplayKittyKat cat={cat} />
    </div>
  );
}

export default App;
