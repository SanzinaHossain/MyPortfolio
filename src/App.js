import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './DashBoard/Pages/Home';
import Projects from './DashBoard/Pages/Projects';
import Blog from './DashBoard/Pages/Blog';
import Contact from './DashBoard/Pages/Contact';
import DashBoard from './DashBoard/DashBoard';
import Navbar from './DashBoard/Pages/Navbar';
import Skills from './DashBoard/Pages/Skills';
import ProjectDetails from './DashBoard/Pages/ProjectDetails';
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
       <Route path="navbar" element={<Navbar></Navbar>}></Route>
      <Route path="/" element={
            <DashBoard/>
        }>
           <Route index element={<Home></Home>}></Route>
           <Route path="projects" element={<Projects></Projects>}></Route>
           <Route path="about" element={<Blog></Blog>}></Route>
           <Route path="skills" element={<Skills></Skills>}></Route>
           <Route path="contact" element={<Contact></Contact>}></Route>
           <Route path="projectDetails" element={<ProjectDetails></ProjectDetails>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
