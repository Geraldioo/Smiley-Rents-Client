import CardItem from "../components/Card"

function HomePage ({data, getDetail, changePage}) {
    return (
        <>
        <div className="container my-5">
        <h2 className="mb-5" style={{textAlign: "center", fontFamily: "fantasy", fontSize: "4rem"}}>My Anime List</h2>
        <div className="row row-cols-4 g-3">
          {data.map((item, index) => (
             <CardItem item={item} key={index} getDetail={getDetail} changePage={changePage} />
          ))}
        </div>
      </div>
        </>
    )
}

export default HomePage