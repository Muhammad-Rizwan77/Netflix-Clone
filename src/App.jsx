import React, { useEffect } from 'react'
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login'
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  
  // useEffect(()=>{
  //   const navigate = useNavigate();
  //   onAuthStateChanged(auth, async (user)=>{
  //     if(user){
  //       console.log("Logged In")
  //       navigate('/')
  //     }else{
  //       console.log("Logged Out")
  //       navigate('/login')
  //     }
  //   })
  // },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Player/:id' element={<Player/>}/>
      </Routes> 
    </div>
  )
}

export default App
