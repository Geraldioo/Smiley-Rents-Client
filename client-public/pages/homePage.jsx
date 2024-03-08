import { useEffect, useState } from "react";
import CardItem from "../components/Card";
import axios from "axios";
import BASE_URL from "../src/constants";

function HomePage(props) {
  const { getDetail, changePage } = props;
  const [lodgings, setLodging] = useState(null);
  const [param, setParam] = useState(null);

  const search = (input) => {
    setParam({ ...param, search: input });
  };

  const handleSearch = (event) => {
    // console.log(event.target.value, "<<< EVENT");
    const { value } = event.target;
    search(value);
  };
  // console.log(param, "<< INI PARAM");
  async function fetchData() {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/pub/lodgings`,
        params: param,
      });
      // console.log(data, "<<<<");
      setLodging(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [param]);

  return (
    <>
      <div className="container my-5 py-5">
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
        <div className="d-flex justify-content-center mb-4">
          {/* Form pencarian */}
          <form className="me-3" role="search">
            <input
              onChange={handleSearch}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ maxWidth: "300px" }}
            />
          </form>
          {/* Select option pertama */}
       
          {/* Select option kedua */}
          <select
            className="form-select form-control"
            aria-label="Default select example"
          >
            <option selected>Filter By..</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div className="row row-cols-4 g-3">
          {lodgings && lodgings.map((item) => <CardItem lodging={item} />)}
        </div>
      </div>
    </>
  );
}

export default HomePage;

{/* <select
className="form-select me-3 form-control"
aria-label="Default select example"
>
<option selected>Sort By..</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select> */}

// <nav className="navbar navbar-expand-lg bg-secondary py-3 px-5 fixed-top">
//       <div className="container-fluid">
//         <a className="navbar-brand" style={{fontWeight:"bolder"}} href="#">
//           <img src="../src/image/logo.png" style={{width:"60px", paddingLeft:"1rem"}} alt="" />
//           SMILEY Rent Room
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item dropdown">
//               <ul className="dropdown-menu">
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-primary" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
