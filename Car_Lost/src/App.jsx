import Home from './Commponent/Home/Home.jsx';
import About from './Commponent/About/About.jsx';
import Update from './Commponent/Update/Update.jsx';



import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Commponent/Login/Login.jsx';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        

      </Routes>
    </>
  )
}

export default App
