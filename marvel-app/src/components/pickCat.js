//Step 3 build the pickCat.js setup useCount as a useState in App.js and access it as a counter variable, on click
//increment the value of oldCount i.e counter variable by 1 do not use ++, this value is for use on the exit clause of
//of the onEffect function so that we do a new fetch each time and dont cause an infinite loop, note this would cause
//CORS issue
//Install and import mui for the CCS predefined buttons and styling
import { Chip } from "@mui/material";

function SelectCat({ cat, setCount }) {
  return (
    <section className="selectCat">
      <h2>Select Kitty;</h2>
      <Chip
        id="SelectCatbttn"
        key={cat}
        label="Select Cat"
        onClick={() => {
          setCount((oldCount) => {
            return oldCount + 1;
          });
        }}
      ></Chip>
    </section>
  );
}

export default SelectCat;
