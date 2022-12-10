import React, { component } from 'react'

const Mainpage = () => {
  return (
    <>
    
    <section id="header"> 
    <nav class="navbar navbar-expand-lg .bg-transparent fs-3">
  <div class="container-fluid ">
    <a class="navbar-brand active  text-light rounded-2 border border-1 px-2" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-light rounded-2  px-2" aria-current="page" href="#">Aboutpage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light  rounded-2  px-2" href="#">Contacts</a>
        </li>
       
        <li class="nav-item dropdown text-light">
          <a class="nav-link dropdown-toggle text-light  rounded-2  px-2" href="#" role="button text-light" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <h1 className='neon ' data-text="SHANTIPRASAD">SHANTI PRASAD</h1>
      </section>


      <section id="hero" >
      
        <div className="hero contaniner"  >
        
          <div>
            <h1>Hello ,<span></span></h1>
            <h1>My Name is<span></span> </h1>
            <h1 className=''>SHANTI PRASAD<span></span></h1>
            <a href='https://fonts.google.com/specimen/Quicksand?query=qui' type="button" className="btn">Profile</a>
          </div>
        </div>
      </section>

    </>
  )
}

export default Mainpage;