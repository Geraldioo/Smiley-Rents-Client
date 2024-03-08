function Navbar() {
  return (
    <nav className="navbar navbar-black bg-warning px-5 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img className="pl-3" style={{width: "55px"}} src="../src/image/logo.png" alt="logo" />
          <span className="navbar-brand mb-0 h1 ml-3">SMILEY Rent Room</span>
        </div>
        <div className="d-flex align-items-center">
          <div id="username">Hello User !!</div>
          <button id="logout-button" className="btn btn-outline-danger mx-3">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
