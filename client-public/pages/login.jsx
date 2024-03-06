import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2'


function LoginPage(props) {
  const { changePage } = props;

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
        url: "https://kzhayin.lodging.web.id/login",
        data: input,
      });
      // 2. Simpan ke localstorage
    //   console.log(data, "INI DATA");
      localStorage.access_token = data.token;
      // 3. Pindahin halaman ke home
      changePage("home");
    } catch (error) {
        // console.log(error, "<<< INI ERROR");
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      {/* Login Section */}
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Login Options</h1>
            <span>
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
                    <h1 className="h3 mb-4 display-5">
                      Log in to your account
                    </h1>
                    <span>
                      Log in on your profile to autocomplete your purchase order
                      with your personal data.
                    </span>
                    <div className="mb-3 mt-3">
                      <div className="d-flex justify-content-between">
                        <label htmlFor="login-email">Email</label>
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
                        <label htmlFor="login-password">Password</label>
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
