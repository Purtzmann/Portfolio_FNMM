import React from 'react';

const Presentation = () => {
   return (
      <section id="about" className="about">

         <div className="about__container">

            <div className="about__title">
               <img src="./picto/iconmonstr-user-20-64 white.png" alt="picto-user"/>
               <h2>About me.</h2>
            </div>
            

            <div className="about__content">
               <div className="about__description">
                  <div>
                     <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                     <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                     <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                  </div>
                  <ul>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JAVASCRIPT</li>
                     <li>NODE.JS</li>
                  </ul>
               </div>

               <div className="about__image">
                  <div className="bloc1"></div>
                  <div className="bloc2"><img src="./Images/photo de profil N&B-modified.png" alt="picto-user"/></div>
               </div>
            </div>
         </div>


      </section>
   );
};

export default Presentation;