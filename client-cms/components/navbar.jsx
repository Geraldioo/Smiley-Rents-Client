import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
  {/* Navbar */}
  <header
    className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
    id="navbar"
  >
    <Link to={"/"} className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
      <img
        src="https://i.pinimg.com/564x/90/57/eb/9057eb400353ef31192607a4b5aca22b.jpg"
        width={45}
        className="d-inline-block me-2"
        alt="IDEA"
      />
      Admin Panel
    </Link>
    <button
      className="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebar-menu"
      aria-controls="sidebar-menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  </header>
  {/* End Navbar */}
</>
    )
}

export default Navbar