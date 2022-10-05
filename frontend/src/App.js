import './App.css';
import NavBar from './components/NavBar';
//import Layout from './layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import LeetCode from './pages/LeetCode';
import DataStructures from './pages/DataStructures';
import Patterns from './pages/Patterns';
import Algorithms from './pages/Algorithms';
import BigO from './pages/BigO';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/datastructures" element={<DataStructures />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/bigo" element={<BigO />} />
            <Route path="/editor" element={<CodeEditor />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

//<Layout/>