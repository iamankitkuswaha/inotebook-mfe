import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {NotesState} from "./context/NotesState";

function App() {
  return (
    <>
    <NotesState>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path ="/home" element={<Home/>}/>
            <Route path ="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </NotesState>
    </>
  )
}

export default App;
