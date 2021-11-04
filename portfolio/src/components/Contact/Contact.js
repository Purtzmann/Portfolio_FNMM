import React from 'react';

const Contact = () => {
   return (
      <div id="contact" className="contact">
            <div className="contact__title">
               <img src="./picto/iconmonstr-linkedin-3-64-white.png" alt="picto-user"/>
               <h2>.Contact</h2>
            </div>
         <div className="contact__information">
            <p>Email: francoisnicolas.marcmartin@gmail.com</p>
            <p>Linkedin: <a href="www.linkedin.com/in/francois-nicolas-marc-martin">www.linkedin.com/in/francois-nicolas-marc-martin</a></p>
         </div>
         <div className="contact__reseau">
            <a href="https://github.com/Purtzmann/"><img className="side__picto" src="./picto/iconmonstr-github-1-64-side.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/francois-nicolas-marc-martin/"><img className="side__picto" src="./picto/iconmonstr-linkedin-3-64-side.png" alt=""/></a>
            <a href="https://twitter.com/Francois2M"><img className="side__picto" src="./picto/iconmonstr-twitter-3-64-side.png" alt=""/></a>
         </div>
      </div>
   );
};

export default Contact;