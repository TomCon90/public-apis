/*Structure Notes First Steps
Create boiler plate React app see notes
WireFrame and Component Tree map out React States
Create Component dir and files under src dir
Build App.js and initial component funtions
Import all the component files in App.JS
Import React useState
Setup the component calls in App JS define prototypes later, dont forget capital first letter for component calls
Console.log each component in the tree akin to backend so we now we are getting in to them
Then import React for each component starting with the main parent in App.js
Next move on to builder Header Component/Function
App.JS now passes what it needs to react for the page to be rendered through the function in the index.js file
*/
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
