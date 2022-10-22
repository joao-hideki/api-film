import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar/index';
import { Footer } from './components/Footer/index';
import './App.css'

function App() {
 
  return (
    <div>
      <Navbar/> 
      <Outlet/>  
      <Footer/>    
    </div>
  )
}

export default App
