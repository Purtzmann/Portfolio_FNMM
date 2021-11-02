import React from 'react';
import Accueil from '../components/Accueil/Accueil';
import Contact from '../components/Contact/Contact';
import Experiences from '../components/Experience/Experiences';
import Formation from '../components/Formation/Formation';
import Nav from '../components/NavBar/Nav';
import Presentation from '../components/Presentation/Presentation';
import Projets from '../components/Projets/Projets';
import Side from '../components/Side/Side';

const Home = () => {
   return (
      <div className="home">
         <Nav />
         <Side />
         <Accueil />
         <Presentation />
         <Projets />
         <Formation />
         <Experiences />
         <Contact />
      </div>
   );
};

export default Home;