import Project from './components/Project/Project';
import Login from './components/User/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <Router>
     <Navbar />
      <div className="container">
      <h1>Project Manager</h1>
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/project" element={<Project />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;