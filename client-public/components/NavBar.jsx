
function Navbar(props) {
  const { changePage } = props
  return (
    <>
      <nav className="navbar navbar-light bg-warning px-5">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Kzhayin Rent Room</span>
          <div className="d-flex align-items-center">
            <div id="username">Hello User !!</div>
            <button id="logout-button" className="btn btn-outline-danger mx-3" onClick={() => {
              localStorage.removeItem("access_token")
              changePage("login")
            }}>
              Logout
            </button>
          </div>
        </div>
      </nav>  
    </>
  );
}

export default Navbar;
