import React from "react";
import styled from "styled-components";

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #6d6219;
text-transform: uppercase;
margin: 300px;
`;



function Loader() {
  return (
     <Content>
    Loading...
    </Content> 
  )
 
}

export default Loader;
