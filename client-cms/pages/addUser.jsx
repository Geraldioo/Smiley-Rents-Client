import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../src/constant";
import Swal from "sweetalert2";

const AddUser = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newInput = {
        ...input,
        [name]: value
    }

    setInput(newInput)
  };

  console.log(input, "<<<");

  const submitForm = async (event) => {
    event.preventDefault()
    try {
        await axios ({
            method: "POST",
            url: `${BASE_URL}/add-user`,
            headers: {
                Authorization: "Bearer " + localStorage.access_token
            },
            data: input
        })
        navigate("/")
        Swal.fire({
            title: `Added New Staff`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
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

  return (
    <>
      <>
        {/* New User Section */}
        <section
          className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          id="new-user-section"
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="pt-3 pb-2 mb-3 border-bottom">
                <form id="register-form" onSubmit={submitForm}>
                  <h1 className="h3 mb-3 display-1">Register User</h1>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="register-email">Email</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      name="email"
                      onChange={handleInputChange}
                      type="email"
                      className="form-control"
                      id="register-email"
                      placeholder="Enter email address ..."
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="register-password">Password</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      name="password"
                      onChange={handleInputChange}
                      type="password"
                      className="form-control"
                      id="register-password"
                      placeholder="Enter password ..."
                      autoComplete="off"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="register-phone">Phone Number</label>
                    <input
                      name="phoneNumber"
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      id="register-phone"
                      placeholder="Enter phone number (optional) ..."
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="register-address">Address</label>
                    <textarea
                      name="address"
                      onChange={handleInputChange}
                      id="register-address"
                      className="form-control"
                      rows={3}
                      placeholder="Enter address (optional) ..."
                      autoComplete="off"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End New User Section */}
      </>
    </>
  );
};

export default AddUser;
