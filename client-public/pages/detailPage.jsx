function DetailPage(props) {
  const { item, key, changePage } = props
    return (
    <>
      <section id="detail">
        <div
          className="container my-5"
          data-aos="zoom-in-up"
        >
          <div className="card p-4">
            <h2>Detail About {item.name}</h2>
            <div className="d-flex gap-4">
              <img
                src={item.imgUrl}
                style={{ height: "22rem", objectFit: "cover" }}
                alt=""
              />
              <div>
                <h2>Name: {item.name}</h2>
                <div className="pt-4">
                  <h5>Facility: {item.facility}</h5>
                  <h5> Room Capacity: {item.roomCapacity} </h5>
                  <h5> Location: {item.location} </h5>
                  <h5> Price: Rp.{item.price} </h5>
                </div>
                <h3 className="pt-4"> Type: {item.Type.name} </h3>
                <div className="position-absolute bottom-0 end-0 p-5">
                  <button
                    className="btn btn-primary mw-100"
                    onClick={() => {
                      changePage("home");
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailPage;
