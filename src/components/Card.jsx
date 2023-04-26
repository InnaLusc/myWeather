import React from "react";
import styled from "styled-components";
 

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
max-width: 500px;
height: 400px;
gap: 30px;
color: #d9d9d7;
font-family: serif;
font-size: 40px ;
`;

const CurrentInfo = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 400px;
height: 300px;
border-radius: 35px;
backdrop-filter: blur(0px);
-webkit-backdrop-filter: blur(0px);
border: 5px solid rgba(255, 255, 255, 1);
background-color: #edf5f083;
color: #6d6219;
object-fit:cover;
gap: 20px;
font-size: 20px ;
border-radius: 15px;
padding: 2rem 2rem ;
margin: 2rem;
`;

const Card = ({weather}) => {
 return(
    <Container>
      <CurrentTempName>
      <Iret src={`https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png`}/>
      <span className="city">{weather.name}</span>
      <span className="temp">{weather.main.temp.toFixed()} °C</span>
      </CurrentTempName>
      <CurrentInfo>        
        <span className="cel">🌡️ Feels Like {weather.main.feels_like.toFixed()} °C </span>
        <span className="cel">⇧ Max  {weather.main.temp_max.toFixed()} °C </span>
        <span className="cel">⇩  Min  {weather.main.temp_min.toFixed()} °C </span>
        <span className="weter">💨 Wind Speed {weather.wind.speed.toFixed()} m/s </span>
        <span className="water">💧 Humidity {weather.main.humidity} %</span>
      </CurrentInfo>
    </Container>
 )
}

export default Card;
