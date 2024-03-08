import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-black bg-black px-5 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img className="pl-3" style={{width: "55px"}} src="../src/image/logo.png" alt="logo" />
          <span className="navbar-brand mb-0 h1 ml-3" style={{color: "white"}}>SMILEY Rent Room</span>
        </div>
        <div className="d-flex align-items-center">
          <div id="username" style={{color: "white"}}>Hello There !!</div>
          <Link to={-1}>
          <button id="logout-button" className="btn btn-outline-primary mx-3">
            Home
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
