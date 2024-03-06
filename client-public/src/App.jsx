import { useState } from "react";
import Navbar from "../components/NavBar";
import data from "../data/lodging.json";
import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailPage";

function App() {
  const [page, setPage] = useState("home");
  const [singleData, setSingleData] = useState(null);

  function getDetail(item) {
    setSingleData(item);
  }

  const changePage = (page, item) => {
    setPage(page);
    setSingleData(item)
  };

  return (
    <>
      <Navbar changePage={changePage} />
      {page === "home" && <HomePage data={data} changePage={changePage} />}
      {page === "detail" && <DetailPage data={data} item={singleData} changePage={changePage} />}
    </>
  );
}

export default App;
