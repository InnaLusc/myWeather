import React from "react";
import styled from "styled-components";
import * as dayjs from 'dayjs'
dayjs().format()

const Container = styled.div`
display: flex;
flex-direction: column ;
justify-content: space-between;
align-items: center;
gap: 10px;
object-fit: cover;
margin: 10px;
padding: 30px;
top: 10%;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(0px);
-webkit-backdrop-filter: blur(0px);
border: 4px solid rgba(255, 255, 255, 1);
background-color: #edf5f083;
color: #6d6219;
font-size: 20px ;
border-radius: 15px;
`;

const IconWeather = styled.img`
 height: 70px;
 width: 70px;
 object-fit:cover;
`;

const IconImg = styled.img``;

function CardDay({data}) {
    const Crop = (item) => {
        return dayjs(item).format('DD MMMM')
    };
  return(
    <Container>
    <IconWeather src={`https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`}/>
    <span>{Crop(data.dt_txt)}</span>
    <span>{data.main.temp.toFixed()} °C</span>
    </Container>
  )
}

export default CardDay;
