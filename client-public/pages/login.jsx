import axios from "axios";
import { useState } from "react";

function LoginPage(props) {
  const { changePage } = props;

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event, "<<< ini EVENT");
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

    const handleSubmit = async (event) => {
      event.preventDefault();

      // 1. Panggil axios pake async
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://gc01-p2.naufalsoerya.online/login",
          data: input,
        });
        // 2. Simpan ke localstorage
        localStorage.accessToken = data.accessToken;
        // 3. Pindahin halaman ke home
        changePage("home");
      } catch (error) {
        Swal.fire({
          title: error.response.data,
          icon: "error",
        });
      }
    };
  };
}

export default LoginPage;
