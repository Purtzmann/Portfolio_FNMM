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
                     <p>Bonjour! Je m'appelle François-Nicolas, j’ai 28 ans développeur web junior. J’ai commencé dans le monde du travail par du marketing avec une spécialisation pour le CRM et l’analyse de données. </p>
                     <p>En 2020 je me suis lancé dans une reconversion professionnelle pour devenir développeur web spécialisé front-end via une formation avec Openclassrooms.</p>
                     <p>Aujourd’hui mon objectif est de trouver un projet ou un travail dans le  développement de site et application web pour une agence ou un annonceur.</p>
                     <p>Mon langage actuel pour le développement web est le JavaScript et son frameworks REACT</p>
                  </div>
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