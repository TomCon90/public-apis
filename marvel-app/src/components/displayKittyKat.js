// import { useState } from "react";

function DisplayKittyKat({ cat, isLoading, setIsLoading }) {
  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <img src={cat} alt="cat pic" width="500" height="600" />
    </main>
  );
}

export default DisplayKittyKat;
