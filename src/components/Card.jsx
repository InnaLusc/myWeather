import React from "react";
import styled from "styled-components";

 
 
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
    width: 150px;
    height: 150px;
    background-color: #e4e4dfd2;
    color: #6d6219;
  }
 `;
 const Span = styled.span `
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


const Card = ({weather, weather5d}) => {
    // console.log(weather)
    // console.log(weather5d)
 return(

    <Container>
        <span className="city">{weather.name}</span>
        <span className="temp">{weather.main.temp}°C</span>
        <span className="cel">{weather.main.feels_like}°C</span>
        <span className="weter">{weather.wind.speed}m/s</span>
        <span className="water">{weather.main.humidity}%</span>
    </Container>
 )
 
}

export default Card;
// console.log(weather)
// console.log(weather5d)
// return <div>Card
// { <Doughnut data={weather5d.list} /> }
// </div>;