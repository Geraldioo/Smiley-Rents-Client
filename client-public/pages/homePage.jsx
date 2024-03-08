import { useEffect, useState } from "react";
import CardItem from "../components/Card";
import axios from "axios";
import BASE_URL from "../src/constants";

function HomePage() {
  const [lodgings, setLodging] = useState(null);
  const [param, setParam] = useState(null);
  const [types, setTypes] = useState(null);
  const [page, setPage] = useState(null)

  const search = (input) => {
    setParam({ ...param, search: input });
  };
  
  const sort = (value) => {
    if (value === "-id") {
      setParam({ ...param, sort: value });
    } else if (value === "id") {
      setParam({ ...param, sort: value });
    } else {
      setParam({ ...param, sort: undefined });
    }
  };
  
  const filterBy = (value) => {
    setParam({ ...param, filterBy: value });
  };
  // console.log(param, "<<< INI PARAM");
  const handleSearch = (event) => {
    // console.log(event.target.value, "<<< EVENT");
    const { value } = event.target;
    search(value);
  };
  const handleSort = (event) => {
    const { value } = event.target;
    sort(value);
  };
  const handleFilter = (event) => {
    const { value } = event.target;
    filterBy(value);
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
  async function fetchDataType() {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/pub/lodgings/types`,
      });
      // console.log(data, "<<<< D");
      setTypes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDataType();
  }, []);

  useEffect(() => {
    fetchData();
  }, [param]);
  return (
    <>
  <div id="carouselExampleFade" className="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="http://www.new-delhi-hotels.com/blog/wp-content/uploads/2012/09/Room-3.jpg" className="d-block w-100" alt="Slide 1" style={{height: "550px", objectFit: "cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Hello Welcome To Our Website</h5>
        <p>Some representative content about lodgings.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.staticontent.com/media/pictures/248ed6f6-5c49-47a3-8620-706c978e9e18" className="d-block w-100" alt="Slide 2" style={{height: "550px", objectFit: "cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Our Rooms</h5>
        <p>The Design Room Interior Of Our Room.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="http://3.bp.blogspot.com/-jm9x4A7txB8/T0uG0AnxWqI/AAAAAAAAGl8/0A66XrXUDDI/s1600/006815-01-hotel-exterior-pool-night.jpg" className="d-block w-100" alt="Slide 3" style={{height: "550px", objectFit: "cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Facility</h5>
        <p>Some Of Facilities That We Reserve For You.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  <div className="container my-5 py-5">
  <div className="d-flex justify-content-between mb-4">
    {/* Select option pertama */}
    <select
      className="form-select me-3"
      onChange={handleSort}
      aria-label="Sort By"
      style={{ maxWidth: "33%" }}
    >
      <option value="">Sort By..</option>
      <option value="id">Newest..</option>
      <option value="-id">Oldest..</option>
    </select>
    {/* Select option kedua */}
    <select
      onChange={handleFilter}
      className="form-select me-3"
      aria-label="Filter By"
      style={{ maxWidth: "33%" }}
    >
      <option value="">Filter By..</option>
      {types &&
        types.map((el) => 
          <option key={el.id} value={el.id}>{el.name}</option>
        )}
    </select>
    {/* Form pencarian */}
    <form className="me-3" role="search" style={{ maxWidth: "33%" }}>
      <input
        onChange={handleSearch}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  </div>

  <div className="row row-cols-4 g-3">
    {lodgings && lodgings.map((item) => <CardItem key={item.id} lodging={item} />)}
  </div>
<div className="mx-auto p-2" style={{width: "200px"}}>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  </ul>
</nav>
</div>
</div>
    </>
  );
}

export default HomePage;
