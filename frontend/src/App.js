import './App.css';
import NavBar from './components/NavBar';
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
import Graphs from './pages/Graphs';
import HashTable from './pages/HashTable';
import Heap from './pages/Heap';
import LinkedList from './pages/LinkedLists';
import Queues from './pages/Queues';
import Stack from './pages/Stack';
import Trees from './pages/Trees';
import Lists from './pages/Lists';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/datastructures" element={<DataStructures />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/editor" element={<CodeEditor />} />
            <Route path="/bigo" element={<BigO />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/hashtable" element={<HashTable />} />
            <Route path="/heap" element={<Heap />} />
            <Route path="/linkedlist" element={<LinkedList />} />
            <Route path="/queue" element={<Queues />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/tree" element={<Trees />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;