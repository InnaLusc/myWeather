import React from "react";
import styled from "styled-components";

 
 const Header = styled.div``;
 const Footer = styled.div``;
 const Container = styled.div`
 display: flex;
 height: 500px;
 width: 500px;
 border: 2px solid red;
 ${Header}{
    height: 200px;
    width: 200px;
    background-color: blue;
    &:hover {
        background-color: green;
    }
 }
 ${`p`}{
    color: red;
 }
 `;
const HeaderTitle = styled.h1` 

`;
const Card = ({weather, weather5d}) => {
 return(
    // <div className="container">
    //    <div className="header">
    //    </div>
    //    <div className="footer">
    //    </div>
    // </div>
    <Container>
        <Header>header
            <p >20</p>
            <HeaderTitle>30%</HeaderTitle>
        </Header>
        <Footer>footer</Footer>
    </Container>
 )

}

export default Card;
// console.log(weather)
// console.log(weather5d)
// return <div>Card
// { <Doughnut data={weather5d.list} /> }
// </div>;