import React from 'react'

const Technicalskills = () => {
  return (
    <>
   
     <section id="services" className='grid text-center'>
        <div className="services container ">
            <div clasNames="services-top ">
                <h1 className="section-title">Tech<span>nical </span> Skills</h1>
                <h2 className='text-light'>These are my Technicalskills that i have mastered</h2>
            </div>
            <div className="services-bottom  ">
                <div className="services-item ">
                    <div className="icons">
                        <img src="images/html.png" alt="" className='image'/></div>
                     <h2> HTML Language </h2> 
                    <p>I have excellent knowledge of html5.Html is core element of any website that`s why i have know most of usefull elements of html. </p> 
                    </div>
                   <div className="services-item ">
                    <div className="icons">
                        <img src="images/CSS.png" alt="" ></img></div>
                     <h2>CSS Language </h2> 
                     <p>Lorem ipsum dolor sit amet, c. Proin porta ullamcorper enim ac suscipit. Praesent libero magna, tempor sit amet justo semper,</p>
                    </div>
                   <div className="services-item">
                    <div className="icons">
                        <img src="images/javascript.png" alt=""></img></div>
                     <h2>Java Script </h2> 
                     <p >I`ve got good knowledge of javascript. i know features of es6 version.Like event handling,arrow-function,fetch-api etc.</p>      
                    </div>
                   <div className="services-item">
                    <div className="icons">
                        <img src="images/reactpng.png" alt=""></img></div>
                     <h2> React Js. </h2>  
                    <p>I have good knowledge of Reactjs framework.Including how to fetch api with axios,react hooks and react-router-dom etc.</p> 
                   </div>
                   <div className="services-item">
                    <div className="icons">
                        <img src="images/bootstrap.png" alt=""></img></div>
                     <h2> Bootstrap </h2>  
                    <p>I have good knowledge bootstrap classes, I know how to use bootstrap css classes,utilities.</p> 
                   </div>
            </div>   
        </div>
       </section>
       
        </>
  )
}

export default Technicalskills;