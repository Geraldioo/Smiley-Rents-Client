import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../src/constant";
import { useEffect } from "react";
import Button from "./button";

const Form = ({types}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [input, setInput] = useState({
    name: "",
    imgUrl: "",
    facility: "",
    roomCapacity: "",
    location: "",
    price: "",
    typeId: "",
  });
  //   console.log(input, "<< input");
  const handleInputChange = (event) => {
    // console.log(event.target, "<<< INI EVENT");
    const { name, value } = event.target;

    const newInput = {
      ...input,
      [name]: value,
    };

    // console.log(newInput, "<<< INI NEW INP");
    // console.log(input, "<<< INI INP");

    setInput(newInput);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    let message;
    try {
      if (id) {
        await axios({
          method: "PUT",
          url: `${BASE_URL}/lodgings/${id}`,
          headers: {
            Authorization: "Bearer " + localStorage.access_token,
          },
          data: input,
        });
        message = "Edit";
      } else {
        await axios({
          method: "POST",
          url: `${BASE_URL}/lodgings`,
          headers: {
            Authorization: "Bearer " + localStorage.access_token,
          },
          data: input,
        });
        message = "Add New";
      }

      navigate("/lodgings");
      Swal.fire({
        title: `Succes ${message} Lodgings`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);
      setError(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const fetchDataById = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/lodgings/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      setInput(data);
    } catch (error) {
      console.log(error);
      setError(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataById();
    } else {
      setInput({
        name: "",
        imgUrl: "",
        facility: "",
        roomCapacity: "",
        location: "",
        price: "",
        typeId: "",
      });
    }
  }, [id]);
// console.log(types, "<<< INI TYPE");
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="new-product-section"
      >
        <div className="row ">
          <div className="col-12 col-md-6">
            <form id="product-form" onSubmit={submitForm}>
              <div className="mb-3">
                <label htmlFor="product-name">
                  Name <span className="text-danger fw-bold">*</span>
                </label>
                <input
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="product-name"
                  placeholder="Enter Lodging Name"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-category">
                  Type <span className="text-danger fw-bold">*</span>
                </label>
                <select
                  id="product-category"
                  className="form-select"
                  required=""
                  onChange={handleInputChange}
                  name="typeId"
                  value={input.typeId}
                >
                  <option value="" disabled="">
                    -- Select Types --
                  </option>
                  {types && types.map((el) => (
                  <option value={el.id}>{el.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="product-desc">
                  Facility <span className="text-danger fw-bold">*</span>
                </label>
                <input
                  name="facility"
                  value={input.facility}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="product-desc"
                  placeholder="Enter Lodging Facility"
                  autoComplete="off"
                  required=""
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="product-stock">
                      Room Capacity
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="roomCapacity"
                      value={input.roomCapacity}
                      onChange={handleInputChange}
                      type="number"
                      min={0}
                      className="form-control"
                      id="product-stock"
                      placeholder="Enter Lodging Capacity"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="product-price">
                      Price <span className="text-danger fw-bold">*</span>
                    </label>
                    <input
                      name="price"
                      value={input.price}
                      onChange={handleInputChange}
                      type="number"
                      min={0}
                      className="form-control"
                      id="product-price"
                      placeholder="Enter Lodging Price"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="product-image">Image</label>
                <input
                  name="imgUrl"
                  value={input.imgUrl}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="product-image"
                  placeholder="Enter Lodging Image Url"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-image">Location</label>
                <input
                  name="location"
                  value={input.location}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="product-image"
                  placeholder="Enter Lodging Location"
                  autoComplete="off"
                />
              </div>
                  <Button />
            </form>
          </div>
        </div>
      </section>
      {/* End New Product Section */}
    </>
  );
};

export default Form;
