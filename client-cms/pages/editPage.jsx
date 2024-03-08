import { useState } from "react";
import Form from "../components/form";
import { useEffect } from "react";
import axios from "axios"
import BASE_URL from "../src/constant";
import Swal from "sweetalert2";

const EditPage = () => {
  const [types, setTypes] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/types`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      //   console.log(data, "<<<<");
      //   console.log(localStorage.access_token, "<<< ini data");
      setTypes(data);
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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2 col-md-9 ms-sm-auto col-lg-10 px-md-4">Edit Lodgings</h1>
        </div>
        <Form types={types}/>
      </div>
    </>
  );
};

export default EditPage;
