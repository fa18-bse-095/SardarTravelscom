import React from 'react';
import "./App.css";
import{ BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Components/pages/Home';
import Navbar from './Components/Navbar';
import Gallery from './Components/pages/Gallery';
import Footer from './Components/Footer';
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';
import Login from './Components/pages/Login';



function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   
   <Routes>
   <Route path="/" element={<Home/>} ></Route>
   <Route path='/gallery' element={<Gallery/>}></Route>
   <Route path='/contact' element ={<Contact/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   </Routes>
   <Footer/>
   

   </BrowserRouter>
   
   </>
  );
}

export default App;
