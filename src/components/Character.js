// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledDiv= styled.div`
  text-align: center;
  align-items:center;
  margin:1%;
  justify-content: space-evenly;
  border: 0.3px solid black;
  color:#36454f;
  
`
const StyleP= styled.div`
color:purple;
font-size: 20px;
`
const StyleTitle = styled.div`
display:flex;
justify-content: center;
`

const Data = (props) =>{
    const {data} = props;
    const [toggle, setToggle] = React.useState(true);

    return (

        <StyledDiv>
            <StyleTitle class="title">
                <h1 onClick = {()=> setToggle(!toggle) }>{data.name}</h1>
                
            </StyleTitle>
            { toggle &&
            <StyleP class="info"> 
            <p>Birth year: {data.birth_year}</p>
            <p>Eyes color: {data.eye_color}</p>
            <p>Gender: {data.gender}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Mass: {data.mass}</p>
            <p>Skin Color: {data.skin_color}</p>
            </StyleP>
            }
        </StyledDiv>
    )
}

export default Data;