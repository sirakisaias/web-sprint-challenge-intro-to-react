import axios from 'axios';
import React,{useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starData, setStarData] = useState([]);

  const Styledh1 = styled.h1`
  font-size: 90px;
  
  `

  useEffect(()=>{
    axios
    .get('https://swapi.dev/api/people/')
    .then(res =>{
      setStarData(res.data)
      console.log(res);
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <Styledh1 className="Header">Star Wars</Styledh1>
      {starData.map(item =>{
        return <Character key={item.name} data ={item}/>
      })}
    </div>
  );
}

export default App;
