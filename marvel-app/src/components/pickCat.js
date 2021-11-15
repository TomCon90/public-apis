function SelectCat({ cat, setCat, setCount }) {
  return (
    <section>
      <h2>Select Kitty;</h2>
      <button
        key={cat}
        value={cat}
        onClick={(cat) => {
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
