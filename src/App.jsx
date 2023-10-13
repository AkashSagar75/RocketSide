 import React from 'react'
 import { BrowserRouter, Routes,Route } from 'react-router-dom'
 import Nabb from './Components/Nabb';
 import Footer from './Components/Footer';
 import Belog from './Components/Belog';
 import Overview from './Components/Overview';
 import Features from './Components/Features/Features';
 import Newaccount from './Components/Newaccount';
 
 import Login from './Components/Login'
 import './assets/Css/index.css'
  
import 'bootstrap/dist/css/bootstrap.min.css';
 export default function App() {
   return (
     <>
     <BrowserRouter>
     <Nabb/>
       <Routes>
        <Route path='/Overview' element={<Overview/>}></Route>
        <Route path='features' element={<Features/>}></Route>
        <Route path='belog' element={<Belog/>}></Route>
        
        <Route path='login' element={<Login/>}></Route>
        <Route path='newaccount' element={<Newaccount/>}></Route>

       </Routes>
       <Footer/>
     </BrowserRouter>
     </>
   )
 }
 