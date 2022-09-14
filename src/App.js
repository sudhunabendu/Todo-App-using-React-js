// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./components/Home";
import Blog from './components/Blog';
import NewTodo from './components/NewTodo';
import Navbar from './components/Layouts/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/add" element={<NewTodo/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
