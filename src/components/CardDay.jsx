import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
align-items: end;
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
const IconImg = styled.img``;

function CardDay({data}) {
    console.log(data)
  return(
    <Container>
        
    <span className="data">{data.dt_txt}</span>;
    {/* <span className="temp">{main.temp} °C</span> */}
    </Container>
  )
}

export default CardDay;
