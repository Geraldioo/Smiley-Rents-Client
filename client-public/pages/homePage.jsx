import CardItem from "../components/Card"

function HomePage ({data}) {
    return (
        <>
        <div className="container my-5">
        <h2 className="text-center my-5">Lodgings List</h2>
        <div className="row row-cols-4 g-3">
          {data.map((item, index) => (
            <CardItem item={item} key={index} />
          ))}
        </div>
      </div>
        </>
    )
}

export default HomePage