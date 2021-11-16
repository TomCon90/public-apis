import "./App.css";
import Header from "./components/title";
import { useState, useEffect } from "react";
import SelectCat from "./components/pickCat";
import DisplayKittyKat from "./components/displayKittyKat";

function App() {
  const [cat, setCat] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log("fetching data");
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].url, "<<<< URL");
        setCat(data[0].url);
        setIsLoading(false);
      });
  }, [count]);

  console.log(count); //console log here to check rendering.

  return (
    <div className="App">
      <Header cat={cat} />
      <SelectCat setCat={setCat} cat={cat} setCount={setCount} />
      <DisplayKittyKat
        cat={cat}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
