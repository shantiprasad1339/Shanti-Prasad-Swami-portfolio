import React from 'react'

const Technicalskills = () => {
  return (
    <>
   
     <section id="services">
        <div className="services container">
            <div clasNames="services-top">
                <h1 className="section-title">Tech<span>nical </span> Skills</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget vehicula . Proin porta ullamcorper enim ac suscipit. Praesent libero magna</h3>
            </div>
            <div className="services-bottom">
                <div className="services-item">
                    <div className="icons">
                        <img src="images/html.png" alt="" className='image'/></div>
                     <h2> HTML Language </h2> 
                    <p>Lorem ipsum dolor sit amet,  . Proin porta ullamcorper enim ac suscipit. Praesent libero magna, tempor sit amet justo semper,</p> 
                    </div>
                   <div className="services-item">
                    <div className="icons">
                        <img src="images/CSS.png" alt="" ></img></div>
                     <h2>CSS Language </h2> 
                     <p>Lorem ipsum dolor sit amet, c. Proin porta ullamcorper enim ac suscipit. Praesent libero magna, tempor sit amet justo semper,</p>
                    </div>
                   <div className="services-item">
                    <div className="icons">
                        <img src="images/javascript.png" alt=""></img></div>
                     <h2>Java Script </h2> 
                     <p>Lorem ipsum dolor sit amet,  . Proin porta ullamcorper enim ac suscipit. Praesent libero magna, tempor sit amet justo semper,</p>      
                    </div>
                   <div className="services-item">
                    <div className="icons">
                        <img src="images/reactpng.png" alt=""></img></div>
                     <h2> React Js. </h2>  
                    <p>I have good knowledge of Reactjs framework.Including how to fetch api with axios,react hooks and react-router-dom etc.</p> 
                   </div>
            </div>   
        </div>
       </section>
       
        </>
  )
}

export default Technicalskills;