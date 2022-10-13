
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos"
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <h1>hello world</h1>
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
