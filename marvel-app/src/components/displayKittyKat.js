//Step 4 Final step before App.JS renders our web page index.html if statement is for loading while we wait for the async
//return of the cat image asset from the fetch in App.JS we inherit cat as a prop fro state and present to App.JS

function DisplayKittyKat({ cat, isLoading }) {
  //console.log(isLoading, "<<<<<< DisplayKittyKat");
  if (isLoading) return <p>Loading...</p>;
  return (
    <main className="displayCat">
      <img src={cat} alt="cat pic" width="500" height="600" />
    </main>
  );
}

export default DisplayKittyKat;
