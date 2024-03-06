import { useState } from "react";
import Navbar from "../components/NavBar";
// import data from "../data/lodging.json";
import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailPage";
import LoginPage from "../pages/login";


function App() {
  const [page, setPage] = useState("home");
  const [singleData, setSingleData] = useState(null);

  const changePage = (page, item) => {
    setPage(page);
    setSingleData(item)
  };

  return (
    <>
      <Navbar changePage={changePage} />
      {page === "home" && <HomePage changePage={changePage} />}
      {page === "detail" && <DetailPage item={singleData} changePage={changePage} />}
      {page === "login" && <LoginPage changePage={changePage} />}
    </>
  );
}

export default App;
