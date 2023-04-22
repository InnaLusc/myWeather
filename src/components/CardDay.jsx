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
margin: 10px;
padding: 30px;
top: 10%;
background-color: #edf5f083;
color: #6d6219;
font-size: 20px ;
border-radius: 15px;
`;
const IconWeather = styled.img`
 height: 70px;
 width: 70px;
`;
const IconImg = styled.img``;

function CardDay({data}) {
    const Crop = (item) => {
        return dayjs(item).format('DD MMMM')
    };
    console.log(data)
  return(
    <Container>
    <IconWeather src={`https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`}/>
    <span>{Crop(data.dt_txt)}</span>
    <span>{data.main.temp} °C</span>
    </Container>
  )
}

export default CardDay;
