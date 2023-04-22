import React from "react";
import styled from "styled-components";
import CardDay from "./CardDay";
 

 const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 40px;
  cursor: pointer;
 `;
 const Iret = styled.img`
 height: 100px;
 width: 100px;
  `;
const CurrentTempName = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
gap: 30px;
/* top: 10%; */
/* background-color: #edf5f083; */
color: #6d6219;
font-family: serif;
font-size: 40px ;
/* border-radius: 15px; */
`;

const CurrentInfo = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;

gap: 20px;
background-color: #edf5f083;
color: #6d6219;
font-size: 20px ;
border-radius: 15px;
padding: 2rem 2rem ;
margin: 2rem;
`;


const Card = ({weather}) => {
  console.log(weather);
 return(
    <Container>
      <CurrentTempName>
      <Iret src={`https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`}/>
      <span className="city">{weather.name}</span>
      <span className="temp">{weather.main.temp} °C</span>
      </CurrentTempName>
      <CurrentInfo>        
        <span className="cel">🌡️ Feels Like {weather.main.feels_like} °C </span>
        <span className="cel">⇧ Max  {weather.main.temp_max} °C </span>
        <span className="cel">⇩  Min  {weather.main.temp_min} °C </span>
        <span className="weter">💨 Wind Speed {weather.wind.speed} m/s </span>
        <span className="water">💧 Humidity {weather.main.humidity} %</span>
      </CurrentInfo>
    </Container>
 )
}

export default Card;
