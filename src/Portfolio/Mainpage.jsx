import React, { component } from 'react'

const Mainpage = () => {
  return (
    <>

      <section id="header">
        <nav className="navbar navbar-expand-lg .bg-transparent fs-3 hero-nav">
          <div className="container-fluid ">
            <a className="navbar-brand active  text-light rounded-2 border border-1 px-2" href="/Contacts.jsx">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown" >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-light rounded-2  px-2" aria-current="page" href="#">Aboutpage</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light  rounded-2  px-2" href='#'>Contacts</a>
                </li>

                <li className="nav-item dropdown text-light">
                  <a className="nav-link dropdown-toggle text-light  rounded-2  px-2" href="#" role="button text-light" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='neontext'>
        <h1 className='neon ' data-text="SHANTIPRASAD">SHANTI PRASAD</h1>
        </div>
      </section>


      <section id="hero" >

        <div className="hero contaniner"  >

          <div className='animated-text'>
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