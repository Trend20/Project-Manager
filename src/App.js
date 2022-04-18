import Project from './components/Project/Project';
import Login from './components/User/Login';
import Register from './components/User/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <Router>
     <Navbar />
      <div className="container mt-5">
      <div className="header mt-3">
        <h3>Welcome to Manager!!</h3>
        <p><b>Manager</b> is a web application that helps you manage your projects. It will help you keep track of all your completed projects.</p>
        </div>
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