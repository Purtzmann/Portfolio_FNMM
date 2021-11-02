import React from 'react';

const Experiences = () => {
   return (
      <section id="experience" className="experience">

         <div className="experience__container">

            <div className="experience__title">
               <img src="./picto/iconmonstr-linkedin-3-64.png" alt="picto-user"/>
               <h2>.Curriculum Vitae</h2>
            </div>
         
            <div className="experience__content">

               <div className="experience__description">

                  <div className="experience__description__study">
                     <div className="experience__date"><p>2020</p></div>
                     <div className="experience__logo"><img src="./logo_formation/eauvive_100px.png"/></div>
                     <div className="experience__name">
                        <p>L'Eau Vive</p>
                        <p>Chargé de marketin relationnel</p>
                     </div>
                  </div>

                  <div className="experience__description__study">
                     <div className="experience__date"><p>2019</p></div>
                     <div className="experience__logo"><img src="./logo_formation/lvc_100px.png"/></div>
                     <div className="experience__name">
                        <p>La Vie Claire</p>
                        <p>Chargé de marketin relationnel</p>
                     </div>
                  </div>

                  
                  <div className="experience__description__study">
                     <div className="experience__date"><p>2018</p></div>
                     <div className="experience__logo"><img src="./logo_formation/coteclient_100px.png"/></div>
                     <div className="experience__name">
                        <p>Côté Client</p>
                        <p>Chargé d'études</p>
                     </div>
                  </div>

                  <div className="experience__description__study">
                     <div className="experience__date"><p>2017</p></div>
                     <div className="experience__logo"><img src="./logo_formation/decitre_100px.png"/></div>
                     <div className="experience__name">
                        <p>Decitre</p>
                        <p>Chargé de mission marketing</p>
                     </div>
                  </div>

               </div>

               <div className="experience__image">
                  <img src="./Images/laptop-g518aa136d_1280.png"/>
               </div>
            </div>
         </div>

      </section>
   );
};

export default Experiences;