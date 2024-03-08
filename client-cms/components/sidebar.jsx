import { Link, redirect, useNavigate } from "react-router-dom"

function Sidebar(){
  const navigate = useNavigate()

  function logout(event){
    event.preventDefault()
    // console.log(localStorage.access_token);
      localStorage.clear();

      navigate('/login')
      Swal.fire({
        title: "Succes Logout",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
  }

  return (
    <>
  {/* Sidebar */}
  <nav
    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    id="sidebar-menu"
  >
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">

        <li className="nav-item" style={{cursor : "pointer"}} >
          <Link to={`/lodgings`} className="nav-link" id="nav-category" style={{cursor : "pointer"}}>
            {" "}
            <span className="icon material-symbols-outlined me-2">
              shopping_bag
            </span>
            Products
          </Link> 
        </li>
        
        <li className="nav-item">
        <Link to={`/types`} className="nav-link" id="nav-category" style={{cursor : "pointer"}}>
            {" "}
            <span className="icon material-symbols-outlined me-2">
              category
            </span>
            Types
            </Link> 
        </li>
        <li className="nav-item">
        <Link to={`/add-user`} className="nav-link" id="nav-category" style={{cursor : "pointer"}}>
            {" "}
            <span className="icon material-symbols-outlined me-2">
              account_circle
            </span>
            Add User
          </Link>
        </li>
      </ul>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
        <span>Account</span>
      </h6>
      <ul className="nav flex-column mb-2">
        <li className="nav-item">
          <Link to={`/login`} className="nav-link" id="nav-login" style={{cursor : "pointer"}}>
            {" "}
            <span className="icon material-symbols-outlined me-2" >person</span>
            Hello, {localStorage.email}
          </Link>
        </li>
        <li className="nav-item" onClick={logout}>
          <a className="nav-link" id="nav-logout">
            <span className="icon material-symbols-outlined me-2">logout</span>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/* End Sidebar */}
</>

  )
}

export default Sidebar