
import { Link } from "react-router-dom";

function CardItem(props) {
  const { lodging } = props
  return (
    <>
    <Link className="text-decoration-none text-black" to={`/pub/lodgings/${lodging.id}`}>
      <div
        className="col shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        style={{ cursor: "pointer" }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="300"
      >
        <div
          className="card"
          style={{ height: "22rem" }}
        >
          <img
            src={lodging.imgUrl}
            className="img-fluid"
            style={{ height: "12rem", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title text-center">{lodging.name}</h5>
            <div className="d-flex justify-content-start mt-5">
              <h6 className="card-text">Price: Rp.{lodging.price}</h6>{" "}
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default CardItem;
