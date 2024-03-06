function DetailPage({ item, key, changePage }) {
  return (
    <>
      <section id="detail">
        <div className="container my-5">
          <div className="card p-4">
            <h2>Detail About {item.name}</h2>
            <div className="d-flex gap-4">
              <img
                src={item.imgUrl}
                style={{ height: "22rem", objectFit: "cover" }}
                alt=""
              />
              <div>
                <h3>Name: {item.name}</h3>
                <h4>Genre: {item.genre}</h4>
                <h6 className="pt-4"> <h4 className="font-extrabold">Synopis: </h4>{item.synopsis}</h6>
                <div className="position-absolute bottom-0 end-0 p-5">
                  <button className="btn btn-primary mw-100" onClick={() => {
                    changePage("home")
                  }}>Back</button>
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
