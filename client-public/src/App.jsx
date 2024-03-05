import HomePage from "../pages/homePage";
import data from "../data/lodging.json";

function App() {
  return (
    <>
      <HomePage data={data} />
    </>
  );
}

export default App;
