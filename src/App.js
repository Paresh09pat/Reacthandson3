import Home from "./Components/Home"
import ContactUs from "./Components/Contact"
import Students from "./Components/Students"
import './App.css';
import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
  
    <div>
      <div className="navBar">
        <div><Link to="/Home" className="label">Home</Link></div>
        <div><Link to="/Students" className="label">Students</Link></div>
        <div><Link to="/ContactUs" className="label">Contact Us</Link></div>
        
      </div>
    
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      
      </Routes>
   
    </div>
   
  );
}

export default App;