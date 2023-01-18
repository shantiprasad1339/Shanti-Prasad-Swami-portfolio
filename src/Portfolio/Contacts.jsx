import React from 'react'

const Contacts = () => {
  return (
    <>
    <div id="contect">
    <div className="contect container">
       <h1 className="section-title titleclass">Contact <span> info</span></h1>
         <div className="contect-items">
          <div className="contect-item">
            <div className="contect-icon">
                    <img src="images/R68ab91.png" alt="img"></img>
             </div>
              <div className="contect-info">
                    <h1>Phone No.</h1>
                    <h2>+91 7821805002</h2>
                </div>
             </div>
        <div className="contect-item Mail">
            <div className="contect-icon">
             <img src="images/Circle-icons-mail.png" alt="img"></img>
              </div>
               <div className="contect-info ">
                <h1>E-Mail</h1>
                <h2><a href="#">shantiprasad1339@gmail.com</a> </h2>
              </div>
          </div>
       <div className="contect-item">
         <div className="contect-icon">
            <img src="images/854878.png" alt="img"></img>
          </div>
          <div className="contect-info">
            <h1>Address</h1>
            <h2>Bhatipura, Makrana, Rajesthan, 341505</h2>
        </div>
</div>
        </div>
    </div>
</div>

<div id="footer">
    <div className="footercontainer">
        <div className="brand1"><h1><span>Shanti </span>Prasad <span>Swami</span></h1>
        <h2>Your complete Web Solution</h2>
       </div>
        <div className="soical-items">
            <div className="social-icon">
                <a href="https://www.facebook.com/shantiprasad.swami"><img src="images/icons8-facebook-100.png" alt="img"></img></a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/vaishnav_shan07/"><img src="images/icons8-instagram-50.png" alt=""></img></a>
            </div>
            <div className="social-icon">
                <a href="#"><img src="images/icons8-twitter-100.png" alt=""></img></a>
            </div> <div className="social-icon">
                <a href="#"><img src="images/icons8-whatsapp-50.png" alt=""></img></a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/shantiprasad1339?tab=repositories"><img src="images/github-icon.png" alt=""></img></a>
            </div>
        </div>
    </div>
</div>

        </>
  )
}

export default Contacts;