function CardItem({ item, changePage}) {
  return (
    <>
      <div
        className="col"
        style={{ cursor: "pointer" }}
        onClick={() => {
          changePage("detail", item);
        }}
      >
        <div className="card" style={{ height: "18rem" }}>
          <img
            src={item.imgUrl} className="img-fluid"
            style={{ height: "12rem", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title text-center">{item.name}</h5>
            <p className="card-text text-center">Genre: {item.genre}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;





