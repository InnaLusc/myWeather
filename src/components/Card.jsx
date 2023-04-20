import React from "react";
import styled from "styled-components";
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official';
import CardDay from "./CardDay";
 

  const Iret = styled.img`
 height: 50px;
 width: 50px;
  `;

 const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  cursor: pointer;
 `;

const CurrentTemp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
width: 14rem;
margin: auto;
padding: 1rem 1rem;
top: 10%;
background-color: #edf5f083;
color: #6d6219;
font-size: 20px ;
border-radius: 15px;
padding: 2rem 2rem ;
margin: 1rem;
`;

const CurrentWeather = styled.div` 
display: flex;
flex-direction: column nowrap;
justify-content: space-between;
gap: 16px;
background-color: #edf5f083;
color: #6d6219;
font-size: 16px ;
border-radius: 15px;
padding: 2rem 2rem ;
margin: 2rem;
`;

const Weather5d = styled.div`
display: flex;
justify-content: end;
align-items: center; 
`;

const Weather5dCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
width: 14rem;
margin: auto;
padding: 1rem 1rem;
top: 10%;
background-color: #edf5f083;
color: #6d6219;
font-size: 20px ;
border-radius: 15px;
padding: 2rem 2rem ;
margin: 1rem;
`;

// const options = {
//   title: {
//     text: 'Weather from 5 day'
//   },
//   series: [{
//     categories: [`1 `, `2`, `3`, `4`, `5` ],
//     data: [1, 2, 3, 4, 5]
//   }]
// }


const Card = ({weather, weather5d}) => {
    // console.log(weather)
    //  console.log(weather5d)
 return(

    <Container>
      <CurrentTemp>
      <Iret src={`https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`}/>
      <span className="city">📍{weather.name}</span>
      <span className="temp">{weather.main.temp} °C</span>
      </CurrentTemp>
      <CurrentWeather>        
        <span className="cel"> Feels Like <p> 🌡️ {weather.main.feels_like} °C </p></span>
        <span className="weter">Wind Speed <p>💨 {weather.wind.speed} m/s </p></span>
        <span className="water">Humidity<p>💧 {weather.main.humidity} %</p></span>
        </CurrentWeather>
        {/* <Weather5d> 
        <HighchartsReact
    highcharts={Highcharts} 
    options={options}
  />
        </Weather5d>  */}
    </Container>
 )
}

export default Card;
