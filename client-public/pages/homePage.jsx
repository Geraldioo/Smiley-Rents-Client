import { useEffect, useState } from "react";
import CardItem from "../components/Card";
import axios from "axios";

function HomePage(props) {
  const { getDetail, changePage } = props
  const [lodgings, setLodging] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://kzhayin.lodging.web.id/pub/lodgings",
      });
      // console.log(data.data, "<<< ini data");
      setLodging(data.data);
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className="row row-cols-4 g-3">
          {lodgings &&
            lodgings.map((lodging) => (
              <CardItem
                lodging={lodging}
                key={lodging.id}
                getDetail={getDetail}
                changePage={changePage}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;

