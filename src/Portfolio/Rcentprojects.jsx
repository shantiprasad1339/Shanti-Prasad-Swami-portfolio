import React from 'react'

const Rcentprojects = () => {
  return (
    <>
   <section id="projects">
         <div className="project-container">
            <div className="project-header">
                <h1 className="section-title"><span>Re</span>cent <span>Pro</span>jects</h1>
            </div> 
            <div className="all-projects">
                <div className="project-items mt-4">
               
                <div className="project-img">
                    <img src="images/netflixlogo.png" alt="img"></img>
                </div>
                <div className="project-info">
                    <h1><a href="#">Project 1 </a></h1>
                    <h2>a Netflix clone </h2>
                    <h3>I have crteated netflix clone website using omdb api</h3> 
                </div>
                
            </div>
            <div className="project-items mt-4">
                <div className="project-info">
                    <h1><a href="#">Project 2</a></h1>
                    <h2>A Pokemon api based project</h2>
                    <h3>i have created small project using pokemon api</h3>
                </div>
                <div className="project-img">
                    <img src="images/pokemon.jpg" alt="img"></img>
                </div>
            </div>
            <div className="project-items mt-4">
               
                <div className="project-img">
                    <img src="images/download.png" alt="img"></img>
                </div>
                <div className="project-info">
                    <h1><a href="#">Project 3 </a></h1>
                    <h2>A Imdb project</h2>
                    <h3>I have crteated a movie search project.In this project you can search any movie or web series </h3> 
                </div>
                
            </div>
            <div className='tip'>
            <h3>All Project Source Code Available On My GitHub Account</h3>
            <h4>Thank-You</h4>
           
            </div>
        </div>
         </div>
     </section>
        </>
  )
}

export default Rcentprojects;