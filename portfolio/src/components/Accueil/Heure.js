import React, { useEffect, useState } from "react";

const date = new Date()

const Heure = () => {

   const[dateTime, setDateTime] = useState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
   });

   useEffect(() => {
      const timer = setInterval(() =>{
         const date = new Date();
         setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
         });
      }, 1000);
      return () => clearInterval(timer)

   },[])

   return (
      <div className="heure">
         <p>{dateTime.hours}:</p><p>{dateTime.minutes}</p><p className="heure__seconds">:{dateTime.seconds}</p>
      </div>
   );
};

export default Heure;