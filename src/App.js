import Project from './components/Project/Project';
import Login from './components/User/Login';
import Register from './components/User/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <Router>
     <Navbar />
      <div className="container">
      <h1>Project Manager</h1>
      <Routes>
         <Route path="/" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;