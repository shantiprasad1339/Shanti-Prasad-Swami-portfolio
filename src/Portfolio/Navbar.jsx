import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      
    
      <nav class="navbar navbar-expand-lg bg-dark  nav-pills   text-light" >
  <div class="container-fluid">
  <Link to="/" className="navbar-brand text-light fs-4  ">Home</Link>
    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  "></span>
    </button>
    <div class="collapse navbar-collapse  text-light" id="navbarNav">
      <ul className="nav justify-content-center">
        <li class="nav-item">
          <Link to="/Technicalskills" class="nav-link  text-light fs-4" aria-current="page" >Tech</Link>
        </li>
        <li class="nav-item ">
        <Link to="/Rcentprojects" class="nav-link  text-light fs-4" aria-current="page" >Projects</Link>
        </li>
        <li class="nav-item">
        <Link to="/Aboutpage" class="nav-link  text-light fs-4" aria-current="page" >About</Link>
        </li>
        <li class="nav-item">
        <Link to="/Contacts" class="nav-link  text-light fs-4" aria-current="page" >Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Navbar;