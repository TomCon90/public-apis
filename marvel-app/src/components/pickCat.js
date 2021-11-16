//Step 3 build the pickCat.js setup useCount as a useState in App.js and access it as a counter variable, on click
//increment the value of oldCount i.e counter variable by 1 do not use ++, this value is for use on the exit clause of
//of the onEffect function so that we do a new fetch each time and dont cause an infinite loop, note this would cause
//CORS issue
function SelectCat({ cat, setCount }) {
  return (
    <section>
      <h2>Select Kitty;</h2>
      <button
        key={cat}
        value={cat}
        onClick={() => {
          setCount((oldCount) => {
            return oldCount + 1;
          });
        }}
      >
        Change My Kitty
      </button>
    </section>
  );
}

export default SelectCat;
