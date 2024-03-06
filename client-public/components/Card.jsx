function CardItem({ lodging, changePage}) {
  return (
    <>
      <div
        className="col"
        style={{ cursor: "pointer" }}
        onClick={() => {
          changePage("detail", lodging);
        }}
      >
        <div className="card" style={{ height: "18rem" }}>
          <img
            src={lodging.imgUrl} className="img-fluid"
            style={{ height: "12rem", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title text-center">{lodging.name}</h5>
            <div className="container">
            <p className="card-text text-center">Price: Rp.{lodging.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;





