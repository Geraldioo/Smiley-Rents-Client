import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import axios from 'axios'
import { BASE_URL } from "../constant";

function HomePage() {
  // console.log("masukk");
  const initialValue = null
  const [defaultData, setData] = useState(initialValue)
  const [params, setParams] = useState({});
  const [page, setPage] = useState()
  const [category, setCategory] = useState()

  function search(keyword) {
    setParams({ ...params, search: keyword });
  }
  function filter(value){
    setParams({...params, filter : value})
  }
  function sort(value){
    if (value === "id") {
      setParams({...params, sort : value})
    }else if(value === "-id"){
      setParams({...params, sort : value})
    }else{
      setParams({...params, sort : undefined})
    }
  }

  function handlingPage(number) {
    // console.log(number);
    setParams({ ...params, "page[number]": number });
  }
  function handleSearchInput(event) { // search
    const { value } = event.target;
    search(value);
  }
  function handleFilterInput(event){
    const { value } = event.target;
    filter(value);
  }
  function handleSortInput(event) {
    const { value } = event.target;
    sort(value);
  }

  
  async function FetchDataCategory(){
    try {
      const {data} = await axios({
        method : "get",
        url : `${BASE_URL}/pub/category`
      })
      setCategory(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FetchDataCategory()
  }, [])

  async function fetchData(){
    try {
      const {data} = await axios({
        method : "get",
        url : `${BASE_URL}/pub/product`,
        params : params
      })
      // console.log(data)
      setPage(data.totalPage)
      setData(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  let totalPage = []
  for (let i = 1; i <= page; i++) {
    totalPage.push(i)
  }
  

  useEffect(()=>{
    fetchData()
  },[params])

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center my-5">Wadidaw Clothing</h2>
        <div className="d-flex justify-content-center mb-5">

      <form className="d-flex" style={{width:"500px"}}role="search" onChange={handleSearchInput}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      
      <form action="" onChange={handleFilterInput}>
          <select className="form-select" name="filter" id="">
            <option value="">Filter...</option>

          {category && category.map((item)=>(
            <option value={item.id} key={item.id}>{item.name}</option>
          )
          )}

          </select>
        </form>

        <form action="" onChange={handleSortInput}>
          <select className="form-select ms-2" name="search" id="">
          <option value="">Sort By</option>
            <option value="id">Newest...</option>
            <option value="-id">Oldest...</option>
          </select>
        </form>
      </div>
        <div className="row row-cols-5 g-3">
        {/* <p className="card-text">asd</p> */}
        {defaultData && defaultData.map((item) => (
            <CardItem item={item} key={item.id}/>
          ))}
        </div>
      </div>
     
      <nav aria-label="Page navigation example" className="d-flex justify-content-center">
  <ul className="pagination" >
    <li className="page-item"><button className="page-link" disabled>Previous</button></li>
    
    {page && totalPage.map((item)=>(
      <li key={item} className="page-item"><button className="page-link" onClick={()=> handlingPage(item)}>{item}</button></li>
    ))}
    
    <li className="page-item"><button className="page-link"disabled>Next</button></li>
  </ul>
</nav>
    </>

  );
}

export default HomePage;