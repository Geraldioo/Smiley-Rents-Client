import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <div className="row mt-5 mb-3">
        <div className="col-6">
          <Link to={-1} className="btn btn-lg btn-light rounded-pill w-100 p-2">
            Cancel
          </Link>
        </div>
        <div className="col-6">
          {/* <Link to={"/lodgings"}> */}
          <button
            className="btn btn-lg btn-primary rounded-pill w-100 p-2"
            type="submit"
          >
            Submit
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Button;
