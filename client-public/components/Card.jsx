function CardItem({ item }) {
  return (
    <>
      <div
        className="col"
        style={{ cursor: "pointer" }}
        onClick={() => {
          getDetail(item);
        }}
      >
        <div className="card" style={{ height: "30rem" }}>
          <img
            src={item.imgUrl}
            style={{ height: "12rem", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5><br/>
            <p className="card-text">Facility: {item.facility}</p>
            <p className="card-text">Room Capacity: {item.roomCapacity}</p>
            <p className="card-text">Address: {item.location}</p>
            <p className="card-text">Price: Rp.{item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem