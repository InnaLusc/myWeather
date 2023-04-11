import React from "react";
import styled from "styled-components";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

 
 
 const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 14rem;
  margin: auto;
  padding: 2rem 1rem;
  position: relative;
  top: 10%;
  background-color: #edf5f083;
  color: #6d6219;
  font-size: 20px ;
  border-radius: 15px;
  padding: 2rem 2rem ;
  margin: 1rem;
  
  cursor: pointer;
  border: 6px solid #ffffff;

  outline: none;
  &:hover {
    font-family: 'Outfit', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: 550px;
    height: 550px;
    font-size: 40px;
    gap: 20px;
    background-color: #e4e4dfd2;
    color: #6d6219;
  }
 `;
 const Span = styled.span`
  height: 700px;
  margin: auto;
  padding: 2rem 1rem;
  position: relative;
  gap: 20px;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
       `;
const CurrentWeather = styled.div` `;
const Weather5d = styled.div` `;

const options = {
  title: {
    text: 'Weather from 5 day'
  },
  series: [{
    data: [1, 2, 3]
  }]
}


const Card = ({weather, weather5d}) => {
    // console.log(weather)
     console.log(weather5d)
 return(

    <Container>
      <CurrentWeather>
        <span className="city">{weather.name}</span>
        <span className="temp">{weather.main.temp}°C</span>
        <span className="cel">{weather.main.feels_like}°C</span>
        <span className="weter">{weather.wind.speed}m/s</span>
        <span className="water">{weather.main.humidity}%</span>
        </CurrentWeather>
        <Weather5d>
        <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
        </Weather5d>

    </Container>
 )
 
}

export default Card;
// console.log(weather)
// console.log(weather5d)
// return <div>Card
// { <Doughnut data={weather5d.list} /> }
// </div>;