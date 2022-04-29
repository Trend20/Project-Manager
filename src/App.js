import Project from './components/Project/Project';
import Login from './components/User/Login';
import Register from './components/User/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
   <Router>
      <div className="container mt-5"> 
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </div>
   </Router>
  );
}

export default App;