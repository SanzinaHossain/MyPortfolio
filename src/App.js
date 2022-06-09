import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './DashBoard/Pages/Home';
import Projects from './DashBoard/Pages/Projects';
import Blog from './DashBoard/Pages/Blog';
import Contact from './DashBoard/Pages/Contact';
import DashBoard from './DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
            <DashBoard/>
        }>
           <Route index element={<Home></Home>}></Route>
           <Route path="projects" element={<Projects></Projects>}></Route>
           <Route path="blogs" element={<Blog></Blog>}></Route>
           <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
