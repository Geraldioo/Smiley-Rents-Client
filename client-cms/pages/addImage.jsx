import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const UploadImg = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const image = event.target.files[0];
    setFile(image);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("image", file);

      const { data } = await axios({});
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="update-product-section"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pt-3 pb-2 mb-3">
              <form id="register-form">
                <h1 className="h3 mb-3 display-1">Update Image</h1>
                {/* <div class="mb-3"> */}
                <div className="input-group mb-3">
                  <input
                    type="file"
                    name="imgUrl"
                    onChange={handleChange}
                    className="form-control pb-2"
                    id="inputGroupFile02"
                    autoComplete="off"
                    required=""
                  />
                </div>
                <button
                  className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                  type="submit"
                >
                  Update Image
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadImg;
