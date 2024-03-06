function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-warning px-5">
        <div className="container">
          <span className="navbar-brand mb-0 h1">MyAnimeList</span>
          <div className="d-flex align-items-center">
            <div id="username">Hello Weebs !!</div>
            <button id="logout-button" className="btn btn-outline-danger mx-3">
              Logout
            </button>
          </div>
        </div>
      </nav>  
    </>
  );
}

export default Navbar;
