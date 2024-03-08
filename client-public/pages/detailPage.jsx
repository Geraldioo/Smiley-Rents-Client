import axios from "axios";
import BASE_URL from "../src/constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function DetailPage(props) {
  const [lodging, setLodging] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/pub/lodgings/${id}`,
      });
      // console.log(data, "<<< INI DATA DI DETAIL");
      setLodging(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(lodging, "<<< INI DETAIL");
  return (
    <>
      <section id="detail">
        {lodging && (
          <div className="container my-5" data-aos="zoom-in-up">
            <div className="card p-4">
              <h2>Detail About {lodging.name}</h2>
              <div className="d-flex gap-4">
                <img
                  src={lodging.imgUrl}
                  style={{ height: "22rem", objectFit: "cover" }}
                  alt=""
                />
                <div>
                  <h2>Name: {lodging.name}</h2>
                  <div className="pt-4">
                    <h5>Facility: {lodging.facility}</h5>
                    <h5> Room Capacity: {lodging.roomCapacity} </h5>
                    <h5> Location: {lodging.location} </h5>
                    <h5> Price: Rp.{lodging.price} </h5>
                  </div>
                  <h3 className="pt-4"> Type: {lodging.Type.name} </h3>
                  <div className="position-absolute bottom-0 end-0 p-5">
                    <Link to={"/pub/lodgings"}>
                      <button className="btn btn-primary mw-100">Back</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default DetailPage;
