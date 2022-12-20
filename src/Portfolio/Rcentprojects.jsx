import React from 'react'

const Rcentprojects = () => {
  return (
    <>
   <section id="projects">
         <div class="project-container">
            <div class="project-header">
                <h1 class="section-title"><span>Re</span>cent <span>Pro</span>jects</h1>
            </div> 
            <div class="all-projects">
                <div class="project-items">
               
                <div class="project-img">
                    <img src="images/img1.jpg" alt="img"></img>
                </div>
                <div class="project-info">
                    <h1><a href="#">Project 1 </a></h1>
                    <h2>a Netflix clone </h2>
                    <h3>I have crteated netflix clone website using omdb api</h3> 
                </div>
                
            </div>
            <div class="project-items">
                <div class="project-info">
                    <h1><a href="#">Project 2</a></h1>
                    <h2>A Pokemon api based project</h2>
                    <h3>i have created small project using pokemon api</h3>
                </div>
                <div class="project-img">
                    <img src="images/pokemon.jpg" alt="img"></img>
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