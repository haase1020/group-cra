import React, {useState}from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Photo from "./Components/Photo.js";
import styled from "styled-components"

const AppStyle = styled.div`

background-image: url("https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
max-width: 1200px;
width: 100%;
margin: 0 auto;
height: 800px;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`

const App = () => {
  const [profileName, setProfileName] = useState('Zac');
  const [title, setTitle] = useState ('NASA Photo of the Day')
  return (
    <AppStyle className="App">
      <Header name = {profileName} title = {title}/>
      <Photo title ={title}/>
    </AppStyle>
  );
}

export default App;
