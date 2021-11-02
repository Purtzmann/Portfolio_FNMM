import React from 'react';

const Formation = () => {
   return (
      <section id="formation" className="formation">

         <div className="formation__container">

            <div className="formation__title">
               <img src="./picto/iconmonstr-linkedin-3-64-white.png" alt="picto-user"/>
               <h2>.Curriculum Vitae</h2>
            </div>
         
            <div className="formation__content">

               <div className="formation__image">
                  <img src="./Images/laptop-g518aa136d_1280.png"/>
               </div>

               <div className="formation__description">

                  <div className="formation__description__study openclassrooms">
                     <div className="formation__date"><p>2020</p></div>
                     <div className="formation__logo"><img src="./logo_formation/openClassRooms_100px.png"/></div>
                     <div className="formation__name">
                        <p>OPENCLASSROOMS</p>
                        <p>Web Developper</p>
                     </div>
                  </div>

                  <div className="formation__description__study esdes">
                     <div className="formation__date"><p>2017</p></div>
                     <div className="formation__logo"><img src="./logo_formation/esdes_100px.png"/></div>
                     <div className="formation__name">
                        <p>ESDES</p>
                        <p>Master Marketing</p>
                     </div>
                  </div>

                  
                  <div className="formation__description__study baccalaureat">
                     <div className="formation__date"><p>2020</p></div>
                     <div className="formation__logo"><img src="./logo_formation/iconmonstr-school-21-96.png"/></div>
                     <div className="formation__name">
                        <p>BACCALAUREAT</p>
                        <p>ES option Mathématique</p>
                     </div>
                  </div>

               </div>
            </div>
         </div>

      </section>
   );
};

export default Formation;