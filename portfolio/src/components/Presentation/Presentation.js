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
                     <p>Bonjour ! Je m'appelle François-Nicolas et j’ai 28 ans. Après quelques années d’expérience dans le marketing, avec une spécialisation pour le CRM et l’analyse de données, j’ai décidé de réorienter mon avenir professionnel.</p>
                     <p>En 2020, j’ai ainsi débuté une reconversion professionnelle pour devenir développeur web, et obtenu un diplôme de développeur front-end via une formation avec Openclassrooms.</p>
                     <p>Aujourd’hui, mon objectif est de trouver un projet ou un travail dans le développement de sites et/ou applications web pour une agence ou une entreprise.</p>
                     <p>Je code majoritairement en JavaScript et son frameworks REACT et Vue.js.</p>
                  </div>
               </div>

               <div className="about__image">
                  <div className="bloc1"></div>
                  <div className="bloc2"><img src="./images/photo de profil N&B-modified.png" alt="picto-user"/></div>
               </div>
            </div>
         </div>


      </section>
   );
};

export default Presentation;