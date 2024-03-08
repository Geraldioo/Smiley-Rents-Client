import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import BASE_URL from "../src/constant";


function LoginPage() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value, "<<< ini EVENT");
    const { name, value } = event.target;

    // const dynamicIndex = 0
    // newInput[dynamicIndex] = 1

    // newInput.email = ""
    const newInput = {
      ...input,
    };

    newInput[name] = value;

    setInput(newInput);
    // setInput({
    //     ...input,
    //     [name]: value
    // })
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(input, "<<<<< ini INPUT");
    // 1. Panggil axios pake async
    try {
      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL}/login`,
        data: input,
      });
      // 2. Simpan ke localstorage
      console.log(data, "INI DATA");
      localStorage.access_token = data.token;
      localStorage.email = data.user.email
    //   localStorage.setItem("email", data.email)
      // 3. Pindahin halaman ke home
      navigate("/lodgings")
      Swal.fire({
        title: "Success Login",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
        // console.log(error, "<<< INI ERROR");
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 1000,
        showConfirmButton: false
      });
    }
  };

  return (
    <>
      {/* Login Section */}
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5" style={{color:"black"}}>Login Options</h1>
            <span style={{color:"black"}}>
              Log in and autocomplete your order with your personal data, or
              sign up to enjoy all the benefits of your account.
            </span>
          </div>
          <div className="col-12 col-lg-8 offset-lg-2 my-5">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 border-end p-5 text-left">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2019/11/17054922/how-to-make-your-bedroom-feel-like-five-star-hotel-intro.jpg"
                  width="350px"
                  alt="sofa"
                />
              </div>
              <div className="col-10 col-md-6 p-5 text-left">
                <div className="form-signin m-auto">
                  <form id="login-form" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-4 display-5" style={{color:"black"}}>
                      Log in to your account
                    </h1>
                    <span style={{color:"black"}}>
                      Log in on your profile to autocomplete your purchase order
                      with your personal data.
                    </span>
                    <div className="mb-3 mt-3">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="login-email" style={{color:"black"}}>Email</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="login-email"
                        name="email"
                        onChange={handleInputChange}
                        value={input.email}
                        placeholder="Enter email address ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="login-password" style={{color:"black"}}>Password</label>
                        <label className="text-danger text-end fw-bold">
                          *
                        </label>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        value={input.password}
                        id="login-password"
                        placeholder="Enter your password ..."
                        autoComplete="off"
                        required=""
                      />
                    </div>
                    <div className="checkbox mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="login-remember"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="login-remember"
                          style={{color:"black"}}
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                      type="submit"
                    >
                      Log In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Login Section */}
    </>
  );
}

export default LoginPage;
