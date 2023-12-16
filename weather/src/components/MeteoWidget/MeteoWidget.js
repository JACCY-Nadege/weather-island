import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function MeteoWidget({ city, code }) {
   const [temperature, setTemperature] = useState(null);
   const [icon, setIcon] = useState(null);
   const [feels_like, setFeelslike] = useState(null);

  useEffect(() => {

    const API_KEY = '47840f4f526d9cc69b4b575c52495860';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
    .then((response) => {

      setTemperature(Math.round(response.data.main.temp));
      setIcon(response.data.weather[0].icon);
      setFeelslike(Math.round(response.data.main.feels_like));
      
    });

   }, []);

   return (
     <div className='meteo'>
      <div className='meteo-info'>
       <div className='meteo-city'>{city}</div>
       <div className='meteo-code'>{code}</div>
       <div className='meteo-temperature'>{temperature}°</div>
       <div className='meteo-temperature'>{feels_like}°</div>
     </div>
     
     {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />}
     
     </div>


   )
 };
 
 MeteoWidget.propTypes = {
   city: PropTypes.string.isRequired,
   code: PropTypes.string.isRequired,
 }

 export default MeteoWidget;