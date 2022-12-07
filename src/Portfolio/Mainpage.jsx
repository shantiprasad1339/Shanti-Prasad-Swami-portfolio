import React, { component } from 'react'


const Mainpage = () => {
  return (
    <>
      <section id="header">
        
        <nav>
          
          <ul className='ul'>
            <li><a href="<Aboutpage.jsx/>">Home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contacts</a></li>
            <li><a href="">footer</a></li>
          </ul>
        </nav>
        <h1 className="brand" ><span></span></h1>
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