import { useEffect, useState } from "react";
// import CardItem from "../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import BASE_URL from "../src/constant";
import Swal from "sweetalert2";

function MainPage() {
  const [lodgings, setLodging] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/lodgings`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      //   console.log(data, "<<<<");
      //   console.log(localStorage.access_token, "<<< ini data");
      setLodging(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  }

  const deleteData = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `${BASE_URL}/lodgings/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      fetchData();

      lodgings.map((lodging) => {
        Swal.fire({
          title: `${lodging.name} Has Been Deleted`,
          icon: "warning",
          timer: 2000,
          showConfirmButton: false,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="product-section"
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2" style={{ color: "black" }}>
            Products
          </h1>
          <Link to={`/lodgings/add`} className="ms-3">
            <button className="btn btn-primary rounded-pill" id="new-product">
              <span className="icon material-symbols-outlined">add</span>New
              Lodgings
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col" width="180px">
                    Image
                  </th>
                  <th scope="col" width="250px">
                    Facility
                  </th>
                  <th scope="col">Room Capacity</th>
                  <th scope="col">Location</th>
                  <th scope="col">Price</th>
                  <th scope="col">Author</th>
                  <th scope="col" width="50px" />
                </tr>
              </thead>
              <tbody id="table-product">
                {lodgings &&
                  lodgings.map((lodging, index) => (
                    <tr key={index}>
                      <td scope="row">{index + 1}</td>
                      <td className="fw-bold">{lodging.name}</td>
                      <td>
                        <img src={lodging.imgUrl} className="img-fluid" />
                      </td>
                      <td>{lodging.facility}</td>
                      <td>{lodging.roomCapacity}</td>
                      <td>{lodging.location}</td>
                      <td className="fw-bold">Rp{lodging.price}</td>
                      <td>{lodging.User.email}</td>
                      <td>
                        <span className="d-flex">
                            <span
                              onClick={() => {
                                deleteData(lodging.id);
                              }}
                              className="icon material-symbols-outlined text-danger" style={{cursor: "pointer"}}
                            >
                              delete
                            </span>
                          <Link to={`/lodgings/${lodging.id}`} className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              edit
                            </span>
                          </Link>
                          <Link to={`/uploadImg/${lodging.id}`} className="ms-3">
                            <span className="icon material-symbols-outlined text-danger">
                              image
                            </span>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default MainPage;
