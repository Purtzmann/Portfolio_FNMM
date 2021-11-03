import React from 'react';

const Nav = () => {
   return (
      <header>
         <div className="container">
            <div className="container__logo">
               <img src="./logo/logo.png" alt="logo"/>
            </div>
            <div className="container__nav">
               <ul>
                  <li><a href="#projects">Projets</a></li>
                  <li><a href="#formation">Formations</a></li>
                  <li><a href="#experience">Experiences</a></li>
                  <li><a href="#contact">Contact</a></li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Nav;