import React from "react";
import styled from "styled-components";

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #e5e3db;
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
