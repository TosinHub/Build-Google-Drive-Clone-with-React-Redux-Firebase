
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Drive from './Components/Drive';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './Components/SideBar';
import Model from './Components/Model';
import FolderModel from './Components/FolderModel';
import PhotoModel from './Components/PhotoModel';
import PhotoDisplay from './Components/photoDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { selectUid, setLogIn,setLogOut } from './Slices/user/userSlice';
import Login from './Components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./firebase/firebase"


function App() {
  const user = useSelector(selectUid)
  const dispatch = useDispatch()
  console.log(user)

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{

      if(user){
         dispatch(setLogIn({uid:user.uid, photo: user.photoURL}))
      } else{
        dispatch(setLogOut({uid:null, photo: null}))
      }
       
    })
  })
  return (

    <Router> 
          <Header/>
          {
            user ? 
            (
              <>  <Container>
              <SideBar />
        
             <Routes>
               <Route path="/" element={<Drive/>}/>
             </Routes>
           </Container>
           <Model/>
           <PhotoModel />
           <FolderModel/>
           <PhotoDisplay/></>
            ):

            (
              <Login/>
            )
          }
     
    </Router>
   
  );
}

export default App;


const Container = styled.div`
  display: flex;
`;
