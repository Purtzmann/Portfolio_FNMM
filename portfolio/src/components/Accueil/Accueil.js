import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../redux/Slices/weatherSlices";
import Heure from './Heure';

const Accueil = () => {

	const dispatch = useDispatch();
	useEffect(() =>{
		dispatch(fetchWeatherAction("La Rochelle"))
	},[])
	
	const state = useSelector(state => state);
	const { weather, loading, error} = state;

   return (
      <section className="accueil">

         <div className="accueil__meteo">
            <div className="accueil__meteo--heure">
               <div className="bulletPoint">
                  <div className="bulletPoint__bar"></div>
                  <div className="bulletPoint__point"></div>
               </div>
               <div><Heure /></div>
            </div>
            <div className="accueil__meteo--picture">
               <div className="bulletPoint">
                  <div className="bulletPoint__bar"></div>
                  <div className="bulletPoint__point"></div>
               </div>
               <div><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" className="logo-meteo"></img></div>
            </div>
            <div className="accueil__meteo--temp">
               <div className="bulletPoint">
                  <div className="bulletPoint__bar"></div>
                  <div className="bulletPoint__point"></div>
               </div>
               <div><p>{Math.round((((weather?.main.temp)-32)/2)*0.1)}°</p></div>
            </div>
         </div>

         <div className="accueil__informations">
            <div className="informations">
               <h2 className="informations__bonjour">Bonjour, je suis</h2>
               <p className="informations__identite">François-Nicolas Marc-Martin,</p>
               <p className="informations__metier">Developpeur Web. </p>
               <p className="informations__presentation">Je suis un ingénieur logiciel spécialisé dans la création (et parfois la conception) d'expériences numériques exceptionnelles. Actuellement, je me concentre 
                  sur la création de produits accessibles et centrés sur l'humain chez Upstatement.</p>
            </div>

            <div>
               <button>En savoir plus</button>
            </div>
         </div>
      </section>
   );
};

export default Accueil;