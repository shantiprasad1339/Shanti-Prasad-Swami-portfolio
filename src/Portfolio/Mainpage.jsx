import React, { component } from 'react'
import Contacts from './Contacts'

const Mainpage = () => {
  return (
    <>

      <section id="header">
      
         
        <div className='neontext'>
        <h1 className='neon '></h1>
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