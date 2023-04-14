import React from "react";
import styled from "styled-components";

const Content = styled.div`
justify-content: center;
align-items: center;
color: #6d6219;
text-transform: uppercase;
`;



function Loader() {
  return (
     <Content>
    Loading...
    </Content> 
  )
 
}

export default Loader;
