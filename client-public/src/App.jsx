import HomePage from "../pages/homePage";
import Navbar from "../components/NavBar";
import data from "../data/lodging.json";

function App() {
  return (
    <>
      <Navbar/>
      <HomePage data={data} />
    </>
  );
}

export default App;
