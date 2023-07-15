
import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Drive from './Components/Drive';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './Components/SideBar';
import Model from './Components/Model';


function App() {
  return (

    <Router> 
          <Header/>
       <Container>
       <SideBar />
 
      <Routes>
        <Route path="/" element={<Drive/>}/>
      </Routes>
    </Container>
    <Model/>
    </Router>
   
  );
}

export default App;


const Container = styled.div`
  display: flex;
`;
