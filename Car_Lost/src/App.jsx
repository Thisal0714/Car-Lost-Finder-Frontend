import Home from './Commponent/Home/Home.jsx';
import About from './Commponent/About/About.jsx';
import Update from './Commponent/Update/Update.jsx'


import './App.css'
import { Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        

      </Routes>
    </>
  )
}

export default App
