import { useEffect, useState } from "react";
import CardItem from "../components/Card";
import axios from "axios";
import BASE_URL from "../src/constants";

function HomePage(props) {
  const { getDetail, changePage } = props;
  const [lodgings, setLodging] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://54.169.245.11/pub/lodgings`
      });
      // console.log(data, "<<<<");
      // console.log(localStorage.access_token, "<<< ini data");
      setLodging(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(fetchData, "<<< INI FETCH");
  console.log(lodgings, "<<< INI data");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container my-5">
        <h2
          className="mb-5"
          style={{
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: "4rem",
          }}
        >
          Lodgings List
        </h2>
        {/* <Link to={`/pub/lodgings/${item.id}`}> */}
        <div className="row row-cols-4 g-3">
        {lodgings && lodgings.map((item) => (
              <CardItem lodging={item} />
              // </Link>;
              ))}
              </div>
      </div>
    </>
  );
}

export default HomePage;
